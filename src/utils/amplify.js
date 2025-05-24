export default {
    Auth: {
        Cognito:{
            region: import.meta.env.VITE_AWS_REGION,
            userPoolWebClientId: import.meta.env.VITE_APP_CLIENT_ID,
            userPoolId: import.meta.env.VITE_USER_POOL_ID,
            username: 'true',
        }
   
  }
};


// VITE_AWS_REGION="ap-southeast-2"
// VITE_USER_POOL_ID="ap-southeast-2_5fG0vDfnr"
// VITE_APP_CLIENT_ID="5ferk702vqt7qd9uk1h026g54d"