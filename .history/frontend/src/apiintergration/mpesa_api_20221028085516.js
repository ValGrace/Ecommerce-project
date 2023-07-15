const prettyjson = require('prettyjson');
const bodyParser = require('body-parser');
const express = require('express');
const app = express()
const axios = require('axios');
let oauth_token;
app.use(bodyParser.json())

//get authoriation access token
export async function getAcccessToken( ) {
    const consumerKey = 'hjVvv31dBNW3Xbyut9vKo6CbRBWvrIpf'
    const consumerSecret = 'q6Yb0FbhJHKf43Mv' 
     let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"

     let buffer = new Buffer.from(consumerKey+":"+consumerSecret)  

     try {
     

     let auth = `Basic ${buffer.toString('base64')}`
     var response= axios.get( url, {
      headers: {
        "Authorization": auth
    }
})
   
      oauth_token = response.data.access_token
      
} catch (error) {
    console.log(error.response)
}
//    req.token = data["access_token"];


}

async function lipaNaMpesaC2B(req, res) {
    
    
    let auth = `Bearer ${oauth_token}`
    let passkey = "WMi70FWUYl89fUkRU5Sx36kmMeY9V4rf2fOb9ICgdwZmCXE7MZ0+6DtQmjSs5sdt80kF1f01UHh56JxB0EB0wr0maV1PxIjNLf/XC2q4r0aNuaENFXNaqb5BQGzA32+Ll7QnTN6/CLs2RlEqyGlCF4xaON2BjUTYoejsZj4Oc7rL1R4HmcMc2JGsxwJkQ+/vOaxkFZ9giF7Lmfvnv07S17UOOH9sjE77Tgvq+k+0W0a0zhM7MPRSqmQ/N8BUs/09jEY2qt/KpPoCrnwRElcEP3NXNndYji2y9RuO76kfxzLPcIdphPKXrwl87sC0GeDNdw2Zf3zRjioNYi8wNmiJAg=="
    const timestamp = Date.now()
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

    let short_code = '174379'
    
    let transaction_type = "CustomerPayBillOnline"
    let password =`${short_code}${passkey}${timestamp}`
    let amount = window.localStorage.getItem("total-price")
    let partyA = window.localStorage.getItem("phone-number")
    
       await axios({
            method: "POST",
            url: url,
             data: {
            "BusinessShortCode": short_code,
            "Password": password,            
            "Timestamp": timestamp,
            "TransactionType": transaction_type,
            "Amount": amount,
            "PartyA": partyA,
            "PartyB": short_code,
            "PhoneNumber": partyA,
            "AccountReference": "anypay online store",
            "CallBackURL": "https://ba87-102-219-208-47.in.ngrok.io",
            "TransactionDesc": "anypay shopping"
            
        },
            headers: {
                "Authorization": auth,
                "Access-Control-Allow-Origin": "*"
              }
        }).then(response => {
            res.status(200).send('Stk push sent to phone')
           let responseBody = response.data 
        }).catch(error => {
            res.status(500).send('There was an error')
            console.error(error)
        })
     
       
   
   
}