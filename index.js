const express = require('express');
const app = express();
const {leadIds, custLeadMapping, proposerData} = require('./data');

// Start the server
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/', (req, res) => {
  res.send('Api is running')
})

// Api to check Eligibility 

app.get('/api/checkEligibility', (req, res) => {
  const { leadId, customerId } = req.query;

  try {
    if (!leadId || !customerId) {
      return res.status(400).json({ error: 'Missing mandatory parameter' });
    }
    if(!custLeadMapping[customerId.toString()].includes(parseInt(leadId))){
      res.status(401).json({statusCode:401,statusMsg:"You are not authorized"})
    }
    const foundLead = leadIds.find((lead) => lead.leadId === parseInt(leadId, 10));
    if (foundLead) {
      res.status(200).json({statusCode:200,statusMsg:"success",eligible: true });
    } else {
      res.status(200).json({statusCode:200,statusMsg:"success",eligible: false });
    }

  } catch (error) {
    
    res.status(500).json({statusCode:500,statusMsg:"Error checking eligibility"});
  }
});


// Api to get proposal Details

app.get('/api/getProposalDetails', (req, res) => {
  const { leadId, customerId } = req.query;

  try {
    if (!leadId || !customerId) {
      return res.status(400).json({statusCode:400,statusMsg:"Missing mandatory parameter"});
    }

    if(!custLeadMapping[customerId.toString()].includes(parseInt(leadId))){
      res.status(401).json({statusCode:401,statusMsg:"You are not authorized"})
    }

    const foundProposalData = proposerData.find((item) => item.LeadID === parseInt(leadId, 10) && item.CustomerID === parseInt(customerId));
    if (foundProposalData) {
      res.status(200).json({ statusCode:200,statusMsg:"success", data : foundProposalData });
    } else {
      res.status(200).json({ statusCode:200,statusMsg:"success", data : [] });
    }

  } catch (error) {
    res.status(500).json({statusCode:500,statusMsg:"Error while fetch proposal data"});
  }
});


