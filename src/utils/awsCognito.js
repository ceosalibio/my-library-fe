// import {
//     CognitoUserPool,
//     CognitoUser,
//     AuthenticationDetails,
//     CognitoUserAttribute,
//   } from 'amazon-cognito-identity-js';

//   const poolData = {
//     UserPoolId: import.meta.env.VITE_USER_POOL_ID, // Replace with your actual User Pool ID
//     ClientId: import.meta.env.VITE_APP_CLIENT_ID,   // Replace with your actual App Client ID
//   };

//   const userPool = new CognitoUserPool(poolData);


//   export const singUp = (username, password, email) => {
//     const attributes = [
//         new CognitoUserAttribute({Name : 'email', Value: email})
//     ]
//     return new Promise((resolve, reject) => {
//         userPool.signUp(username, password, attributes, null, (err, result) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(result.user);
//           }
//         });
//       });
    
//   }


//   // SIGN IN FUNCTION
// export const signIn = (username, password) => {
//     const user = new CognitoUser({ Username: username, Pool: userPool });
  
//     const authDetails = new AuthenticationDetails({
//       Username: username,
//       Password: password,
//     });
  
//     return new Promise((resolve, reject) => {
//       user.authenticateUser(authDetails, {
//         onSuccess: (result) => {
//           // Tokens are available here
//           resolve({
//             accessToken: result.getAccessToken().getJwtToken(),
//             idToken: result.getIdToken().getJwtToken(),
//             refreshToken: result.getRefreshToken().getToken(),
//           });
//         },
//         onFailure: (err) => {
//           reject(err);
//         },
//       });
//     });
//   };