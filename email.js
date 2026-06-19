// =============================================
// email.js – Nodemailer API Integration
// Digital SAT Practice Exams
// Admin: rupali.eduquest@gmail.com
// =============================================
// Sends emails via /api/send-email serverless function.
// SMTP credentials are stored securely in Vercel
// environment variables (never exposed to browser).
// =============================================

const EMAIL_API_URL = '/api/send-email';

// ── Send admin email when student submits a test ───────
async function sendEmails(result) {
  try {
    const res = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'result',
        result: {
          student:       result.student,
          examName:      result.examName,
          correct:       result.correct,
          wrong:         result.wrong,
          unattempted:   result.unattempted,
          total:         result.total,
          pct:           result.pct,
          grade:         result.grade,
          scaled:        result.scaled,
          rwScore:       result.rwScore,
          mathScore:     result.mathScore,
          submitTime:    result.submitTime,
          topicAnalysis: result.topicAnalysis,
        }
      })
    });

    const data = await res.json();
    if (res.ok) {
      console.log('✅ Admin email sent successfully:', data.message);
    } else {
      console.error('❌ Email API error:', data.error || data);
    }
  } catch (err) {
    console.error('❌ Email network error:', err);
  }
}

// ── Send admin email when a new user signs up ───────
async function sendSignupNotification(userEmail) {
  try {
    const res = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'signup',
        userEmail: userEmail,
      })
    });

    const data = await res.json();
    if (res.ok) {
      console.log('✅ Admin signup notification sent successfully:', data.message);
    } else {
      console.error('❌ Signup notification API error:', data.error || data);
    }
  } catch (err) {
    console.error('❌ Signup notification network error:', err);
  }
}

// ── Send admin email when a user requests access ───────
async function sendAccessRequest(userEmail) {
  try {
    const res = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'access_request',
        userEmail: userEmail,
      })
    });

    const data = await res.json();
    if (res.ok) {
      console.log('✅ Admin access request notification sent successfully:', data.message);
    } else {
      console.error('❌ Access request API error:', data.error || data);
    }
  } catch (err) {
    console.error('❌ Access request network error:', err);
  }
}
