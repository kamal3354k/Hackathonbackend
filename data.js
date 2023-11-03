const leadIds=[
  { leadId: 111},
  { leadId: 112 },
  { leadId: 113 },
]
const custLeadMapping = {
  "12345" : [111],
  "12346" : [112],
  "12347" : [113]
}

const proposerData=[
  {
    LeadID: 111,
    CustomerID: 12345,
    ProposalNumber:"PB287391",
    Name : "Deepak",
    PropserDetails: [
      { ID: 10, Label: 'Name', Value: 'Deepak' },
      { ID: 11, Label: 'MobileNo', Value: 9867268811 },
      { ID: 12, Label: 'Country', Value: 'India' },
      { ID: 13, Label: 'Gender', Value: 'Male' },
      { ID: 14, Label: 'EmailID', Value: 'deepak@dummy.com' },
      { ID: 15, Label: 'DOB', Value: '16/09/1987' },
      { ID: 16, Label: 'MaritalStatus', Value: 'Married' },
      { ID: 17, Label: 'Occupation', Value: 'Private Occupation' },
      { ID: 18, Label: 'Address', Value: 'ABC colony, Pune' },
      { ID: 19, Label: 'State', Value: 'Maharashtra' },
      { ID: 20, Label: 'City', Value: 'Pune' },
      { ID: 21, Label: 'PostCode', Value: 854382 },
      { ID: 22, Label: 'PermanentAddress', Value: 'ABC colony, Pune' }
    ],
    ContactDetails: [
      { ID: 23, Label: 'MobileNumber', Value: 9867268811 },
      { ID: 24, Label: 'Country', Value: 'India' },
      { ID: 25, Label: 'CreatedOn', Value: '2023-11-03T13:31:27' }
    ],
    InsuredDetails: [
      { ID: 26, Label: 'MemberRelationship', Value: 'Father' },
      { ID: 27, Label: 'Name', Value: 'Shubham' },
      { ID: 28, Label: 'Gender', Value: 'Male' },
      { ID: 29, Label: 'DateofBirth', Value: '9/1/1960 12:00:00 AM' },
      { ID: 30, Label: 'Height', Value: '157' },
      { ID: 31, Label: 'Weight', Value: '68' },
      { ID: 32, Label: 'Occupation', Value: 'None' }
    ],
    PolicyDetails: [
      { ID: 33, Label: 'NomineeName', Value: 'Sheela' },
      { ID: 34, Label: 'NomineeAge', Value: '60' }
    ]
  },
  {
    LeadID: 112,
    CustomerID: 12346,
    ProposalNumber:"PB2793491",
    Name : "Saurabh",
    PropserDetails: [
      { ID: 10, Label: 'Name', Value: 'Saurabh' },
      { ID: 11, Label: 'MobileNo', Value: 9897969594 },
      { ID: 12, Label: 'Country', Value: 'India' },
      { ID: 13, Label: 'Gender', Value: 'Male' },
      { ID: 14, Label: 'EmailID', Value: 'saurabh@dummy.com' },
      { ID: 15, Label: 'DOB', Value: '09/04/1977' },
      { ID: 16, Label: 'MaritalStatus', Value: 'Married' },
      { ID: 17, Label: 'Occupation', Value: 'Professional' },
      { ID: 18, Label: 'Address', Value: '1372, Sector 23, Chandigarh' },
      { ID: 19, Label: 'State', Value: 'Chandigarh' },
      { ID: 20, Label: 'City', Value: 'Chandigarh' },
      { ID: 21, Label: 'PostCode', Value: 160019 },
      {
        ID: 22,
        Label: 'PermanentAddress',
        Value: '1372, Sector 23, Chandigarh'
      }
    ],
    ContactDetails: [
      { ID: 23, Label: 'MobileNumber', Value: 9897969594 },
      { ID: 24, Label: 'Country', Value: 'India' },
      { ID: 25, Label: 'CreatedOn', Value: '2023-11-03T14:31:27' }
    ],
    InsuredDetails: [
      { ID: 26, Label: 'MemberRelationship', Value: 'Self' },
      { ID: 27, Label: 'Name', Value: 'Saurabh' },
      { ID: 28, Label: 'Gender', Value: 'Male' },
      { ID: 29, Label: 'DateofBirth', Value: '09/04/1977 12:00:00 AM' },
      { ID: 30, Label: 'Height', Value: '170' },
      { ID: 31, Label: 'Weight', Value: '67' },
      { ID: 32, Label: 'Occupation', Value: 'Professional' }
    ],
    PolicyDetails: [
      { ID: 33, Label: 'NomineeName', Value: 'Shubham' },
      { ID: 34, Label: 'NomineeAge', Value: '23' }
    ]
  },
  {
    LeadID: 113,
    CustomerID: 12347,
    ProposalNumber:"PB8398923",
    Name : "Mohit Da",
    PropserDetails: [
      { ID: 10, Label: 'Name', Value: 'Mohit Da' },
      { ID: 11, Label: 'MobileNo', Value: 9182736450 },
      { ID: 12, Label: 'Country', Value: 'India' },
      { ID: 13, Label: 'Gender', Value: 'Male' },
      { ID: 14, Label: 'EmailID', Value: 'mohit.da@dummy.com' },
      { ID: 15, Label: 'DOB', Value: '10/07/1994' },
      { ID: 16, Label: 'MaritalStatus', Value: 'Unmarried' },
      { ID: 17, Label: 'Occupation', Value: 'Poker' },
      { ID: 18, Label: 'Address', Value: '47b, Sector 420, Gurugram' },
      { ID: 19, Label: 'State', Value: 'Haryana' },
      { ID: 20, Label: 'City', Value: 'Gurugram' },
      { ID: 21, Label: 'PostCode', Value: 122025 },
      {
        ID: 22,
        Label: 'PermanentAddress',
        Value: '47b, Sector 420, Gurugram'
      }
    ],
    ContactDetails: [
      { ID: 23, Label: 'MobileNumber', Value: 9182736450 },
      { ID: 24, Label: 'Country', Value: 'India' },
      { ID: 25, Label: 'CreatedOn', Value: '2023-11-03T10:31:27' }
    ],
    InsuredDetails: [
      { ID: 26, Label: 'MemberRelationship', Value: 'Mother' },
      { ID: 27, Label: 'Name', Value: 'Beena' },
      { ID: 28, Label: 'Gender', Value: 'Female' },
      { ID: 29, Label: 'DateofBirth', Value: '09/04/1979 12:00:00 AM' },
      { ID: 30, Label: 'Height', Value: '150' },
      { ID: 31, Label: 'Weight', Value: '55' },
      { ID: 32, Label: 'Occupation', Value: 'None' }
    ],
    PolicyDetails: [
      { ID: 33, Label: 'NomineeName', Value: 'Mohit Da' },
      { ID: 34, Label: 'NomineeAge', Value: '29' }
    ]
  }
]

