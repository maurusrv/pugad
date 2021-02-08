
// borrowed somewhere on git to get access token and secret of the twitter profile to used

"use strict";
var twitterAPI = require('node-twitter-api');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

require('dotenv').config()

rl.question("Your application key: ", function(appKey) {
    rl.question("Your application secret: ", function(appSecret) {
        var twitter = new twitterAPI({
            consumerKey: process.env.CONSUMER_KEY,
            consumerSecret: process.env.CONSUMER_SECRET_KEY,
            callback: ''});
        twitter.getRequestToken(function(error, requestToken,
                requestTokenSecret, results) {
            console.log("Log into Twitter as the user you want to authorize " +
                "and visit this URL:")
            console.log(twitter.getAuthUrl(requestToken));
            rl.question("Enter your PIN: ", function(input) {
                var pin = input;
                twitter.getAccessToken(requestToken, requestTokenSecret, pin,
                    function(error, accessToken, accessTokenSecret, results) {
                    console.log("Your access token: " + accessToken);
                    console.log("Your token secret: " + accessTokenSecret);
                    rl.close();
                });
            });
        });
    });
});