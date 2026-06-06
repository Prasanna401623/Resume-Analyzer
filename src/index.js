const express = require('express');
const dotenv = require('dotenv');
const { cleanText } = require('./clean');
const { generateAnalysis } = require('./llm');

dotenv.config();

const app = express();
app.use(express.json());

app.post('/analyze', async (req, res) => {
  try {
    const { resume, job } = req.body;
    if (!resume) return res.status(400).json({ error: 'resume is required' });

    const cleaned = cleanText(resume);
    const analysis = await generateAnalysis(cleaned, job || '');

    return res.json({ status: 'ok', analysis });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
