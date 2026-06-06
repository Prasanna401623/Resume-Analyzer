async function generateAnalysis(resumeText, jobText) {
  // Stubbed analysis — replace with real LLM call later
  return {
    summary: resumeText.slice(0, 300) + (resumeText.length > 300 ? '...' : ''),
    strengths: ['Problem solving', 'Relevant experience'],
    weaknesses: ['Add metrics to achievements', 'Clarify role scope'],
    missingKeywords: jobText ? ['example-keyword'] : [],
    atsFeedback: 'Use standard section headings and keyword matching',
    jobMatchScore: jobText ? 0.72 : null,
    suggestedBullets: ['Improved X by Y%', 'Reduced latency by Z%'],
    interviewQuestions: ['Describe a challenging project and your role.']
  };
}

module.exports = { generateAnalysis };
