const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-859860.okta.com',
  token: '00kaxiLZ0SPrB-sc1OfYP8ZXa9w5vOQZpu5FvpRff5'    // Obtained from Developer Dashboard
});

module.exports = {
    client
}