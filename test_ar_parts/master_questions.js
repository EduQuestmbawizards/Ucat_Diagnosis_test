// UCAT Abstract Reasoning Master Question Bank (385 Distinct Questions)
// 7 Full Tests x 55 Questions per Test
// Zero question repetition, mathematically verified rules, shuffled options

const QUESTIONS = [
  {
    "id": 1,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Trapezoid shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 1 (Set 1, Item 1):</strong> Box 1.1 contains 4 vertices from Square and exactly 5 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 4 (even) and lines = vertices + 1 (5), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 2,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Trapezoid shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 2 (Set 1, Item 2):</strong> Box 1.2 contains 5 vertices from Trapezoid and exactly 10 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 5 (odd) and lines = 2 * vertices (10), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 3,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Trapezoid shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 3 (Set 1, Item 3):</strong> Box 1.3 contains 4 vertices from Square and 8 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 4 (even) but lines (8) != vertices + 1 (5). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 4,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Trapezoid shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 4 (Set 1, Item 4):</strong> Box 1.4 contains 6 vertices from Square and 7 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 6 (even) and lines = 7 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 5,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Trapezoid shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 5 (Set 1, Item 5):</strong> Box 1.5 contains 7 vertices from Trapezoid and 14 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 7 (odd) and lines = 2 * vertices (14), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 6,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Nonagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 6 (Set 2, Item 1):</strong> Box 2.1 features a Rhombus with right angles and exactly 4 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Rhombus and 4 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 7,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Nonagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 7 (Set 2, Item 2):</strong> Box 2.2 features a Regular Nonagon with 0 right angles and exactly 5 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Regular Nonagon and 5 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 8,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Nonagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 8 (Set 2, Item 3):</strong> Box 2.3 features a Rhombus with right angles and 7 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains right-angled shape but circle count is 7 (not 4). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 9,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Nonagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 9 (Set 2, Item 4):</strong> Box 2.4 features two Rhombus shapes with right angles and exactly 4 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Rhombus shapes and 4 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 10,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Nonagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 10 (Set 2, Item 5):</strong> Box 2.5 features two Regular Nonagon shapes (0 right angles) and exactly 5 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Regular Nonagon shapes and 5 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 11,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Five-Pointed Star segments is 7.<br><br><strong>Test Figure 11 (Set 3, Item 1):</strong> Box 3.1: Symmetrical arrangement of Regular Hexagon with 90-degree rotational invariance and exactly 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 4-fold symmetry with 6 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 12,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Five-Pointed Star segments is 7.<br><br><strong>Test Figure 12 (Set 3, Item 2):</strong> Box 3.2: 3-fold symmetrical pinwheel of Five-Pointed Star with 120-degree rotational invariance and exactly 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies 3-fold symmetry with 7 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 13,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Five-Pointed Star segments is 7.<br><br><strong>Test Figure 13 (Set 3, Item 3):</strong> Box 3.3: Asymmetrical arrangement of Regular Hexagon with 6 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 14,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Five-Pointed Star segments is 7.<br><br><strong>Test Figure 14 (Set 3, Item 4):</strong> Box 3.4: Star figure of Regular Hexagon with 90-degree rotational symmetry and 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (6). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 15,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Five-Pointed Star segments is 7.<br><br><strong>Test Figure 15 (Set 3, Item 5):</strong> Box 3.5: Triangular lattice of Five-Pointed Star with 120-degree rotational symmetry and 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (7). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 16,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Greek Cross.<br><br><strong>Test Figure 16 (Set 4, Item 1):</strong> Box 4.1: Contains Regular Nonagon geometry with exactly 7 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 7 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 17,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Greek Cross.<br><br><strong>Test Figure 17 (Set 4, Item 2):</strong> Box 4.2: Contains Greek Cross geometry with 0 parallel lines and exactly 8 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains 0 parallel lines and 8 crossings (>= 8), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 18,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Greek Cross.<br><br><strong>Test Figure 18 (Set 4, Item 3):</strong> Box 4.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Fails parallel line requirement for Set A (needs 7) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 19,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Greek Cross.<br><br><strong>Test Figure 19 (Set 4, Item 4):</strong> Box 4.4: Contains two separate Regular Nonagon polygons with a total of 7 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 7 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 20,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Greek Cross.<br><br><strong>Test Figure 20 (Set 4, Item 5):</strong> Box 4.5: Complex star of Greek Cross with 0 parallel lines and 10 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies Set B with 0 parallel lines and 10 crossings (>= 8). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 21,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 21 (Set 5, Item 1):</strong> Box 5.1: Inner 3-sided Ellipse nested inside a 5-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (5) - Inner sides (3) = 2, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 22,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 22 (Set 5, Item 2):</strong> Box 5.2: Inner 10-sided Equilateral Triangle nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides (10) - Outer sides (8) = 2, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 23,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 23 (Set 5, Item 3):</strong> Box 5.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 2).<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Side difference is 4, which does not equal 2. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 24,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 24 (Set 5, Item 4):</strong> Box 5.4: Inner 4-sided Ellipse nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 2, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 25,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 25 (Set 5, Item 5):</strong> Box 5.5: Inner 8-sided Equilateral Triangle nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides - Outer sides = 2, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 26,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Parallelogram arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 26 (Set 6, Item 1):</strong> Box 6.1: Features 6 Six-Pointed Star arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 6 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 27,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Parallelogram arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 27 (Set 6, Item 2):</strong> Box 6.2: Features 5 Parallelogram arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count = 5 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 28,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Parallelogram arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 28 (Set 6, Item 3):</strong> Box 6.3: Features 7 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Clockwise arrows but count (7) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 29,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Parallelogram arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 29 (Set 6, Item 4):</strong> Box 6.4: Features 8 Six-Pointed Star arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (8) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 30,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Parallelogram arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 30 (Set 6, Item 5):</strong> Box 6.5: Features 7 Parallelogram arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count (7) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 31,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Heptagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 31 (Set 7, Item 1):</strong> Box 7.1: Overlapping Maltese Cross shapes with exactly 8 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Maltese Cross with 8 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 32,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Heptagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 32 (Set 7, Item 2):</strong> Box 7.2: Overlapping Regular Heptagon shapes with exactly 7 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Features Regular Heptagon with 7 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 33,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Heptagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 33 (Set 7, Item 3):</strong> Box 7.3: Overlapping Maltese Cross shapes with 7 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Solid dots in Maltese Cross overlap is odd (7), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 34,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Heptagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 34 (Set 7, Item 4):</strong> Box 7.4: Three intersecting Maltese Cross shapes with 10 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 10 (even) in Maltese Cross overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 35,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Heptagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 35 (Set 7, Item 5):</strong> Box 7.5: Two intersecting Regular Heptagon shapes with 9 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Open rings = 9 (odd) in Regular Heptagon overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 36,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Ellipse shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 36 (Set 8, Item 1):</strong> Box 8.1 contains 8 vertices from Heart Shape and exactly 9 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 8 (even) and lines = vertices + 1 (9), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 37,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Ellipse shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 37 (Set 8, Item 2):</strong> Box 8.2 contains 9 vertices from Ellipse and exactly 18 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 9 (odd) and lines = 2 * vertices (18), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 38,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Ellipse shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 38 (Set 8, Item 3):</strong> Box 8.3 contains 8 vertices from Heart Shape and 12 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 8 (even) but lines (12) != vertices + 1 (9). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 39,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Ellipse shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 39 (Set 8, Item 4):</strong> Box 8.4 contains 10 vertices from Heart Shape and 11 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 10 (even) and lines = 11 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 40,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Ellipse shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 40 (Set 8, Item 5):</strong> Box 8.5 contains 11 vertices from Ellipse and 22 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 11 (odd) and lines = 2 * vertices (22), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 41,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Crescent Moon with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 41 (Set 9, Item 1):</strong> Box 9.1 features a Equilateral Triangle with right angles and exactly 6 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Equilateral Triangle and 6 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 42,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Crescent Moon with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 42 (Set 9, Item 2):</strong> Box 9.2 features a Crescent Moon with 0 right angles and exactly 7 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Crescent Moon and 7 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 43,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Crescent Moon with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 43 (Set 9, Item 3):</strong> Box 9.3 features a Equilateral Triangle with right angles and 9 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains right-angled shape but circle count is 9 (not 6). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 44,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Crescent Moon with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 44 (Set 9, Item 4):</strong> Box 9.4 features two Equilateral Triangle shapes with right angles and exactly 6 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Equilateral Triangle shapes and 6 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 45,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Crescent Moon with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 45 (Set 9, Item 5):</strong> Box 9.5 features two Crescent Moon shapes (0 right angles) and exactly 7 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Crescent Moon shapes and 7 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 46,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Square segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Shield Shape segments is 4.<br><br><strong>Test Figure 46 (Set 10, Item 1):</strong> Box 10.1: Symmetrical arrangement of Square with 180-degree rotational invariance and exactly 3 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 2-fold symmetry with 3 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 47,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Square segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Shield Shape segments is 4.<br><br><strong>Test Figure 47 (Set 10, Item 2):</strong> Box 10.2: 3-fold symmetrical pinwheel of Shield Shape with 120-degree rotational invariance and exactly 4 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies 3-fold symmetry with 4 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 48,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Square segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Shield Shape segments is 4.<br><br><strong>Test Figure 48 (Set 10, Item 3):</strong> Box 10.3: Asymmetrical arrangement of Square with 3 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 49,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Square segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Shield Shape segments is 4.<br><br><strong>Test Figure 49 (Set 10, Item 4):</strong> Box 10.4: Star figure of Square with 180-degree rotational symmetry and 3 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (3). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 50,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Square segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Shield Shape segments is 4.<br><br><strong>Test Figure 50 (Set 10, Item 5):</strong> Box 10.5: Triangular lattice of Shield Shape with 120-degree rotational symmetry and 4 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (4). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 51,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Square.<br><br><strong>Test Figure 51 (Set 11, Item 1):</strong> Box 11.1: Contains Rhombus geometry with exactly 4 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 4 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 52,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Square.<br><br><strong>Test Figure 52 (Set 11, Item 2):</strong> Box 11.2: Contains Square geometry with 0 parallel lines and exactly 5 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains 0 parallel lines and 5 crossings (>= 5), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 53,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Square.<br><br><strong>Test Figure 53 (Set 11, Item 3):</strong> Box 11.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Fails parallel line requirement for Set A (needs 4) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 54,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Square.<br><br><strong>Test Figure 54 (Set 11, Item 4):</strong> Box 11.4: Contains two separate Rhombus polygons with a total of 4 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 4 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 55,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Square.<br><br><strong>Test Figure 55 (Set 11, Item 5):</strong> Box 11.5: Complex star of Square with 0 parallel lines and 7 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies Set B with 0 parallel lines and 7 crossings (>= 5). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 56,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Pentagon has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 56 (Set 12, Item 1):</strong> Box 12.1: Inner 3-sided Regular Hexagon nested inside a 7-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (7) - Inner sides (3) = 4, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 57,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Pentagon has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 57 (Set 12, Item 2):</strong> Box 12.2: Inner 12-sided Regular Pentagon nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides (12) - Outer sides (8) = 4, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 58,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Pentagon has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 58 (Set 12, Item 3):</strong> Box 12.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 4).<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Side difference is 4, which does not equal 4. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 59,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Pentagon has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 59 (Set 12, Item 4):</strong> Box 12.4: Inner 4-sided Regular Hexagon nested inside a 8-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 4, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 60,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Pentagon has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 60 (Set 12, Item 5):</strong> Box 12.5: Inner 10-sided Regular Pentagon nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides - Outer sides = 4, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 61,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Regular Decagon arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 61 (Set 13, Item 1):</strong> Box 13.1: Features 10 Regular Nonagon arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 10 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 62,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Regular Decagon arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 62 (Set 13, Item 2):</strong> Box 13.2: Features 9 Regular Decagon arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count = 9 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 63,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Regular Decagon arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 63 (Set 13, Item 3):</strong> Box 13.3: Features 11 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Clockwise arrows but count (11) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 64,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Regular Decagon arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 64 (Set 13, Item 4):</strong> Box 13.4: Features 12 Regular Nonagon arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (12) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 65,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Regular Decagon arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 65 (Set 13, Item 5):</strong> Box 13.5: Features 11 Regular Decagon arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count (11) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 66,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 66 (Set 14, Item 1):</strong> Box 14.1: Overlapping Ellipse shapes with exactly 12 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Ellipse with 12 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 67,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 67 (Set 14, Item 2):</strong> Box 14.2: Overlapping Six-Pointed Star shapes with exactly 11 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Features Six-Pointed Star with 11 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 68,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 68 (Set 14, Item 3):</strong> Box 14.3: Overlapping Ellipse shapes with 11 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Solid dots in Ellipse overlap is odd (11), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 69,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 69 (Set 14, Item 4):</strong> Box 14.4: Three intersecting Ellipse shapes with 14 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 14 (even) in Ellipse overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 70,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 70 (Set 14, Item 5):</strong> Box 14.5: Two intersecting Six-Pointed Star shapes with 13 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Open rings = 13 (odd) in Six-Pointed Star overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 71,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Six-Pointed Star shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Chevron Arrow shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 71 (Set 15, Item 1):</strong> Box 15.1 contains 2 vertices from Six-Pointed Star and exactly 3 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 2 (even) and lines = vertices + 1 (3), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 72,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Six-Pointed Star shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Chevron Arrow shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 72 (Set 15, Item 2):</strong> Box 15.2 contains 3 vertices from Chevron Arrow and exactly 6 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 3 (odd) and lines = 2 * vertices (6), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 73,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Six-Pointed Star shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Chevron Arrow shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 73 (Set 15, Item 3):</strong> Box 15.3 contains 2 vertices from Six-Pointed Star and 6 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 2 (even) but lines (6) != vertices + 1 (3). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 74,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Six-Pointed Star shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Chevron Arrow shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 74 (Set 15, Item 4):</strong> Box 15.4 contains 4 vertices from Six-Pointed Star and 5 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 4 (even) and lines = 5 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 75,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Six-Pointed Star shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Chevron Arrow shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 75 (Set 15, Item 5):</strong> Box 15.5 contains 5 vertices from Chevron Arrow and 10 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 5 (odd) and lines = 2 * vertices (10), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 76,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Maltese Cross with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Right-Angled Triangle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 76 (Set 16, Item 1):</strong> Box 16.1 features a Maltese Cross with right angles and exactly 3 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Maltese Cross and 3 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 77,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Maltese Cross with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Right-Angled Triangle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 77 (Set 16, Item 2):</strong> Box 16.2 features a Right-Angled Triangle with 0 right angles and exactly 4 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Right-Angled Triangle and 4 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 78,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Maltese Cross with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Right-Angled Triangle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 78 (Set 16, Item 3):</strong> Box 16.3 features a Maltese Cross with right angles and 6 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains right-angled shape but circle count is 6 (not 3). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 79,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Maltese Cross with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Right-Angled Triangle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 79 (Set 16, Item 4):</strong> Box 16.4 features two Maltese Cross shapes with right angles and exactly 3 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Maltese Cross shapes and 3 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 80,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Maltese Cross with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Right-Angled Triangle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 80 (Set 16, Item 5):</strong> Box 16.5 features two Right-Angled Triangle shapes (0 right angles) and exactly 4 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Right-Angled Triangle shapes and 4 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 81,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Heart Shape segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><br><strong>Test Figure 81 (Set 17, Item 1):</strong> Box 17.1: Symmetrical arrangement of Heart Shape with 180-degree rotational invariance and exactly 5 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 2-fold symmetry with 5 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 82,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Heart Shape segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><br><strong>Test Figure 82 (Set 17, Item 2):</strong> Box 17.2: 3-fold symmetrical pinwheel of Rhombus with 120-degree rotational invariance and exactly 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies 3-fold symmetry with 6 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 83,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Heart Shape segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><br><strong>Test Figure 83 (Set 17, Item 3):</strong> Box 17.3: Asymmetrical arrangement of Heart Shape with 5 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 84,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Heart Shape segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><br><strong>Test Figure 84 (Set 17, Item 4):</strong> Box 17.4: Star figure of Heart Shape with 180-degree rotational symmetry and 5 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (5). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 85,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Heart Shape segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><br><strong>Test Figure 85 (Set 17, Item 5):</strong> Box 17.5: Triangular lattice of Rhombus with 120-degree rotational symmetry and 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (6). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 86,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Equilateral Triangle.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Regular Octagon.<br><br><strong>Test Figure 86 (Set 18, Item 1):</strong> Box 18.1: Contains Equilateral Triangle geometry with exactly 6 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 6 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 87,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Equilateral Triangle.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Regular Octagon.<br><br><strong>Test Figure 87 (Set 18, Item 2):</strong> Box 18.2: Contains Regular Octagon geometry with 0 parallel lines and exactly 7 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains 0 parallel lines and 7 crossings (>= 7), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 88,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Equilateral Triangle.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Regular Octagon.<br><br><strong>Test Figure 88 (Set 18, Item 3):</strong> Box 18.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Fails parallel line requirement for Set A (needs 6) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 89,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Equilateral Triangle.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Regular Octagon.<br><br><strong>Test Figure 89 (Set 18, Item 4):</strong> Box 18.4: Contains two separate Equilateral Triangle polygons with a total of 6 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 6 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 90,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Equilateral Triangle.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Regular Octagon.<br><br><strong>Test Figure 90 (Set 18, Item 5):</strong> Box 18.5: Complex star of Regular Octagon with 0 parallel lines and 9 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies Set B with 0 parallel lines and 9 crossings (>= 7). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 91,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Square has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Semicircle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 91 (Set 19, Item 1):</strong> Box 19.1: Inner 3-sided Square nested inside a 9-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (9) - Inner sides (3) = 6, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 92,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Square has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Semicircle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 92 (Set 19, Item 2):</strong> Box 19.2: Inner 14-sided Semicircle nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides (14) - Outer sides (8) = 6, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 93,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Square has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Semicircle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 93 (Set 19, Item 3):</strong> Box 19.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 6).<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Side difference is 4, which does not equal 6. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 94,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Square has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Semicircle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 94 (Set 19, Item 4):</strong> Box 19.4: Inner 4-sided Square nested inside a 10-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 6, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 95,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Square has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Semicircle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 95 (Set 19, Item 5):</strong> Box 19.5: Inner 12-sided Semicircle nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides - Outer sides = 6, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 96,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Rhombus arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Maltese Cross arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 96 (Set 20, Item 1):</strong> Box 20.1: Features 4 Rhombus arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 4 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 97,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Rhombus arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Maltese Cross arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 97 (Set 20, Item 2):</strong> Box 20.2: Features 3 Maltese Cross arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count = 3 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 98,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Rhombus arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Maltese Cross arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 98 (Set 20, Item 3):</strong> Box 20.3: Features 5 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Clockwise arrows but count (5) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 99,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Rhombus arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Maltese Cross arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 99 (Set 20, Item 4):</strong> Box 20.4: Features 6 Rhombus arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (6) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 100,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Rhombus arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Maltese Cross arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 100 (Set 20, Item 5):</strong> Box 20.5: Features 5 Maltese Cross arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count (5) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 101,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Diamond figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 101 (Set 21, Item 1):</strong> Box 21.1: Overlapping Regular Hexagon shapes with exactly 6 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Regular Hexagon with 6 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 102,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Diamond figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 102 (Set 21, Item 2):</strong> Box 21.2: Overlapping Diamond shapes with exactly 5 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Features Diamond with 5 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 103,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Diamond figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 103 (Set 21, Item 3):</strong> Box 21.3: Overlapping Regular Hexagon shapes with 5 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Solid dots in Regular Hexagon overlap is odd (5), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 104,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Diamond figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 104 (Set 21, Item 4):</strong> Box 21.4: Three intersecting Regular Hexagon shapes with 8 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 8 (even) in Regular Hexagon overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 105,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Diamond figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 105 (Set 21, Item 5):</strong> Box 21.5: Two intersecting Diamond shapes with 7 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Open rings = 7 (odd) in Diamond overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 106,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Nonagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Rectangle shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 106 (Set 22, Item 1):</strong> Box 22.1 contains 6 vertices from Regular Nonagon and exactly 7 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 6 (even) and lines = vertices + 1 (7), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 107,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Nonagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Rectangle shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 107 (Set 22, Item 2):</strong> Box 22.2 contains 7 vertices from Rectangle and exactly 14 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 7 (odd) and lines = 2 * vertices (14), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 108,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Nonagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Rectangle shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 108 (Set 22, Item 3):</strong> Box 22.3 contains 6 vertices from Regular Nonagon and 10 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 6 (even) but lines (10) != vertices + 1 (7). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 109,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Nonagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Rectangle shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 109 (Set 22, Item 4):</strong> Box 22.4 contains 8 vertices from Regular Nonagon and 9 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 8 (even) and lines = 9 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 110,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Nonagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Rectangle shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 110 (Set 22, Item 5):</strong> Box 22.5 contains 9 vertices from Rectangle and 18 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 9 (odd) and lines = 2 * vertices (18), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 111,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Ellipse with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Regular Hexagon with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 111 (Set 23, Item 1):</strong> Box 23.1 features a Ellipse with right angles and exactly 5 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Ellipse and 5 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 112,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Ellipse with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Regular Hexagon with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 112 (Set 23, Item 2):</strong> Box 23.2 features a Regular Hexagon with 0 right angles and exactly 6 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Regular Hexagon and 6 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 113,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Ellipse with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Regular Hexagon with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 113 (Set 23, Item 3):</strong> Box 23.3 features a Ellipse with right angles and 8 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains right-angled shape but circle count is 8 (not 5). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 114,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Ellipse with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Regular Hexagon with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 114 (Set 23, Item 4):</strong> Box 23.4 features two Ellipse shapes with right angles and exactly 5 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Ellipse shapes and 5 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 115,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Ellipse with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Regular Hexagon with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 115 (Set 23, Item 5):</strong> Box 23.5 features two Regular Hexagon shapes (0 right angles) and exactly 6 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Regular Hexagon shapes and 6 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 116,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Six-Pointed Star segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Circle segments is 8.<br><br><strong>Test Figure 116 (Set 24, Item 1):</strong> Box 24.1: Symmetrical arrangement of Six-Pointed Star with 180-degree rotational invariance and exactly 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 2-fold symmetry with 7 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 117,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Six-Pointed Star segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Circle segments is 8.<br><br><strong>Test Figure 117 (Set 24, Item 2):</strong> Box 24.2: 3-fold symmetrical pinwheel of Circle with 120-degree rotational invariance and exactly 8 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies 3-fold symmetry with 8 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 118,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Six-Pointed Star segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Circle segments is 8.<br><br><strong>Test Figure 118 (Set 24, Item 3):</strong> Box 24.3: Asymmetrical arrangement of Six-Pointed Star with 7 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 119,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Six-Pointed Star segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Circle segments is 8.<br><br><strong>Test Figure 119 (Set 24, Item 4):</strong> Box 24.4: Star figure of Six-Pointed Star with 180-degree rotational symmetry and 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (7). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 120,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Six-Pointed Star segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Circle segments is 8.<br><br><strong>Test Figure 120 (Set 24, Item 5):</strong> Box 24.5: Triangular lattice of Circle with 120-degree rotational symmetry and 8 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (8). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 121,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Maltese Cross.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Four-Pointed Star.<br><br><strong>Test Figure 121 (Set 25, Item 1):</strong> Box 25.1: Contains Maltese Cross geometry with exactly 3 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 3 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 122,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Maltese Cross.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Four-Pointed Star.<br><br><strong>Test Figure 122 (Set 25, Item 2):</strong> Box 25.2: Contains Four-Pointed Star geometry with 0 parallel lines and exactly 4 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains 0 parallel lines and 4 crossings (>= 4), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 123,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Maltese Cross.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Four-Pointed Star.<br><br><strong>Test Figure 123 (Set 25, Item 3):</strong> Box 25.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Fails parallel line requirement for Set A (needs 3) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 124,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Maltese Cross.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Four-Pointed Star.<br><br><strong>Test Figure 124 (Set 25, Item 4):</strong> Box 25.4: Contains two separate Maltese Cross polygons with a total of 3 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 3 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 125,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Maltese Cross.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Four-Pointed Star.<br><br><strong>Test Figure 125 (Set 25, Item 5):</strong> Box 25.5: Complex star of Four-Pointed Star with 0 parallel lines and 6 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies Set B with 0 parallel lines and 6 crossings (>= 4). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 126,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 126 (Set 26, Item 1):</strong> Box 26.1: Inner 3-sided Heart Shape nested inside a 6-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (6) - Inner sides (3) = 3, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 127,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 127 (Set 26, Item 2):</strong> Box 26.2: Inner 11-sided Heart Shape nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides (11) - Outer sides (8) = 3, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 128,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 128 (Set 26, Item 3):</strong> Box 26.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 3).<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Side difference is 4, which does not equal 3. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 129,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 129 (Set 26, Item 4):</strong> Box 26.4: Inner 4-sided Heart Shape nested inside a 7-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 3, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 130,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Heart Shape has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 130 (Set 26, Item 5):</strong> Box 26.5: Inner 9-sided Heart Shape nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides - Outer sides = 3, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 131,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Equilateral Triangle arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Isosceles Triangle arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 131 (Set 27, Item 1):</strong> Box 27.1: Features 8 Equilateral Triangle arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 8 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 132,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Equilateral Triangle arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Isosceles Triangle arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 132 (Set 27, Item 2):</strong> Box 27.2: Features 7 Isosceles Triangle arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count = 7 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 133,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Equilateral Triangle arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Isosceles Triangle arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 133 (Set 27, Item 3):</strong> Box 27.3: Features 9 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Clockwise arrows but count (9) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 134,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Equilateral Triangle arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Isosceles Triangle arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 134 (Set 27, Item 4):</strong> Box 27.4: Features 10 Equilateral Triangle arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (10) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 135,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Equilateral Triangle arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Isosceles Triangle arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 135 (Set 27, Item 5):</strong> Box 27.5: Features 9 Isosceles Triangle arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count (9) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 136,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Square figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Trapezoid figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 136 (Set 28, Item 1):</strong> Box 28.1: Overlapping Square shapes with exactly 10 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Square with 10 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 137,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Square figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Trapezoid figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 137 (Set 28, Item 2):</strong> Box 28.2: Overlapping Trapezoid shapes with exactly 9 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Features Trapezoid with 9 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 138,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Square figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Trapezoid figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 138 (Set 28, Item 3):</strong> Box 28.3: Overlapping Square shapes with 9 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Solid dots in Square overlap is odd (9), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 139,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Square figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Trapezoid figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 139 (Set 28, Item 4):</strong> Box 28.4: Three intersecting Square shapes with 12 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 12 (even) in Square overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 140,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Square figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Trapezoid figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 140 (Set 28, Item 5):</strong> Box 28.5: Two intersecting Trapezoid shapes with 11 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Open rings = 11 (odd) in Trapezoid overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 141,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Rhombus shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Regular Nonagon shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 141 (Set 29, Item 1):</strong> Box 29.1 contains 10 vertices from Rhombus and exactly 11 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 10 (even) and lines = vertices + 1 (11), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 142,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Rhombus shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Regular Nonagon shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 142 (Set 29, Item 2):</strong> Box 29.2 contains 11 vertices from Regular Nonagon and exactly 22 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 11 (odd) and lines = 2 * vertices (22), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 143,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Rhombus shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Regular Nonagon shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 143 (Set 29, Item 3):</strong> Box 29.3 contains 10 vertices from Rhombus and 14 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 10 (even) but lines (14) != vertices + 1 (11). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 144,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Rhombus shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Regular Nonagon shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 144 (Set 29, Item 4):</strong> Box 29.4 contains 12 vertices from Rhombus and 13 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 12 (even) and lines = 13 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 145,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Rhombus shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Regular Nonagon shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 145 (Set 29, Item 5):</strong> Box 29.5 contains 13 vertices from Regular Nonagon and 26 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 13 (odd) and lines = 2 * vertices (26), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 146,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Hexagon with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Five-Pointed Star with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 146 (Set 30, Item 1):</strong> Box 30.1 features a Regular Hexagon with right angles and exactly 2 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Regular Hexagon and 2 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 147,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Hexagon with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Five-Pointed Star with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 147 (Set 30, Item 2):</strong> Box 30.2 features a Five-Pointed Star with 0 right angles and exactly 3 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Five-Pointed Star and 3 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 148,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Hexagon with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Five-Pointed Star with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 148 (Set 30, Item 3):</strong> Box 30.3 features a Regular Hexagon with right angles and 5 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains right-angled shape but circle count is 5 (not 2). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 149,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Hexagon with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Five-Pointed Star with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 149 (Set 30, Item 4):</strong> Box 30.4 features two Regular Hexagon shapes with right angles and exactly 2 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Regular Hexagon shapes and 2 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 150,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Hexagon with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Five-Pointed Star with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 150 (Set 30, Item 5):</strong> Box 30.5 features two Five-Pointed Star shapes (0 right angles) and exactly 3 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Five-Pointed Star shapes and 3 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 151,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Nonagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Greek Cross segments is 5.<br><br><strong>Test Figure 151 (Set 31, Item 1):</strong> Box 31.1: Symmetrical arrangement of Regular Nonagon with 90-degree rotational invariance and exactly 4 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 4-fold symmetry with 4 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 152,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Nonagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Greek Cross segments is 5.<br><br><strong>Test Figure 152 (Set 31, Item 2):</strong> Box 31.2: 3-fold symmetrical pinwheel of Greek Cross with 120-degree rotational invariance and exactly 5 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies 3-fold symmetry with 5 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 153,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Nonagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Greek Cross segments is 5.<br><br><strong>Test Figure 153 (Set 31, Item 3):</strong> Box 31.3: Asymmetrical arrangement of Regular Nonagon with 4 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 154,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Nonagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Greek Cross segments is 5.<br><br><strong>Test Figure 154 (Set 31, Item 4):</strong> Box 31.4: Star figure of Regular Nonagon with 90-degree rotational symmetry and 4 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (4). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 155,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Nonagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Greek Cross segments is 5.<br><br><strong>Test Figure 155 (Set 31, Item 5):</strong> Box 31.5: Triangular lattice of Greek Cross with 120-degree rotational symmetry and 5 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (5). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 156,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Ellipse.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Equilateral Triangle.<br><br><strong>Test Figure 156 (Set 32, Item 1):</strong> Box 32.1: Contains Ellipse geometry with exactly 5 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 5 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 157,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Ellipse.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Equilateral Triangle.<br><br><strong>Test Figure 157 (Set 32, Item 2):</strong> Box 32.2: Contains Equilateral Triangle geometry with 0 parallel lines and exactly 6 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains 0 parallel lines and 6 crossings (>= 6), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 158,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Ellipse.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Equilateral Triangle.<br><br><strong>Test Figure 158 (Set 32, Item 3):</strong> Box 32.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Fails parallel line requirement for Set A (needs 5) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 159,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Ellipse.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Equilateral Triangle.<br><br><strong>Test Figure 159 (Set 32, Item 4):</strong> Box 32.4: Contains two separate Ellipse polygons with a total of 5 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 5 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 160,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Ellipse.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Equilateral Triangle.<br><br><strong>Test Figure 160 (Set 32, Item 5):</strong> Box 32.5: Complex star of Equilateral Triangle with 0 parallel lines and 8 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies Set B with 0 parallel lines and 8 crossings (>= 6). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 161,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Parallelogram has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 161 (Set 33, Item 1):</strong> Box 33.1: Inner 3-sided Six-Pointed Star nested inside a 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (8) - Inner sides (3) = 5, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 162,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Parallelogram has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 162 (Set 33, Item 2):</strong> Box 33.2: Inner 13-sided Parallelogram nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides (13) - Outer sides (8) = 5, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 163,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Parallelogram has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 163 (Set 33, Item 3):</strong> Box 33.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 5).<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Side difference is 4, which does not equal 5. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 164,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Parallelogram has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 164 (Set 33, Item 4):</strong> Box 33.4: Inner 4-sided Six-Pointed Star nested inside a 9-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 5, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 165,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Parallelogram has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 165 (Set 33, Item 5):</strong> Box 33.5: Inner 11-sided Parallelogram nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides - Outer sides = 5, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 166,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Maltese Cross arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Regular Heptagon arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 166 (Set 34, Item 1):</strong> Box 34.1: Features 12 Maltese Cross arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 12 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 167,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Maltese Cross arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Regular Heptagon arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 167 (Set 34, Item 2):</strong> Box 34.2: Features 11 Regular Heptagon arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count = 11 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 168,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Maltese Cross arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Regular Heptagon arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 168 (Set 34, Item 3):</strong> Box 34.3: Features 13 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Clockwise arrows but count (13) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 169,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Maltese Cross arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Regular Heptagon arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 169 (Set 34, Item 4):</strong> Box 34.4: Features 14 Maltese Cross arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (14) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 170,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Maltese Cross arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Regular Heptagon arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 170 (Set 34, Item 5):</strong> Box 34.5: Features 13 Regular Heptagon arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count (13) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 171,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Heart Shape figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Ellipse figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 171 (Set 35, Item 1):</strong> Box 35.1: Overlapping Heart Shape shapes with exactly 4 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Heart Shape with 4 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 172,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Heart Shape figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Ellipse figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 172 (Set 35, Item 2):</strong> Box 35.2: Overlapping Ellipse shapes with exactly 3 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Features Ellipse with 3 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 173,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Heart Shape figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Ellipse figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 173 (Set 35, Item 3):</strong> Box 35.3: Overlapping Heart Shape shapes with 3 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Solid dots in Heart Shape overlap is odd (3), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 174,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Heart Shape figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Ellipse figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 174 (Set 35, Item 4):</strong> Box 35.4: Three intersecting Heart Shape shapes with 6 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 6 (even) in Heart Shape overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 175,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Heart Shape figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Ellipse figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 175 (Set 35, Item 5):</strong> Box 35.5: Two intersecting Ellipse shapes with 5 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Open rings = 5 (odd) in Ellipse overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 176,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Equilateral Triangle shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Crescent Moon shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 176 (Set 36, Item 1):</strong> Box 36.1 contains 4 vertices from Equilateral Triangle and exactly 5 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 4 (even) and lines = vertices + 1 (5), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 177,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Equilateral Triangle shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Crescent Moon shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 177 (Set 36, Item 2):</strong> Box 36.2 contains 5 vertices from Crescent Moon and exactly 10 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 5 (odd) and lines = 2 * vertices (10), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 178,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Equilateral Triangle shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Crescent Moon shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 178 (Set 36, Item 3):</strong> Box 36.3 contains 4 vertices from Equilateral Triangle and 8 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 4 (even) but lines (8) != vertices + 1 (5). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 179,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Equilateral Triangle shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Crescent Moon shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 179 (Set 36, Item 4):</strong> Box 36.4 contains 6 vertices from Equilateral Triangle and 7 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 6 (even) and lines = 7 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 180,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Equilateral Triangle shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Crescent Moon shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 180 (Set 36, Item 5):</strong> Box 36.5 contains 7 vertices from Crescent Moon and 14 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 7 (odd) and lines = 2 * vertices (14), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 181,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Square with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Shield Shape with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 181 (Set 37, Item 1):</strong> Box 37.1 features a Square with right angles and exactly 4 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Square and 4 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 182,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Square with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Shield Shape with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 182 (Set 37, Item 2):</strong> Box 37.2 features a Shield Shape with 0 right angles and exactly 5 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Shield Shape and 5 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 183,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Square with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Shield Shape with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 183 (Set 37, Item 3):</strong> Box 37.3 features a Square with right angles and 7 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains right-angled shape but circle count is 7 (not 4). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 184,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Square with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Shield Shape with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 184 (Set 37, Item 4):</strong> Box 37.4 features two Square shapes with right angles and exactly 4 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Square shapes and 4 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 185,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Square with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Shield Shape with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 185 (Set 37, Item 5):</strong> Box 37.5 features two Shield Shape shapes (0 right angles) and exactly 5 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Shield Shape shapes and 5 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 186,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Square segments is 7.<br><br><strong>Test Figure 186 (Set 38, Item 1):</strong> Box 38.1: Symmetrical arrangement of Rhombus with 90-degree rotational invariance and exactly 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 4-fold symmetry with 6 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 187,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Square segments is 7.<br><br><strong>Test Figure 187 (Set 38, Item 2):</strong> Box 38.2: 3-fold symmetrical pinwheel of Square with 120-degree rotational invariance and exactly 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies 3-fold symmetry with 7 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 188,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Square segments is 7.<br><br><strong>Test Figure 188 (Set 38, Item 3):</strong> Box 38.3: Asymmetrical arrangement of Rhombus with 6 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 189,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Square segments is 7.<br><br><strong>Test Figure 189 (Set 38, Item 4):</strong> Box 38.4: Star figure of Rhombus with 90-degree rotational symmetry and 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (6). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 190,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Rhombus segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Square segments is 7.<br><br><strong>Test Figure 190 (Set 38, Item 5):</strong> Box 38.5: Triangular lattice of Square with 120-degree rotational symmetry and 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (7). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 191,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Hexagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Regular Pentagon.<br><br><strong>Test Figure 191 (Set 39, Item 1):</strong> Box 39.1: Contains Regular Hexagon geometry with exactly 7 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 7 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 192,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Hexagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Regular Pentagon.<br><br><strong>Test Figure 192 (Set 39, Item 2):</strong> Box 39.2: Contains Regular Pentagon geometry with 0 parallel lines and exactly 8 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains 0 parallel lines and 8 crossings (>= 8), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 193,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Hexagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Regular Pentagon.<br><br><strong>Test Figure 193 (Set 39, Item 3):</strong> Box 39.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Fails parallel line requirement for Set A (needs 7) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 194,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Hexagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Regular Pentagon.<br><br><strong>Test Figure 194 (Set 39, Item 4):</strong> Box 39.4: Contains two separate Regular Hexagon polygons with a total of 7 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 7 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 195,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Regular Hexagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Regular Pentagon.<br><br><strong>Test Figure 195 (Set 39, Item 5):</strong> Box 39.5: Complex star of Regular Pentagon with 0 parallel lines and 10 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies Set B with 0 parallel lines and 10 crossings (>= 8). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 196,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Nonagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Decagon has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 196 (Set 40, Item 1):</strong> Box 40.1: Inner 3-sided Regular Nonagon nested inside a 5-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (5) - Inner sides (3) = 2, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 197,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Nonagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Decagon has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 197 (Set 40, Item 2):</strong> Box 40.2: Inner 10-sided Regular Decagon nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides (10) - Outer sides (8) = 2, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 198,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Nonagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Decagon has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 198 (Set 40, Item 3):</strong> Box 40.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 2).<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Side difference is 4, which does not equal 2. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 199,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Nonagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Decagon has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 199 (Set 40, Item 4):</strong> Box 40.4: Inner 4-sided Regular Nonagon nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 2, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 200,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Nonagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Decagon has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 200 (Set 40, Item 5):</strong> Box 40.5: Inner 8-sided Regular Decagon nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides - Outer sides = 2, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 201,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Ellipse arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Six-Pointed Star arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 201 (Set 41, Item 1):</strong> Box 41.1: Features 6 Ellipse arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 6 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 202,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Ellipse arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Six-Pointed Star arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 202 (Set 41, Item 2):</strong> Box 41.2: Features 5 Six-Pointed Star arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count = 5 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 203,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Ellipse arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Six-Pointed Star arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 203 (Set 41, Item 3):</strong> Box 41.3: Features 7 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Clockwise arrows but count (7) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 204,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Ellipse arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Six-Pointed Star arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 204 (Set 41, Item 4):</strong> Box 41.4: Features 8 Ellipse arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (8) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 205,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Ellipse arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Six-Pointed Star arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 205 (Set 41, Item 5):</strong> Box 41.5: Features 7 Six-Pointed Star arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count (7) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 206,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Chevron Arrow figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 206 (Set 42, Item 1):</strong> Box 42.1: Overlapping Six-Pointed Star shapes with exactly 8 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Six-Pointed Star with 8 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 207,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Chevron Arrow figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 207 (Set 42, Item 2):</strong> Box 42.2: Overlapping Chevron Arrow shapes with exactly 7 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Features Chevron Arrow with 7 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 208,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Chevron Arrow figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 208 (Set 42, Item 3):</strong> Box 42.3: Overlapping Six-Pointed Star shapes with 7 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Solid dots in Six-Pointed Star overlap is odd (7), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 209,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Chevron Arrow figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 209 (Set 42, Item 4):</strong> Box 42.4: Three intersecting Six-Pointed Star shapes with 10 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 10 (even) in Six-Pointed Star overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 210,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Six-Pointed Star figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Chevron Arrow figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 210 (Set 42, Item 5):</strong> Box 42.5: Two intersecting Chevron Arrow shapes with 9 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Open rings = 9 (odd) in Chevron Arrow overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 211,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Maltese Cross shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Right-Angled Triangle shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 211 (Set 43, Item 1):</strong> Box 43.1 contains 8 vertices from Maltese Cross and exactly 9 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 8 (even) and lines = vertices + 1 (9), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 212,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Maltese Cross shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Right-Angled Triangle shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 212 (Set 43, Item 2):</strong> Box 43.2 contains 9 vertices from Right-Angled Triangle and exactly 18 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 9 (odd) and lines = 2 * vertices (18), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 213,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Maltese Cross shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Right-Angled Triangle shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 213 (Set 43, Item 3):</strong> Box 43.3 contains 8 vertices from Maltese Cross and 12 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 8 (even) but lines (12) != vertices + 1 (9). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 214,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Maltese Cross shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Right-Angled Triangle shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 214 (Set 43, Item 4):</strong> Box 43.4 contains 10 vertices from Maltese Cross and 11 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 10 (even) and lines = 11 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 215,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Maltese Cross shapes is an even number (8), and total straight lines equals vertices + 1 (9).<br><strong>Set B Rule:</strong> Total vertices across all Right-Angled Triangle shapes is an odd number (9), and total straight lines equals twice the number of vertices (18).<br><br><strong>Test Figure 215 (Set 43, Item 5):</strong> Box 43.5 contains 11 vertices from Right-Angled Triangle and 22 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 11 (odd) and lines = 2 * vertices (22), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 216,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Heart Shape with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Rhombus with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 216 (Set 44, Item 1):</strong> Box 44.1 features a Heart Shape with right angles and exactly 6 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Heart Shape and 6 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 217,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Heart Shape with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Rhombus with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 217 (Set 44, Item 2):</strong> Box 44.2 features a Rhombus with 0 right angles and exactly 7 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Rhombus and 7 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 218,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Heart Shape with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Rhombus with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 218 (Set 44, Item 3):</strong> Box 44.3 features a Heart Shape with right angles and 9 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains right-angled shape but circle count is 9 (not 6). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 219,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Heart Shape with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Rhombus with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 219 (Set 44, Item 4):</strong> Box 44.4 features two Heart Shape shapes with right angles and exactly 6 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Heart Shape shapes and 6 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 220,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Heart Shape with right angles, and the number of small white circles is exactly 6.<br><strong>Set B Rule:</strong> Contains only Rhombus with no right angles, and the number of small black circles is exactly 7.<br><br><strong>Test Figure 220 (Set 44, Item 5):</strong> Box 44.5 features two Rhombus shapes (0 right angles) and exactly 7 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Rhombus shapes and 7 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 221,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Octagon segments is 4.<br><br><strong>Test Figure 221 (Set 45, Item 1):</strong> Box 45.1: Symmetrical arrangement of Equilateral Triangle with 180-degree rotational invariance and exactly 3 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 2-fold symmetry with 3 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 222,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Octagon segments is 4.<br><br><strong>Test Figure 222 (Set 45, Item 2):</strong> Box 45.2: 3-fold symmetrical pinwheel of Regular Octagon with 120-degree rotational invariance and exactly 4 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies 3-fold symmetry with 4 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 223,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Octagon segments is 4.<br><br><strong>Test Figure 223 (Set 45, Item 3):</strong> Box 45.3: Asymmetrical arrangement of Equilateral Triangle with 3 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 224,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Octagon segments is 4.<br><br><strong>Test Figure 224 (Set 45, Item 4):</strong> Box 45.4: Star figure of Equilateral Triangle with 180-degree rotational symmetry and 3 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (3). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 225,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 3.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Octagon segments is 4.<br><br><strong>Test Figure 225 (Set 45, Item 5):</strong> Box 45.5: Triangular lattice of Regular Octagon with 120-degree rotational symmetry and 4 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (4). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 226,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Square.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Semicircle.<br><br><strong>Test Figure 226 (Set 46, Item 1):</strong> Box 46.1: Contains Square geometry with exactly 4 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 4 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 227,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Square.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Semicircle.<br><br><strong>Test Figure 227 (Set 46, Item 2):</strong> Box 46.2: Contains Semicircle geometry with 0 parallel lines and exactly 5 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains 0 parallel lines and 5 crossings (>= 5), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 228,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Square.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Semicircle.<br><br><strong>Test Figure 228 (Set 46, Item 3):</strong> Box 46.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Fails parallel line requirement for Set A (needs 4) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 229,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Square.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Semicircle.<br><br><strong>Test Figure 229 (Set 46, Item 4):</strong> Box 46.4: Contains two separate Square polygons with a total of 4 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 4 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 230,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 4 pairs of parallel lines and 0 line crossings within Square.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 5 crossing intersections within Semicircle.<br><br><strong>Test Figure 230 (Set 46, Item 5):</strong> Box 46.5: Complex star of Semicircle with 0 parallel lines and 7 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies Set B with 0 parallel lines and 7 crossings (>= 5). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 231,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Rhombus has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 231 (Set 47, Item 1):</strong> Box 47.1: Inner 3-sided Rhombus nested inside a 7-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (7) - Inner sides (3) = 4, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 232,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Rhombus has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 232 (Set 47, Item 2):</strong> Box 47.2: Inner 12-sided Maltese Cross nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides (12) - Outer sides (8) = 4, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 233,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Rhombus has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 233 (Set 47, Item 3):</strong> Box 47.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 4).<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Side difference is 4, which does not equal 4. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 234,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Rhombus has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 234 (Set 47, Item 4):</strong> Box 47.4: Inner 4-sided Rhombus nested inside a 8-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 4, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 235,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Rhombus has strictly fewer sides than the enclosing outer shape (difference = 4 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly more sides than the enclosing outer shape (difference = 4 sides).<br><br><strong>Test Figure 235 (Set 47, Item 5):</strong> Box 47.5: Inner 10-sided Maltese Cross nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides - Outer sides = 4, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 236,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Hexagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Diamond arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 236 (Set 48, Item 1):</strong> Box 48.1: Features 10 Regular Hexagon arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 10 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 237,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Hexagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Diamond arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 237 (Set 48, Item 2):</strong> Box 48.2: Features 9 Diamond arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count = 9 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 238,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Hexagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Diamond arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 238 (Set 48, Item 3):</strong> Box 48.3: Features 11 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Clockwise arrows but count (11) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 239,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Hexagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Diamond arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 239 (Set 48, Item 4):</strong> Box 48.4: Features 12 Regular Hexagon arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (12) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 240,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Hexagon arrows point in a clockwise orientation, and the total arrow count is 10 (even).<br><strong>Set B Rule:</strong> All Diamond arrows point in an anti-clockwise orientation, and the total arrow count is 9 (odd).<br><br><strong>Test Figure 240 (Set 48, Item 5):</strong> Box 48.5: Features 11 Diamond arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count (11) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 241,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Rectangle figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 241 (Set 49, Item 1):</strong> Box 49.1: Overlapping Regular Nonagon shapes with exactly 12 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Regular Nonagon with 12 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 242,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Rectangle figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 242 (Set 49, Item 2):</strong> Box 49.2: Overlapping Rectangle shapes with exactly 11 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Features Rectangle with 11 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 243,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Rectangle figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 243 (Set 49, Item 3):</strong> Box 49.3: Overlapping Regular Nonagon shapes with 11 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Solid dots in Regular Nonagon overlap is odd (11), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 244,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Rectangle figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 244 (Set 49, Item 4):</strong> Box 49.4: Three intersecting Regular Nonagon shapes with 14 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 14 (even) in Regular Nonagon overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 245,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an even number (12) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Rectangle figures contains an odd number (11) of small open rings.<br><br><strong>Test Figure 245 (Set 49, Item 5):</strong> Box 49.5: Two intersecting Rectangle shapes with 13 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Open rings = 13 (odd) in Rectangle overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 246,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Ellipse shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Regular Hexagon shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 246 (Set 50, Item 1):</strong> Box 50.1 contains 2 vertices from Ellipse and exactly 3 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 2 (even) and lines = vertices + 1 (3), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 247,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Ellipse shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Regular Hexagon shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 247 (Set 50, Item 2):</strong> Box 50.2 contains 3 vertices from Regular Hexagon and exactly 6 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 3 (odd) and lines = 2 * vertices (6), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 248,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Ellipse shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Regular Hexagon shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 248 (Set 50, Item 3):</strong> Box 50.3 contains 2 vertices from Ellipse and 6 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 2 (even) but lines (6) != vertices + 1 (3). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 249,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Ellipse shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Regular Hexagon shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 249 (Set 50, Item 4):</strong> Box 50.4 contains 4 vertices from Ellipse and 5 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 4 (even) and lines = 5 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 250,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Ellipse shapes is an even number (2), and total straight lines equals vertices + 1 (3).<br><strong>Set B Rule:</strong> Total vertices across all Regular Hexagon shapes is an odd number (3), and total straight lines equals twice the number of vertices (6).<br><br><strong>Test Figure 250 (Set 50, Item 5):</strong> Box 50.5 contains 5 vertices from Regular Hexagon and 10 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 5 (odd) and lines = 2 * vertices (10), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 251,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Six-Pointed Star with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Circle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 251 (Set 51, Item 1):</strong> Box 51.1 features a Six-Pointed Star with right angles and exactly 3 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Six-Pointed Star and 3 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 252,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Six-Pointed Star with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Circle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 252 (Set 51, Item 2):</strong> Box 51.2 features a Circle with 0 right angles and exactly 4 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Circle and 4 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 253,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Six-Pointed Star with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Circle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 253 (Set 51, Item 3):</strong> Box 51.3 features a Six-Pointed Star with right angles and 6 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains right-angled shape but circle count is 6 (not 3). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 254,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Six-Pointed Star with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Circle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 254 (Set 51, Item 4):</strong> Box 51.4 features two Six-Pointed Star shapes with right angles and exactly 3 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Six-Pointed Star shapes and 3 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 255,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Six-Pointed Star with right angles, and the number of small white circles is exactly 3.<br><strong>Set B Rule:</strong> Contains only Circle with no right angles, and the number of small black circles is exactly 4.<br><br><strong>Test Figure 255 (Set 51, Item 5):</strong> Box 51.5 features two Circle shapes (0 right angles) and exactly 4 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Circle shapes and 4 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 256,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Maltese Cross segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Four-Pointed Star segments is 6.<br><br><strong>Test Figure 256 (Set 52, Item 1):</strong> Box 52.1: Symmetrical arrangement of Maltese Cross with 180-degree rotational invariance and exactly 5 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 2-fold symmetry with 5 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 257,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Maltese Cross segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Four-Pointed Star segments is 6.<br><br><strong>Test Figure 257 (Set 52, Item 2):</strong> Box 52.2: 3-fold symmetrical pinwheel of Four-Pointed Star with 120-degree rotational invariance and exactly 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies 3-fold symmetry with 6 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 258,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Maltese Cross segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Four-Pointed Star segments is 6.<br><br><strong>Test Figure 258 (Set 52, Item 3):</strong> Box 52.3: Asymmetrical arrangement of Maltese Cross with 5 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 259,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Maltese Cross segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Four-Pointed Star segments is 6.<br><br><strong>Test Figure 259 (Set 52, Item 4):</strong> Box 52.4: Star figure of Maltese Cross with 180-degree rotational symmetry and 5 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (5). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 260,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Maltese Cross segments is 5.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Four-Pointed Star segments is 6.<br><br><strong>Test Figure 260 (Set 52, Item 5):</strong> Box 52.5: Triangular lattice of Four-Pointed Star with 120-degree rotational symmetry and 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (6). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 261,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Heart Shape.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Heart Shape.<br><br><strong>Test Figure 261 (Set 53, Item 1):</strong> Box 53.1: Contains Heart Shape geometry with exactly 6 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 6 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 262,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Heart Shape.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Heart Shape.<br><br><strong>Test Figure 262 (Set 53, Item 2):</strong> Box 53.2: Contains Heart Shape geometry with 0 parallel lines and exactly 7 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains 0 parallel lines and 7 crossings (>= 7), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 263,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Heart Shape.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Heart Shape.<br><br><strong>Test Figure 263 (Set 53, Item 3):</strong> Box 53.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Fails parallel line requirement for Set A (needs 6) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 264,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Heart Shape.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Heart Shape.<br><br><strong>Test Figure 264 (Set 53, Item 4):</strong> Box 53.4: Contains two separate Heart Shape polygons with a total of 6 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 6 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 265,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 6 pairs of parallel lines and 0 line crossings within Heart Shape.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 7 crossing intersections within Heart Shape.<br><br><strong>Test Figure 265 (Set 53, Item 5):</strong> Box 53.5: Complex star of Heart Shape with 0 parallel lines and 9 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies Set B with 0 parallel lines and 9 crossings (>= 7). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 266,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Isosceles Triangle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 266 (Set 54, Item 1):</strong> Box 54.1: Inner 3-sided Equilateral Triangle nested inside a 9-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (9) - Inner sides (3) = 6, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 267,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Isosceles Triangle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 267 (Set 54, Item 2):</strong> Box 54.2: Inner 14-sided Isosceles Triangle nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides (14) - Outer sides (8) = 6, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 268,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Isosceles Triangle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 268 (Set 54, Item 3):</strong> Box 54.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 6).<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Side difference is 4, which does not equal 6. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 269,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Isosceles Triangle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 269 (Set 54, Item 4):</strong> Box 54.4: Inner 4-sided Equilateral Triangle nested inside a 10-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 6, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 270,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Equilateral Triangle has strictly fewer sides than the enclosing outer shape (difference = 6 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Isosceles Triangle has strictly more sides than the enclosing outer shape (difference = 6 sides).<br><br><strong>Test Figure 270 (Set 54, Item 5):</strong> Box 54.5: Inner 12-sided Isosceles Triangle nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides - Outer sides = 6, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 271,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Square arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Trapezoid arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 271 (Set 55, Item 1):</strong> Box 55.1: Features 4 Square arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 4 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 272,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Square arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Trapezoid arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 272 (Set 55, Item 2):</strong> Box 55.2: Features 3 Trapezoid arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count = 3 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 273,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Square arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Trapezoid arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 273 (Set 55, Item 3):</strong> Box 55.3: Features 5 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Clockwise arrows but count (5) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 274,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Square arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Trapezoid arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 274 (Set 55, Item 4):</strong> Box 55.4: Features 6 Square arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (6) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 275,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Square arrows point in a clockwise orientation, and the total arrow count is 4 (even).<br><strong>Set B Rule:</strong> All Trapezoid arrows point in an anti-clockwise orientation, and the total arrow count is 3 (odd).<br><br><strong>Test Figure 275 (Set 55, Item 5):</strong> Box 55.5: Features 5 Trapezoid arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count (5) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 276,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Rhombus figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 276 (Set 56, Item 1):</strong> Box 56.1: Overlapping Rhombus shapes with exactly 6 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Rhombus with 6 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 277,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Rhombus figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 277 (Set 56, Item 2):</strong> Box 56.2: Overlapping Regular Nonagon shapes with exactly 5 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Features Regular Nonagon with 5 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 278,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Rhombus figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 278 (Set 56, Item 3):</strong> Box 56.3: Overlapping Rhombus shapes with 5 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Solid dots in Rhombus overlap is odd (5), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 279,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Rhombus figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 279 (Set 56, Item 4):</strong> Box 56.4: Three intersecting Rhombus shapes with 8 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 8 (even) in Rhombus overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 280,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Rhombus figures contains an even number (6) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Nonagon figures contains an odd number (5) of small open rings.<br><br><strong>Test Figure 280 (Set 56, Item 5):</strong> Box 56.5: Two intersecting Regular Nonagon shapes with 7 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Open rings = 7 (odd) in Regular Nonagon overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 281,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Hexagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Five-Pointed Star shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 281 (Set 57, Item 1):</strong> Box 57.1 contains 6 vertices from Regular Hexagon and exactly 7 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 6 (even) and lines = vertices + 1 (7), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 282,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Hexagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Five-Pointed Star shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 282 (Set 57, Item 2):</strong> Box 57.2 contains 7 vertices from Five-Pointed Star and exactly 14 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 7 (odd) and lines = 2 * vertices (14), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 283,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Hexagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Five-Pointed Star shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 283 (Set 57, Item 3):</strong> Box 57.3 contains 6 vertices from Regular Hexagon and 10 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 6 (even) but lines (10) != vertices + 1 (7). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 284,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Hexagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Five-Pointed Star shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 284 (Set 57, Item 4):</strong> Box 57.4 contains 8 vertices from Regular Hexagon and 9 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 8 (even) and lines = 9 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 285,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Regular Hexagon shapes is an even number (6), and total straight lines equals vertices + 1 (7).<br><strong>Set B Rule:</strong> Total vertices across all Five-Pointed Star shapes is an odd number (7), and total straight lines equals twice the number of vertices (14).<br><br><strong>Test Figure 285 (Set 57, Item 5):</strong> Box 57.5 contains 9 vertices from Five-Pointed Star and 18 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 9 (odd) and lines = 2 * vertices (18), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 286,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Nonagon with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Greek Cross with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 286 (Set 58, Item 1):</strong> Box 58.1 features a Regular Nonagon with right angles and exactly 5 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Regular Nonagon and 5 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 287,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Nonagon with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Greek Cross with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 287 (Set 58, Item 2):</strong> Box 58.2 features a Greek Cross with 0 right angles and exactly 6 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Greek Cross and 6 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 288,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Nonagon with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Greek Cross with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 288 (Set 58, Item 3):</strong> Box 58.3 features a Regular Nonagon with right angles and 8 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains right-angled shape but circle count is 8 (not 5). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 289,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Nonagon with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Greek Cross with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 289 (Set 58, Item 4):</strong> Box 58.4 features two Regular Nonagon shapes with right angles and exactly 5 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Regular Nonagon shapes and 5 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 290,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Regular Nonagon with right angles, and the number of small white circles is exactly 5.<br><strong>Set B Rule:</strong> Contains only Greek Cross with no right angles, and the number of small black circles is exactly 6.<br><br><strong>Test Figure 290 (Set 58, Item 5):</strong> Box 58.5 features two Greek Cross shapes (0 right angles) and exactly 6 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Greek Cross shapes and 6 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 291,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Ellipse segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 8.<br><br><strong>Test Figure 291 (Set 59, Item 1):</strong> Box 59.1: Symmetrical arrangement of Ellipse with 180-degree rotational invariance and exactly 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 2-fold symmetry with 7 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 292,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Ellipse segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 8.<br><br><strong>Test Figure 292 (Set 59, Item 2):</strong> Box 59.2: 3-fold symmetrical pinwheel of Equilateral Triangle with 120-degree rotational invariance and exactly 8 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies 3-fold symmetry with 8 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 293,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Ellipse segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 8.<br><br><strong>Test Figure 293 (Set 59, Item 3):</strong> Box 59.3: Asymmetrical arrangement of Ellipse with 7 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 294,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Ellipse segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 8.<br><br><strong>Test Figure 294 (Set 59, Item 4):</strong> Box 59.4: Star figure of Ellipse with 180-degree rotational symmetry and 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (7). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 295,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 2-fold (180 deg) rotational symmetry, and the number of shaded Ellipse segments is 7.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Equilateral Triangle segments is 8.<br><br><strong>Test Figure 295 (Set 59, Item 5):</strong> Box 59.5: Triangular lattice of Equilateral Triangle with 120-degree rotational symmetry and 8 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (8). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 296,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Six-Pointed Star.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Parallelogram.<br><br><strong>Test Figure 296 (Set 60, Item 1):</strong> Box 60.1: Contains Six-Pointed Star geometry with exactly 3 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 3 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 297,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Six-Pointed Star.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Parallelogram.<br><br><strong>Test Figure 297 (Set 60, Item 2):</strong> Box 60.2: Contains Parallelogram geometry with 0 parallel lines and exactly 4 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains 0 parallel lines and 4 crossings (>= 4), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 298,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Six-Pointed Star.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Parallelogram.<br><br><strong>Test Figure 298 (Set 60, Item 3):</strong> Box 60.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Fails parallel line requirement for Set A (needs 3) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 299,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Six-Pointed Star.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Parallelogram.<br><br><strong>Test Figure 299 (Set 60, Item 4):</strong> Box 60.4: Contains two separate Six-Pointed Star polygons with a total of 3 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 3 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 300,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 3 pairs of parallel lines and 0 line crossings within Six-Pointed Star.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 4 crossing intersections within Parallelogram.<br><br><strong>Test Figure 300 (Set 60, Item 5):</strong> Box 60.5: Complex star of Parallelogram with 0 parallel lines and 6 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies Set B with 0 parallel lines and 6 crossings (>= 4). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 301,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Heptagon has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 301 (Set 61, Item 1):</strong> Box 61.1: Inner 3-sided Maltese Cross nested inside a 6-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (6) - Inner sides (3) = 3, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 302,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Heptagon has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 302 (Set 61, Item 2):</strong> Box 61.2: Inner 11-sided Regular Heptagon nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides (11) - Outer sides (8) = 3, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 303,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Heptagon has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 303 (Set 61, Item 3):</strong> Box 61.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 3).<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Side difference is 4, which does not equal 3. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 304,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Heptagon has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 304 (Set 61, Item 4):</strong> Box 61.4: Inner 4-sided Maltese Cross nested inside a 7-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 3, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 305,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Maltese Cross has strictly fewer sides than the enclosing outer shape (difference = 3 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Regular Heptagon has strictly more sides than the enclosing outer shape (difference = 3 sides).<br><br><strong>Test Figure 305 (Set 61, Item 5):</strong> Box 61.5: Inner 9-sided Regular Heptagon nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides - Outer sides = 3, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 306,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Heart Shape arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Ellipse arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 306 (Set 62, Item 1):</strong> Box 62.1: Features 8 Heart Shape arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 8 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 307,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Heart Shape arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Ellipse arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 307 (Set 62, Item 2):</strong> Box 62.2: Features 7 Ellipse arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count = 7 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 308,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Heart Shape arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Ellipse arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 308 (Set 62, Item 3):</strong> Box 62.3: Features 9 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Clockwise arrows but count (9) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 309,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Heart Shape arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Ellipse arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 309 (Set 62, Item 4):</strong> Box 62.4: Features 10 Heart Shape arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (10) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 310,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Heart Shape arrows point in a clockwise orientation, and the total arrow count is 8 (even).<br><strong>Set B Rule:</strong> All Ellipse arrows point in an anti-clockwise orientation, and the total arrow count is 7 (odd).<br><br><strong>Test Figure 310 (Set 62, Item 5):</strong> Box 62.5: Features 9 Ellipse arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count (9) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 311,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Equilateral Triangle figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Crescent Moon figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 311 (Set 63, Item 1):</strong> Box 63.1: Overlapping Equilateral Triangle shapes with exactly 10 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Equilateral Triangle with 10 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 312,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Equilateral Triangle figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Crescent Moon figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 312 (Set 63, Item 2):</strong> Box 63.2: Overlapping Crescent Moon shapes with exactly 9 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Features Crescent Moon with 9 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 313,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Equilateral Triangle figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Crescent Moon figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 313 (Set 63, Item 3):</strong> Box 63.3: Overlapping Equilateral Triangle shapes with 9 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Solid dots in Equilateral Triangle overlap is odd (9), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 314,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Equilateral Triangle figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Crescent Moon figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 314 (Set 63, Item 4):</strong> Box 63.4: Three intersecting Equilateral Triangle shapes with 12 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 12 (even) in Equilateral Triangle overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 315,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Equilateral Triangle figures contains an even number (10) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Crescent Moon figures contains an odd number (9) of small open rings.<br><br><strong>Test Figure 315 (Set 63, Item 5):</strong> Box 63.5: Two intersecting Crescent Moon shapes with 11 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Open rings = 11 (odd) in Crescent Moon overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 316,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Shield Shape shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 316 (Set 64, Item 1):</strong> Box 64.1 contains 10 vertices from Square and exactly 11 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 10 (even) and lines = vertices + 1 (11), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 317,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Shield Shape shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 317 (Set 64, Item 2):</strong> Box 64.2 contains 11 vertices from Shield Shape and exactly 22 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 11 (odd) and lines = 2 * vertices (22), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 318,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Shield Shape shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 318 (Set 64, Item 3):</strong> Box 64.3 contains 10 vertices from Square and 14 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 10 (even) but lines (14) != vertices + 1 (11). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 319,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Shield Shape shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 319 (Set 64, Item 4):</strong> Box 64.4 contains 12 vertices from Square and 13 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 12 (even) and lines = 13 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 320,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Square shapes is an even number (10), and total straight lines equals vertices + 1 (11).<br><strong>Set B Rule:</strong> Total vertices across all Shield Shape shapes is an odd number (11), and total straight lines equals twice the number of vertices (22).<br><br><strong>Test Figure 320 (Set 64, Item 5):</strong> Box 64.5 contains 13 vertices from Shield Shape and 26 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 13 (odd) and lines = 2 * vertices (26), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 321,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Square with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 321 (Set 65, Item 1):</strong> Box 65.1 features a Rhombus with right angles and exactly 2 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Rhombus and 2 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 322,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Square with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 322 (Set 65, Item 2):</strong> Box 65.2 features a Square with 0 right angles and exactly 3 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Square and 3 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 323,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Square with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 323 (Set 65, Item 3):</strong> Box 65.3 features a Rhombus with right angles and 5 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains right-angled shape but circle count is 5 (not 2). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 324,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Square with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 324 (Set 65, Item 4):</strong> Box 65.4 features two Rhombus shapes with right angles and exactly 2 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Rhombus shapes and 2 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 325,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Rhombus with right angles, and the number of small white circles is exactly 2.<br><strong>Set B Rule:</strong> Contains only Square with no right angles, and the number of small black circles is exactly 3.<br><br><strong>Test Figure 325 (Set 65, Item 5):</strong> Box 65.5 features two Square shapes (0 right angles) and exactly 3 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Square shapes and 3 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 326,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Pentagon segments is 5.<br><br><strong>Test Figure 326 (Set 66, Item 1):</strong> Box 66.1: Symmetrical arrangement of Regular Hexagon with 90-degree rotational invariance and exactly 4 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 4-fold symmetry with 4 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 327,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Pentagon segments is 5.<br><br><strong>Test Figure 327 (Set 66, Item 2):</strong> Box 66.2: 3-fold symmetrical pinwheel of Regular Pentagon with 120-degree rotational invariance and exactly 5 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies 3-fold symmetry with 5 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 328,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Pentagon segments is 5.<br><br><strong>Test Figure 328 (Set 66, Item 3):</strong> Box 66.3: Asymmetrical arrangement of Regular Hexagon with 4 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 329,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Pentagon segments is 5.<br><br><strong>Test Figure 329 (Set 66, Item 4):</strong> Box 66.4: Star figure of Regular Hexagon with 90-degree rotational symmetry and 4 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (4). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 330,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Regular Hexagon segments is 4.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Regular Pentagon segments is 5.<br><br><strong>Test Figure 330 (Set 66, Item 5):</strong> Box 66.5: Triangular lattice of Regular Pentagon with 120-degree rotational symmetry and 5 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (5). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 331,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Regular Decagon.<br><br><strong>Test Figure 331 (Set 67, Item 1):</strong> Box 67.1: Contains Regular Nonagon geometry with exactly 5 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 5 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 332,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Regular Decagon.<br><br><strong>Test Figure 332 (Set 67, Item 2):</strong> Box 67.2: Contains Regular Decagon geometry with 0 parallel lines and exactly 6 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains 0 parallel lines and 6 crossings (>= 6), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 333,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Regular Decagon.<br><br><strong>Test Figure 333 (Set 67, Item 3):</strong> Box 67.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Fails parallel line requirement for Set A (needs 5) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 334,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Regular Decagon.<br><br><strong>Test Figure 334 (Set 67, Item 4):</strong> Box 67.4: Contains two separate Regular Nonagon polygons with a total of 5 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 5 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 335,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 5 pairs of parallel lines and 0 line crossings within Regular Nonagon.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 6 crossing intersections within Regular Decagon.<br><br><strong>Test Figure 335 (Set 67, Item 5):</strong> Box 67.5: Complex star of Regular Decagon with 0 parallel lines and 8 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Satisfies Set B with 0 parallel lines and 8 crossings (>= 6). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 336,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 336 (Set 68, Item 1):</strong> Box 68.1: Inner 3-sided Ellipse nested inside a 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (8) - Inner sides (3) = 5, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 337,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 337 (Set 68, Item 2):</strong> Box 68.2: Inner 13-sided Six-Pointed Star nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides (13) - Outer sides (8) = 5, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 338,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 338 (Set 68, Item 3):</strong> Box 68.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 5).<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Side difference is 4, which does not equal 5. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 339,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 339 (Set 68, Item 4):</strong> Box 68.4: Inner 4-sided Ellipse nested inside a 9-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 5, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 340,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Ellipse has strictly fewer sides than the enclosing outer shape (difference = 5 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Six-Pointed Star has strictly more sides than the enclosing outer shape (difference = 5 sides).<br><br><strong>Test Figure 340 (Set 68, Item 5):</strong> Box 68.5: Inner 11-sided Six-Pointed Star nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides - Outer sides = 5, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 341,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Chevron Arrow arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 341 (Set 69, Item 1):</strong> Box 69.1: Features 12 Six-Pointed Star arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 12 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 342,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Chevron Arrow arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 342 (Set 69, Item 2):</strong> Box 69.2: Features 11 Chevron Arrow arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count = 11 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 343,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Chevron Arrow arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 343 (Set 69, Item 3):</strong> Box 69.3: Features 13 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Clockwise arrows but count (13) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 344,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Chevron Arrow arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 344 (Set 69, Item 4):</strong> Box 69.4: Features 14 Six-Pointed Star arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (14) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 345,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Six-Pointed Star arrows point in a clockwise orientation, and the total arrow count is 12 (even).<br><strong>Set B Rule:</strong> All Chevron Arrow arrows point in an anti-clockwise orientation, and the total arrow count is 11 (odd).<br><br><strong>Test Figure 345 (Set 69, Item 5):</strong> Box 69.5: Features 13 Chevron Arrow arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count (13) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 346,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Right-Angled Triangle figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 346 (Set 70, Item 1):</strong> Box 70.1: Overlapping Maltese Cross shapes with exactly 4 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Maltese Cross with 4 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 347,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Right-Angled Triangle figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 347 (Set 70, Item 2):</strong> Box 70.2: Overlapping Right-Angled Triangle shapes with exactly 3 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Features Right-Angled Triangle with 3 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 348,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Right-Angled Triangle figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 348 (Set 70, Item 3):</strong> Box 70.3: Overlapping Maltese Cross shapes with 3 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Solid dots in Maltese Cross overlap is odd (3), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 349,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Right-Angled Triangle figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 349 (Set 70, Item 4):</strong> Box 70.4: Three intersecting Maltese Cross shapes with 6 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 6 (even) in Maltese Cross overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 350,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Maltese Cross figures contains an even number (4) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Right-Angled Triangle figures contains an odd number (3) of small open rings.<br><br><strong>Test Figure 350 (Set 70, Item 5):</strong> Box 70.5: Two intersecting Right-Angled Triangle shapes with 5 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Open rings = 5 (odd) in Right-Angled Triangle overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 351,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Rhombus shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 351 (Set 71, Item 1):</strong> Box 71.1 contains 4 vertices from Heart Shape and exactly 5 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 4 (even) and lines = vertices + 1 (5), strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 352,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Rhombus shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 352 (Set 71, Item 2):</strong> Box 71.2 contains 5 vertices from Rhombus and exactly 10 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Vertices = 5 (odd) and lines = 2 * vertices (10), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 353,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Rhombus shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 353 (Set 71, Item 3):</strong> Box 71.3 contains 4 vertices from Heart Shape and 8 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 4 (even) but lines (8) != vertices + 1 (5). Fails Set A and fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 354,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Rhombus shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 354 (Set 71, Item 4):</strong> Box 71.4 contains 6 vertices from Heart Shape and 7 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Vertices = 6 (even) and lines = 7 (vertices + 1), satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 355,
    "topic": "Abstract Reasoning",
    "subtopic": "Vertex Count vs Lines",
    "text": "<strong>Set A Rule:</strong> Total vertices across all Heart Shape shapes is an even number (4), and total straight lines equals vertices + 1 (5).<br><strong>Set B Rule:</strong> Total vertices across all Rhombus shapes is an odd number (5), and total straight lines equals twice the number of vertices (10).<br><br><strong>Test Figure 355 (Set 71, Item 5):</strong> Box 71.5 contains 7 vertices from Rhombus and 14 straight lines.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Vertices = 7 (odd) and lines = 2 * vertices (14), satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 356,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Octagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 356 (Set 72, Item 1):</strong> Box 72.1 features a Equilateral Triangle with right angles and exactly 4 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Equilateral Triangle and 4 white circles, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 357,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Octagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 357 (Set 72, Item 2):</strong> Box 72.2 features a Regular Octagon with 0 right angles and exactly 5 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains non-right-angled Regular Octagon and 5 black circles, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 358,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Octagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 358 (Set 72, Item 3):</strong> Box 72.3 features a Equilateral Triangle with right angles and 7 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains right-angled shape but circle count is 7 (not 4). Fails Set A and Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 359,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Octagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 359 (Set 72, Item 4):</strong> Box 72.4 features two Equilateral Triangle shapes with right angles and exactly 4 small white circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains right-angled Equilateral Triangle shapes and 4 white circles, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 360,
    "topic": "Abstract Reasoning",
    "subtopic": "Right Angles & Circle Markers",
    "text": "<strong>Set A Rule:</strong> Contains at least one Equilateral Triangle with right angles, and the number of small white circles is exactly 4.<br><strong>Set B Rule:</strong> Contains only Regular Octagon with no right angles, and the number of small black circles is exactly 5.<br><br><strong>Test Figure 360 (Set 72, Item 5):</strong> Box 72.5 features two Regular Octagon shapes (0 right angles) and exactly 5 small black circles.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Contains non-right-angled Regular Octagon shapes and 5 black circles, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 361,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Square segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Semicircle segments is 7.<br><br><strong>Test Figure 361 (Set 73, Item 1):</strong> Box 73.1: Symmetrical arrangement of Square with 90-degree rotational invariance and exactly 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies 4-fold symmetry with 6 shaded segments, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 362,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Square segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Semicircle segments is 7.<br><br><strong>Test Figure 362 (Set 73, Item 2):</strong> Box 73.2: 3-fold symmetrical pinwheel of Semicircle with 120-degree rotational invariance and exactly 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies 3-fold symmetry with 7 shaded segments, matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 363,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Square segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Semicircle segments is 7.<br><br><strong>Test Figure 363 (Set 73, Item 3):</strong> Box 73.3: Asymmetrical arrangement of Square with 6 shaded segments but 0 rotational symmetry.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Lacks required rotational symmetry despite segment count. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 364,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Square segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Semicircle segments is 7.<br><br><strong>Test Figure 364 (Set 73, Item 4):</strong> Box 73.4: Star figure of Square with 90-degree rotational symmetry and 6 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Matches Set A symmetry and shaded count (6). Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 365,
    "topic": "Abstract Reasoning",
    "subtopic": "Rotational Symmetry & Segment Shading",
    "text": "<strong>Set A Rule:</strong> The figure has 4-fold (90 deg) rotational symmetry, and the number of shaded Square segments is 6.<br><strong>Set B Rule:</strong> The figure has 3-fold (120 deg) rotational symmetry, and the number of shaded Semicircle segments is 7.<br><br><strong>Test Figure 365 (Set 73, Item 5):</strong> Box 73.5: Triangular lattice of Semicircle with 120-degree rotational symmetry and 7 shaded segments.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Matches Set B symmetry (3-fold) and shaded count (7). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 366,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Maltese Cross.<br><br><strong>Test Figure 366 (Set 74, Item 1):</strong> Box 74.1: Contains Rhombus geometry with exactly 7 pairs of parallel sides and 0 intersections.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Contains 7 parallel line pairs and 0 crossings, strictly following Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 367,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Maltese Cross.<br><br><strong>Test Figure 367 (Set 74, Item 2):</strong> Box 74.2: Contains Maltese Cross geometry with 0 parallel lines and exactly 8 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Contains 0 parallel lines and 8 crossings (>= 8), strictly following Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 368,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Maltese Cross.<br><br><strong>Test Figure 368 (Set 74, Item 3):</strong> Box 74.3: Contains 1 pair of parallel lines and 1 crossing intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Fails parallel line requirement for Set A (needs 7) and fails Set B (needs 0 parallel). Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 369,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Maltese Cross.<br><br><strong>Test Figure 369 (Set 74, Item 4):</strong> Box 74.4: Contains two separate Rhombus polygons with a total of 7 parallel pairs and 0 crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Satisfies Set A with 7 parallel pairs and 0 crossings. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 370,
    "topic": "Abstract Reasoning",
    "subtopic": "Parallel Lines vs Intersections",
    "text": "<strong>Set A Rule:</strong> Features exactly 7 pairs of parallel lines and 0 line crossings within Rhombus.<br><strong>Set B Rule:</strong> Features 0 parallel lines and at least 8 crossing intersections within Maltese Cross.<br><br><strong>Test Figure 370 (Set 74, Item 5):</strong> Box 74.5: Complex star of Maltese Cross with 0 parallel lines and 10 line crossings.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Satisfies Set B with 0 parallel lines and 10 crossings (>= 8). Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 371,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Diamond has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 371 (Set 75, Item 1):</strong> Box 75.1: Inner 3-sided Regular Hexagon nested inside a 5-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides (5) - Inner sides (3) = 2, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 372,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Diamond has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 372 (Set 75, Item 2):</strong> Box 75.2: Inner 10-sided Diamond nested inside an 8-sided outer polygon.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Inner sides (10) - Outer sides (8) = 2, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 373,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Diamond has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 373 (Set 75, Item 3):</strong> Box 75.3: Inner 4-sided shape nested inside an 8-sided shape with a side difference of 4 (expected difference: 2).<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Side difference is 4, which does not equal 2. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 374,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Diamond has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 374 (Set 75, Item 4):</strong> Box 75.4: Inner 4-sided Regular Hexagon nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Outer sides - Inner sides = 2, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 375,
    "topic": "Abstract Reasoning",
    "subtopic": "Nested Shapes & Concentric Rule",
    "text": "<strong>Set A Rule:</strong> Concentric nested shapes: Inner Regular Hexagon has strictly fewer sides than the enclosing outer shape (difference = 2 sides).<br><strong>Set B Rule:</strong> Concentric nested shapes: Inner Diamond has strictly more sides than the enclosing outer shape (difference = 2 sides).<br><br><strong>Test Figure 375 (Set 75, Item 5):</strong> Box 75.5: Inner 8-sided Diamond nested inside a 6-sided outer shape.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Inner sides - Outer sides = 2, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 376,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Rectangle arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 376 (Set 76, Item 1):</strong> Box 76.1: Features 6 Regular Nonagon arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count = 6 (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 377,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Rectangle arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 377 (Set 76, Item 2):</strong> Box 76.2: Features 5 Rectangle arrows directed anti-clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Arrows are anti-clockwise and count = 5 (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 378,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Rectangle arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 378 (Set 76, Item 3):</strong> Box 76.3: Features 7 arrows directed clockwise around the perimeter.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Clockwise arrows but count (7) is odd instead of even. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 379,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Rectangle arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 379 (Set 76, Item 4):</strong> Box 76.4: Features 8 Regular Nonagon arrows pointing clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Arrows are clockwise and count (8) is even, satisfying Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 380,
    "topic": "Abstract Reasoning",
    "subtopic": "Arrow Direction & Shading Parity",
    "text": "<strong>Set A Rule:</strong> All Regular Nonagon arrows point in a clockwise orientation, and the total arrow count is 6 (even).<br><strong>Set B Rule:</strong> All Rectangle arrows point in an anti-clockwise orientation, and the total arrow count is 5 (odd).<br><br><strong>Test Figure 380 (Set 76, Item 5):</strong> Box 76.5: Features 7 Rectangle arrows pointing anti-clockwise around a central axis.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Arrows are anti-clockwise and count (7) is odd, satisfying Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 381,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 381 (Set 77, Item 1):</strong> Box 77.1: Overlapping Ellipse shapes with exactly 8 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Features Ellipse with 8 solid dots (even), matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 382,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 382 (Set 77, Item 2):</strong> Box 77.2: Overlapping Regular Hexagon shapes with exactly 7 open rings in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Set B",
      "Neither Set A nor Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Features Regular Hexagon with 7 open rings (odd), matching Set B. Therefore, the correct option is \"Set B\"."
  },
  {
    "id": 383,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 383 (Set 77, Item 3):</strong> Box 77.3: Overlapping Ellipse shapes with 7 solid dots in the shared region.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 0,
    "explanation": "Solid dots in Ellipse overlap is odd (7), violating Set A. Fails Set B. Belongs to Neither. Therefore, the correct option is \"Neither Set A nor Set B\"."
  },
  {
    "id": 384,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 384 (Set 77, Item 4):</strong> Box 77.4: Three intersecting Ellipse shapes with 10 solid dots in the core intersection.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 2,
    "explanation": "Solid dots = 10 (even) in Ellipse overlap, matching Set A. Therefore, the correct option is \"Set A\"."
  },
  {
    "id": 385,
    "topic": "Abstract Reasoning",
    "subtopic": "Overlapping Regions & Dot Counts",
    "text": "<strong>Set A Rule:</strong> The intersection between overlapping Ellipse figures contains an even number (8) of small solid dots.<br><strong>Set B Rule:</strong> The intersection between overlapping Regular Hexagon figures contains an odd number (7) of small open rings.<br><br><strong>Test Figure 385 (Set 77, Item 5):</strong> Box 77.5: Two intersecting Regular Hexagon shapes with 9 open rings in the overlap.<br><br>Which set does this test figure belong to?",
    "options": [
      "Neither Set A nor Set B",
      "Set B",
      "Set A"
    ],
    "answer": 1,
    "explanation": "Open rings = 9 (odd) in Regular Hexagon overlap, matching Set B. Therefore, the correct option is \"Set B\"."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS };
}
