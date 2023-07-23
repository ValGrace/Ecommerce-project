
const express = require("express")

const router = express.Router() 

const credentials = {
    apiKey: process.env.airtimeKey,
    username: "sandbox"
   }
const AfricasTalking = require('africastalking')(credentials)


async function SendAirtime(req, res, next) {
    const airtime = AfricasTalking.AIRTIME
    const option = {
        recipients: [{
            phoneNumber: req.body.telephone,
            currencyCode: "KES",
            amount: req.body.amount 
        }]
    }
    
        airtime.send(option)
          .then(response => {
            res.status(200).json({message: response})
            console.log(response)
          })
          .catch( error => {
            res.status(500).json({message: error})
          })
    
}

router.post('/', SendAirtime)

module.exports = router