const RedirectUrl=[
  {"ProductId":2,Url:"https://healthqa.policybazaar.com/proposalv2?encenq=dTM4TG4zcDNiSmVmaElMNWYvVWR4NDE2aEpOckpwOGUvc1JmSy96RGF6cz0&enquiryid=NDQ0NTI5OQ==&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjQ0NDUyOTksIkV4cGlyeVRpbWUiOjE3MDY3NjQ4NDl9.PNSb0Nr98iUGLAhmbUK_cm72TTbTTfeHR1p8Oqhkh7LbwkZZZ5FdrXpNT18Bsic2yDFZgcKDbMolBRiSi2xnEouMhDwQoZlLnx0bktAfM9JQMZ7X2WhjmfZoxGVcZBApP8gSmAtCc4rbdsnKyRd98KinwMeUH_BOh96UCwmn9xk"},
  {"ProductId":7,Url:"https://healthqa.policybazaar.com/proposalv2?encenq=dTM4TG4zcDNiSmVmaElMNWYvVWR4NDE2aEpOckpwOGUvc1JmSy96RGF6cz0&enquiryid=NDQ0NTI5OQ==&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjQ0NDUyOTksIkV4cGlyeVRpbWUiOjE3MDY3NjQ4NDl9.PNSb0Nr98iUGLAhmbUK_cm72TTbTTfeHR1p8Oqhkh7LbwkZZZ5FdrXpNT18Bsic2yDFZgcKDbMolBRiSi2xnEouMhDwQoZlLnx0bktAfM9JQMZ7X2WhjmfZoxGVcZBApP8gSmAtCc4rbdsnKyRd98KinwMeUH_BOh96UCwmn9xk"},
  {"ProductId":115,Url:"https://healthqa.policybazaar.com/proposalv2?encenq=dTM4TG4zcDNiSmVmaElMNWYvVWR4NDE2aEpOckpwOGUvc1JmSy96RGF6cz0&enquiryid=NDQ0NTI5OQ==&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjQ0NDUyOTksIkV4cGlyeVRpbWUiOjE3MDY3NjQ4NDl9.PNSb0Nr98iUGLAhmbUK_cm72TTbTTfeHR1p8Oqhkh7LbwkZZZ5FdrXpNT18Bsic2yDFZgcKDbMolBRiSi2xnEouMhDwQoZlLnx0bktAfM9JQMZ7X2WhjmfZoxGVcZBApP8gSmAtCc4rbdsnKyRd98KinwMeUH_BOh96UCwmn9xk"},
]


module.exports = {leadIds,proposerData, custLeadMapping,RedirectUrl};