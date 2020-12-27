// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "41vp771pcg9eesk6f3l479p343",     // CognitoClientID
  "api_base_url": "https://54h1tky2y6.execute-api.ap-southeast-1.amazonaws.com/sit",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sam-test-1.auth.ap-southeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d12w858yo2omfg.amplifyapp.com"                                      // AmplifyURL
};

export default config;
