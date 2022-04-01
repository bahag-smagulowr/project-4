// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'ey9ccdsqz1'
export const apiEndpoint = `https://${apiId}.execute-api.eu-central-1.amazonaws.com/de`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-inptjqvn.us.auth0.com',            // Auth0 domain
  clientId: 's19jhvjLfq9Cl5ga2slZA6XUbdCHUhhv',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
