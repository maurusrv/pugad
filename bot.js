const twit = require('twit')
const data = require('./data')

require('dotenv').config()

const twitterAPI = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

for (let i = 0; i <= data.length; i++) {
  if (i === data.length) {
    i = 0
  }
  setTimeout(() => {
    twitterAPI.post('statuses/update', { 
      status: data[i] 
    },
    function (err, data, response) {
      console.log({err, data, response})
    },
  )
  }, index * 1000 * 60)
}