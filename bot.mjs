import dotenv from 'dotenv'
import twit from 'twit'
import data from './data'

dotenv.config()

const twitterAPI = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

data.forEach((line, index) => {
  setTimeout(() => {
    console.log(lline)
  }, index * 1000)
})

// twitterAPI.post(
//   'statuses/update', 
//   { status: 'kamusta, mundo!' },
//   function (err, data, response) {
//     console.log({err, data, response})
//   },
// )