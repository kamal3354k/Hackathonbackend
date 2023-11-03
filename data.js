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
      PropserDetails: {
        Name: "Deepak",
        MobileNo: 9867268811,
        Country: "India",
        Gender: "Male",
        EmailID: "deepak@dummy.com",
        DOB: "16/09/1987",
        MaritalStatus: "Married",
        Occupation: "Private Occupation",
        Address: "ABC colony, Pune",
        State: "Maharashtra",
        City: "Pune",
        PostCode: 854382,
        PermanentAddress: "ABC colony, Pune"
      },
      ContactDetails: {
        MobileNumber: 9867268811,
        Country: "India",
        CreatedOn: "2023-11-03T13:31:27",
        
      },
      InsuredDetails: {
        MemberRelationship: "Father",
        Name: "Shubham",
        Gender: "Male",
        DateofBirth: "9/1/1960 12:00:00 AM",
        Height: "157",
        Weight: "68",
        Occupation: "None"
      },
      PolicyDetails: {
        NomineeName: "Sheela",
        NomineeAge: "60"
      }
    },
    {
      LeadID: 112,
      CustomerID: 12346,
      PropserDetails: {
        Name: "Saurabh",
        MobileNo: 9897969594,
        Country: "India",
        Gender: "Male",
        EmailID: "saurabh@dummy.com",
        DOB: "09/04/1977",
        MaritalStatus: "Married",
        Occupation: "Professional",
        Address: "1372, Sector 23, Chandigarh",
        State: "Chandigarh",
        City: "Chandigarh",
        PostCode: 160019,
        PermanentAddress: "1372, Sector 23, Chandigarh"
      },
      ContactDetails: {
        MobileNumber: 9897969594,
        Country: "India",
        CreatedOn: "2023-11-03T14:31:27",
        
      },
      InsuredDetails: {
        MemberRelationship: "Self",
        Name: "Saurabh",
        Gender: "Male",
        DateofBirth: "09/04/1977 12:00:00 AM",
        Height: "170",
        Weight: "67",
        Occupation: "Professional"
      },
      PolicyDetails: {
        NomineeName: "Shubham",
        NomineeAge: "23"
      }
    },
    {
      LeadID: 113,
      CustomerID: 12347,
      PropserDetails: {
        Name: "Mohit Da",
        MobileNo: 9182736450,
        Country: "India",
        Gender: "Male",
        EmailID: "mohit.da@dummy.com",
        DOB: "10/07/1994",
        MaritalStatus: "Unmarried",
        Occupation: "Poker",
        Address: "47b, Sector 420, Gurugram",
        State: "Haryana",
        City: "Gurugram",
        PostCode: 122025,
        PermanentAddress: "47b, Sector 420, Gurugram"
      },
      ContactDetails: {
        MobileNumber: 9182736450,
        Country: "India",
        CreatedOn: "2023-11-03T10:31:27",
        
      },
      InsuredDetails: {
        MemberRelationship: "Mother",
        Name: "Beena",
        Gender: "Female",
        DateofBirth: "09/04/1979 12:00:00 AM",
        Height: "150",
        Weight: "55",
        Occupation: "None"
      },
      PolicyDetails: {
        NomineeName: "Mohit Da",
        NomineeAge: "29"
      }
    }
  ]


module.exports = {leadIds,proposerData, custLeadMapping};