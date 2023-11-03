const express = require('express');
const app = express();

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/', (req, res) => {
  res.send('Api is running')
})

app.get('/api/checkEligibility', (req, res) => {
  const { leadId } = req.query;

  try {
    if (!leadId) {
      return res.status(400).json({ error: 'Missing leadId parameter' });
    }
    res.status(200).json({ eligible: true });

  } catch (error) {
    res.status(500).json({ error: 'Error checking eligibility' });
  }
});