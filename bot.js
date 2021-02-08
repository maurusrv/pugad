// require('dotenv').config()
const twit = require('twit')
const cronJob = require('cron').CronJob;
const data = require('./data.js') // exported array for now

const twitterAPI = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

/*
  in case the server worker on heroku produces an error, 
  find the last index and set it on environment variables
*/ 
const lastIndex = process.env.LAST_INDEX 

data.forEach((phrase, index) => {
  if (lastIndex <= index) {
    const timeNow = Date.now()
    const tweetDate = new Date(timeNow + (1000 * 60 * 60 * (index + 1))) // currently tweeting every next hour
    const tweetJob = new cronJob(tweetDate, function () {
      twitterAPI.post('statuses/update', { 
        status: phrase, 
      },
        function (err, data, response) {
          console.log({err, data, response})
      })
      // console.log({tweetDate, tweetJob, phrase})
    }, null, true)
  } else console.log(`last index is ${lastIndex} skipping index: ${index} phrase: ${phrase}`) // checking log for now to check if right index is being used to tweet
})