function cleanText(text) {
  if (!text) return '';
  // normalize line endings, collapse multiple blank lines, trim
  return text.replace(/\r/g, '').replace(/\n{2,}/g, '\n').trim();
}

module.exports = { cleanText };
