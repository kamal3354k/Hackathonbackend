const express = require('express');
const app = express();
const {leadIds} = require('./data');

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
    const foundLead = leadIds.find((lead) => lead.leadId === parseInt(leadId, 10));
    if (foundLead) {
      res.status(200).json({ eligible: true });
    } else {
      res.status(200).json({ eligible: false });
    }

  } catch (error) {
    res.status(500).json({ error: 'Error checking eligibility' });
  }
});