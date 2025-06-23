
const express = require('express')
const router = express.Router()
const axios = require('axios')
const dotenv = require('dotenv');


let auth_token = [];


const consumerKey = process.env.consumerKey
const consumerSecret = process.env.consumerSecret

// function startInterval(seconds) {
//     setInterval(function () {getOauthToken() }, seconds * 1000)
// }

// const getOauthToken = () => {
    
    
//     const OauthTokenUrl = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"    
    
    // let buffer = new Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64') 
    // const auth = `Basic ${buffer}`
    
//      axios.get(url, {
//             auth: {
//                 'username': consumerKey,
//                 'password': consumerSecret
//              },  
   
//         }).then((response) => {
//         var gettoken = response.data.access_token
//         //    console.log(response.data.access_token)
//            console.log(gettoken)
           
//         })
//         .catch((err) => {
//             console.log(err)
//         })
       
// } 

function twoDigits(n) {
    return n < 10 ? '0' + n : n 
}

function formatDate() {
    let date = new Date()
    let correctDate = date.getFullYear().toString() +
           twoDigits(date.getMonth() + 1) +
           twoDigits(date.getDate()) +
           twoDigits(date.getHours()) +
           twoDigits(date.getMinutes()) +
           twoDigits(date.getSeconds()) 

           return correctDate
}


function Lipa_na_mpesa(req, res, next) {
    const OauthTokenUrl = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials" 
    // const oauth = `Bearer ${mpesaToken}`
    const passkey = process.env.passKey
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    const short_code = 174379
    let transaction_type = "CustomerPayBillOnline"
    let phone = req.body.phone
    let amount = req.body.amount
    let timestamp = formatDate()
    let cbUrl = process.env.API_GATEWAY
    let password = new Buffer.from(short_code + passkey + timestamp).toString('base64')
    axios.get(OauthTokenUrl, {
        auth: {
            'username': consumerKey,
            'password': consumerSecret
         },  

    }).then((response) => {
    // var gettoken = response.data.access_token
    //    console.log(response.data.access_token)
    //    console.log(gettoken)
    
        axios.post(url, {        
            body: JSON.stringify({
                BusinessShortCode: short_code,
                Password: password,
                Timestamp: timestamp,
                TransactionType: transaction_type,
                Amount: amount,
                PartyA: phone,
                PartyB: short_code,
                PhoneNumber: phone,
                AccountReference: "anypay online store",
                CallBackURL: `${cbUrl}/v2/api/confirmUrl`,
                TransactionDesc: "anypay shopping"
            }),
             headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${response.data.access_token}`,
                "Access-Control-Allow-Origin": "*"
                
            },
        }) 
        .then((resMsg)=> {
            let resposeBody = resMsg.data
            console.log(resposeBody)
            
        })
        .catch((err) => {
            console.error(err.response)
        })
        
    })
    .catch((err) => {
        console.log(err)
    })
     

} 
    // router.get('/', getOauthToken)
    // router.get('/', () => {
    //    getOauthToken()
    //    console.log(token)
    // })
    router.post('/', Lipa_na_mpesa
    )


module.exports = router