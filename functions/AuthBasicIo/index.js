// const catalyst = require("zcatalyst-sdk-node");

// module.exports = (context, basicIO) => {

//   console.log('context in auth basic io',context)
//   console.log('basicio in auth basic io',basicIO)


//   const catalystApp = catalyst.initialize(context);
//   const requestDetails = catalystApp.userManagement().getSignupValidationRequest(basicIO);

//   console.log('request details from auth basic io',requestDetails)


//   if (requestDetails) {
//     if (requestDetails.user_details.email_id.includes("@traqmetrix.com") || requestDetails.user_details.email_id.includes("@gmail.com")) {
//       // The actions that occur in the event of a successful authentication can be customized
//       basicIO.write(
//         JSON.stringify({
//           status: "success",
//           user_details: {
//             first_name: requestDetails.user_details.first_name,
//             last_name: requestDetails.user_details.last_name,
//             email_id: requestDetails.user_details.email_id,
//             role_identifier: "App User", // If you want to override the default role, you can specify the role id/name here.
//             org_id: "", // If you are providing the Org ID, make sure it is copied exactly from the console.
//           },
//         })
//       );
//     } else {
//       // The user has failed authentication
//       basicIO.write(
//         JSON.stringify({
//           status: "failure",
//           requestDetails:requestDetails,
//           context:context
//         })
//       );
//     }
//   }
//   context.close();
// };












// const catalyst = require("zcatalyst-sdk-node");

// async function getMyPagedRows(dataStore, tableId, hasNext = true, nextToken = undefined, allData = []) {
//   if (!hasNext) {
//     return allData;
//   }

//   try {
//     const response = await dataStore.table(tableId).getPagedRows({
//       nextToken,
//       maxRows: 100
//     });

//     const { data, next_token, more_records } = response;
//     allData = allData.concat(data);

//     if (more_records) {
//       return await getMyPagedRows(dataStore, more_records, next_token, allData);
//     } else {
//       return allData;
//     }
//   } catch (err) {
//     console.log("Error : " + err.toString());
//     throw err;
//   }
// }


// module.exports = async (context, basicIO) => {
//   try {
//     console.log('context in auth basic io', context);
//     console.log('basicio in auth basic io', basicIO);

//     const catalystApp = catalyst.initialize(context);

//     // Ensure the request is awaited if it returns a promise
//     const requestDetails = await catalystApp.userManagement().getSignupValidationRequest(basicIO);

//     console.log('request details from auth basic io', requestDetails);



//     let dataStore = catalystApp.datastore();
//     const allRows = await getMyPagedRows(dataStore, '15205000000385040');

//     let emails = []

//     allRows.forEach((data) => {
//       emails.push(data.email)
//     })

//     console.log('allrows', emails)

//     if (emails.includes(requestDetails.user_details.email_id)) {

//       if (requestDetails) {
//         if (requestDetails.user_details.email_id.includes("@traqmetrix.com") || requestDetails.user_details.email_id.includes("@gmail.com")) {
//           console.log('request details',requestDetails)

//           basicIO.write(
//             JSON.stringify({
//               status: "success",
//               user_details: {
//                 first_name: requestDetails.user_details.first_name,
//                 last_name: requestDetails.user_details.last_name,
//                 email_id: requestDetails.user_details.email_id,
//                 role_identifier: "App User",
//                 org_id: "",
//               },
//             })
//           );
//         } else {
//           basicIO.write(
//             JSON.stringify({
//               status: "failure"
//             })
//           );
//         }
//       }
//     } else {
//       basicIO.write(
//         JSON.stringify({
//           status: "failure"
//         })
//       );

//     }


//   } catch (error) {
//     console.error('Error occurred:', error);  // Log any errors
//   } finally {
//     context.close();
//   }
// };













const catalyst = require("zcatalyst-sdk-node");
const express = require('express');
const app = express();
app.use(express.json());


app.post('/__catalyst/15205000000147040/auth/signup',async(req,res)=>{
  console.log('response from post')
  res.send('hello')
})

async function getMyPagedRows(dataStore, tableId, hasNext = true, nextToken = undefined, allData = []) {
  if (!hasNext) {
    return allData;
  }

  try {
    console.log('Fetching paged rows with nextToken:', nextToken); // Logging next token
    const response = await dataStore.table(tableId).getPagedRows({
      nextToken,
      maxRows: 100
    });

    const { data, next_token, more_records } = response;
    console.log('Fetched rows:', data.length); // Logging number of rows fetched
    allData = allData.concat(data);

    if (more_records) {
      console.log('More records available, fetching next page');
      return await getMyPagedRows(dataStore, tableId, more_records, next_token, allData);
    } else {
      return allData;
    }
  } catch (err) {
    console.log("Error in getMyPagedRows: " + err.toString());
    throw err;
  }
}




module.exports = async (context, basicIO) => {
  try {
    console.log('Initializing Catalyst App');
    const catalystApp = catalyst.initialize(context);

    console.log('Fetching signup validation request');
    const requestDetails = await catalystApp.userManagement().getSignupValidationRequest(basicIO);
    console.log('Request details:', requestDetails);

    let dataStore = catalystApp.datastore();
    console.log('Fetching rows from datastore');
    const allRows = await getMyPagedRows(dataStore, '15205000000385040');
    console.log('All rows fetched:', allRows.length);

    let emails = [];
    allRows.forEach((data) => {
      emails.push(data.email);
    });
    console.log('Emails:', emails);

    if (emails.includes(requestDetails.user_details.email_id)) {
      if (requestDetails) {
        if (requestDetails.user_details.email_id.includes("@traqmetrix.com") || requestDetails.user_details.email_id.includes("@gmail.com")) {
          console.log('User authorized:', requestDetails.user_details.email_id);

          basicIO.write(
            JSON.stringify({
              status: "success",
              user_details: {
                first_name: requestDetails.user_details.first_name,
                last_name: requestDetails.user_details.last_name,
                email_id: requestDetails.user_details.email_id,
                role_identifier: "App User",
                org_id: "",
              },
            })
          );
        } else {
          console.log('User email not authorized:', requestDetails.user_details.email_id);
          basicIO.write(
            JSON.stringify({
              status: "failure"
            })
          );
        }
      }
    } else {
      console.log('Email not found in the datastore:', requestDetails.user_details.email_id);
      basicIO.write(
        JSON.stringify({
          status: "failure"
        })
      );
    }
  } catch (error) {
    console.error('Error occurred in the main function:', error); 
  } finally {
    console.log('Closing context');
    context.close();
  }
};
