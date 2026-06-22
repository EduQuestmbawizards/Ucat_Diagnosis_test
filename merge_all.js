/**
 * merge_all.js – Merges question files for all 4 UCAT categories
 * into master_questions.js files in their respective _parts directories.
 * 
 * Usage: node merge_all.js
 */

const fs = require('fs');
const path = require('path');

const BASE = __dirname;

// Category configurations
const CATEGORIES = [
  {
    name: 'VR',
    label: 'Verbal Reasoning',
    outDir: 'test_vr_parts',
    sources: [
      { dir: 'test_2', file: 'question_2.js' },
      { dir: 'test_7', file: 'question_7.js' },
      { dir: 'test_11', file: 'question_11.js' },
    ]
  },
  {
    name: 'DM',
    label: 'Decision Making',
    outDir: 'test_dm_parts',
    sources: [
      { dir: 'test_3', file: 'question_3.js' },
      { dir: 'test_8', file: 'question_8.js' },
      { dir: 'test_13', file: 'question_13.js' },
    ]
  },
  {
    name: 'QR',
    label: 'Quantitative Reasoning',
    outDir: 'test_qr_parts',
    sources: [
      { dir: 'test_4', file: 'question_4.js' },
      { dir: 'test_9', file: 'question_9.js' },
      { dir: 'test_12', file: 'question_12.js' },
    ]
  },
  {
    name: 'SJ',
    label: 'Situational Judgement',
    outDir: 'test_sj_parts',
    sources: [
      { dir: 'test_5', file: 'question_5.js' },
      { dir: 'test_10', file: 'question_10.js' },
      { dir: 'test_14', file: 'question_14.js' },
    ]
  }
];

/**
 * Parse a question_X.js file to extract PASSAGES and QUESTIONS.
 * The file format is:  const PASSAGES = {...};  const QUESTIONS = [...];
 */
function parseQuestionFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  
  // Use Function constructor to evaluate the file in an isolated scope
  // Replace 'const' with 'var' so they become accessible
  let code = raw.replace(/^const\s+PASSAGES/m, 'var PASSAGES')
               .replace(/^const\s+QUESTIONS/m, 'var QUESTIONS');
  
  // Execute and capture
  const fn = new Function(code + '\nreturn { PASSAGES: PASSAGES, QUESTIONS: QUESTIONS };');
  return fn();
}

/**
 * Fix image paths in question text/explanation/options.
 * Converts relative paths like "images/foo.png" or "image/foo.png" 
 * to "../test_X/images/foo.png"
 */
function fixImagePaths(str, sourceDir) {
  if (!str || typeof str !== 'string') return str;
  // Fix src="images/..." or src="image/..."
  return str.replace(/src="(images?\/)/g, `src="../${sourceDir}/$1`);
}

function processCategory(cat) {
  console.log(`\n━━━ Processing ${cat.label} (${cat.name}) ━━━`);
  
  let allPassages = {};
  let allQuestions = [];
  
  for (const src of cat.sources) {
    const filePath = path.join(BASE, src.dir, src.file);
    console.log(`  Reading ${filePath}...`);
    
    const { PASSAGES, QUESTIONS } = parseQuestionFile(filePath);
    
    // Prefix passage IDs to avoid collisions
    const prefix = src.dir + '_';
    const prefixedPassages = {};
    
    if (PASSAGES && typeof PASSAGES === 'object') {
      for (const [pid, pData] of Object.entries(PASSAGES)) {
        const newPid = prefix + pid;
        prefixedPassages[newPid] = {
          ...pData,
          id: newPid,
          // Fix image paths in passage text
          text: fixImagePaths(pData.text, src.dir)
        };
      }
    }
    
    // Add prefixed passages to master
    Object.assign(allPassages, prefixedPassages);
    
    // Process questions: update passageId and fix image paths
    for (const q of QUESTIONS) {
      const newQ = { ...q };
      
      // Update passageId reference
      if (q.passageId) {
        newQ.passageId = prefix + q.passageId;
      }
      
      // Fix image paths in text, explanation, and options
      newQ.text = fixImagePaths(q.text, src.dir);
      newQ.explanation = fixImagePaths(q.explanation, src.dir);
      if (Array.isArray(q.options)) {
        newQ.options = q.options.map(opt => fixImagePaths(opt, src.dir));
      }
      
      allQuestions.push(newQ);
    }
    
    console.log(`    → ${Object.keys(PASSAGES || {}).length} passages, ${QUESTIONS.length} questions`);
  }
  
  // Re-sequence question IDs from 1 to N
  allQuestions = allQuestions.map((q, i) => ({
    ...q,
    id: i + 1
  }));
  
  console.log(`  Total: ${allQuestions.length} questions, ${Object.keys(allPassages).length} passages`);
  
  // Create output directory
  const outDir = path.join(BASE, cat.outDir);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  // Write master_questions.js
  const outFile = path.join(outDir, 'master_questions.js');
  const output = `// Auto-generated master questions file for ${cat.label}
// Total: ${allQuestions.length} questions from ${cat.sources.map(s => s.file).join(', ')}
// Generated: ${new Date().toISOString()}

const PASSAGES = ${JSON.stringify(allPassages, null, 2)};

const QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};
`;
  
  fs.writeFileSync(outFile, output, 'utf-8');
  console.log(`  ✅ Written to ${outFile}`);
  
  return { total: allQuestions.length, passages: Object.keys(allPassages).length };
}

// ── Main ──
console.log('🔧 UCAT Question Merger – All Categories');
console.log('=========================================');

const results = {};
for (const cat of CATEGORIES) {
  results[cat.name] = processCategory(cat);
}

console.log('\n\n📊 Summary:');
console.log('═══════════════════════════════════════');
for (const cat of CATEGORIES) {
  const r = results[cat.name];
  const parts = Math.ceil(r.total / 20);
  const lastCardQs = r.total % 20 || 20;
  console.log(`  ${cat.label}: ${r.total} questions → ${parts} parts (last card: ${lastCardQs} Qs)`);
}
console.log('═══════════════════════════════════════');
console.log('✅ All done!');
