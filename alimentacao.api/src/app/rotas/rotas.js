
const fs = require('fs')

module.exports = (app) => {
  app.get('/', function (req, resp) {

    const request = require('request');
    request('http://www.google.com', function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.

      resp.send(body);
    });

  });


  app.get('/preview', function (req, resp) {
    resp.send();
  });

  app.get('/hello', function (req, res) {

  })

  app.get('/rota6', function (req, res) {

  })

};