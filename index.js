const express = require('express');
const app = express();
const {leadIds, custLeadMapping, proposerData,RedirectUrl} = require('./data');
const cors = require('cors');

// Enable CORS for all routes
const corsOptions = {
  origin: '*',
  methods: 'GET,POST', // Specify the allowed methods
  allowedHeaders: 'Content-Type', // Specify the allowed headers
};

app.use(cors(corsOptions));
// Api to push data to caseLogin

app.options('*', cors());


app.use(express.json())
// Start the server
const port = process.env.PORT || 4002;
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

app.post('/api/setCustConsent',(req, res) => {
  const requestData = req.body;

  try {
    if (validateRequest(requestData)) {
      if (requestData.IsConsent) {
        // Simulate a 1-second delay
        setTimeout(() => {
          res.json({statusCode:200,statusMsg: 'success',message: 'Consent received' });
        }, 1000);
      } else {
        res.status(200).json({ statusCode:200,statusMsg: 'Consent not set' });
      }
    } else {
      res.status(400).json({ statusCode:400,statusMsg: 'Invalid request data' });
    }
  } catch (error) {
    res.status(500).json({statusCode:500,statusMsg:"Error while setting consent"});
  }
});

function validateRequest(requestData) {
  return (
    requestData &&
    requestData.hasOwnProperty('IsConsent') &&
    requestData.hasOwnProperty('LeadID') &&
    requestData.hasOwnProperty('CustomerID')
  );
}

// Api to generate redrection Link

app.post('/api/generateRedirectLink', (req, res) => {
  const requestData = req.body;

  try {
    if (validateRedirectRequest(requestData)) {
      if(requestData.fieldList){
        const redirectUrl = generateRedirectUrl(requestData);
        res.status(200).json({ statusCode:200,statusMsg: 'success',redirectUrl:redirectUrl});
      }else{
        return res.status(400).json({statusCode:400,statusMsg:"Missing mandatory parameter"});
      }
      
    } else {
      res.status(400).json({ statusCode:400,statusMsg: 'Invalid request data' });
    }
  } catch (error) {
    res.status(500).json({statusCode:500,statusMsg:"Error while setting consent"});
  }
});

function generateRedirectUrl(requestData) {
  const selectedRedirect = RedirectUrl.find(item => item.ProductId === requestData.ProductID);
  let redirectUrl;
  if (selectedRedirect) {
    redirectUrl= selectedRedirect.Url;
  } else {
    return "no Url for given productId";
  }
  // const redirectUrl="https://healthqa.policybazaar.com/proposalv2?encenq=dTM4TG4zcDNiSmVmaElMNWYvVWR4NDE2aEpOckpwOGUvc1JmSy96RGF6cz0&enquiryid=NDQ0NTI5OQ==&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjQ0NDUyOTksIkV4cGlyeVRpbWUiOjE3MDY3NjQ4NDl9.PNSb0Nr98iUGLAhmbUK_cm72TTbTTfeHR1p8Oqhkh7LbwkZZZ5FdrXpNT18Bsic2yDFZgcKDbMolBRiSi2xnEouMhDwQoZlLnx0bktAfM9JQMZ7X2WhjmfZoxGVcZBApP8gSmAtCc4rbdsnKyRd98KinwMeUH_BOh96UCwmn9xk"
  const fields = requestData.fieldList.filter(item => item !== undefined).join(',');
  const finalRedirectUrl = `${redirectUrl}?fieldList=${fields}`;
  return finalRedirectUrl;
}

function validateRedirectRequest(requestData) {
  return (
    requestData &&
    requestData.hasOwnProperty('LeadID') &&
    requestData.hasOwnProperty('CustomerID') &&
    requestData.hasOwnProperty('ProductID') &&
    Array.isArray(requestData.fieldList)
  );
}


