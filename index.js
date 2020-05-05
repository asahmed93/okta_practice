const express = require('express');

const server = express()

const okta = require('@okta/okta-sdk-nodejs');
const newUser = require('./data/user')


const client = new okta.Client({
  orgUrl: 'https://dev-859860.okta.com',
  token: '00o1C028QYOi3F3Rng109pvmD5FV5sm8daPfG3pCDT'    // Obtained from Developer Dashboard
});


const PORT = 5000;

server.post('/register', (req, res, next) => {
    client.createUser(newUser)
    .then(user => {
      console.log('Created user', user);
    })
    .catch(err => {
        console.log(err)
    })

})


server.listen(PORT, () => console.log(`Server is up on ${PORT}`));                                   
  