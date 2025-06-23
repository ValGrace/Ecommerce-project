
const express = require('express')
const router = express.Router()
const axios = require('axios')
const dotenv = require('dotenv');

let auth_token = [];


const consumerKey = process.env.consumerKey
const consumerSecret = process.env.consumerSecret

const getTokenData = () => {
    return getOauthToken()
}
const getOauthToken = () => {
    
    
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"    
    
    // let buffer = new Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64') 
    // const auth = `Basic ${buffer}`
    
     axios.get(url, {
            auth: {
                'username': consumerKey,
                'password': consumerSecret
             },  
   
        }).then((response) => {
        //var token = response.data.access_token
           console.log(response.data.access_token)
            // return response.data.access_token
           
        })
        .catch((err) => {
            console.log(err)
        })
       
} 

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

async function Lipa_na_mpesa(req, res, next) {
    
    getOauthToken()
    const oauth = `Bearer ${auth_token}`
    const passkey = process.env.passKey
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    const short_code = 600426
    let transaction_type = "CustomerPayBillOnline"
    let phone = window.localStorage.getItem("phone-number")
    let timestamp = formatDate()
    let password = new Buffer.from(short_code + passkey + timestamp).toString('base64')
     axios.post(url, {        
        body: JSON.stringify({
            BusinessShortCode: short_code,
            Password: password,
            Timestamp: timestamp,
            TransactionType: transaction_type,
            Amount: window.localStorage.getItem("total-price"),
            PartyA: phone,
            PartyB: short_code,
            PhoneNumber: phone,
            AccountReference: "anypay online store",
            CallBackURL: "http://localhost:3000/dev/mpesa",
            TransactionDesc: "anypay shopping"
        }),
         headers: { 
            "Authorization": oauth,
            "Content-type": "application/json"
        },
    }) 
    .then((resMsg)=> {
        let resposeBody = resMsg.data
        console.log(resposeBody)
        
    })
    .catch((err) => {
        console.log(err.message)
    })
    

} 
    router.get('/', getOauthToken)
    
    router.post('/', Lipa_na_mpesa)


module.exports = router