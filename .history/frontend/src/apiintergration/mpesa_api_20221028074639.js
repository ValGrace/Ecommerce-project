import axios from 'axios';
const unirest = require('unirest');
export async function getAcccessToken( ) {
    const consumerKey = 'hjVvv31dBNW3Xbyut9vKo6CbRBWvrIpf'
    const consumerSecret = 'q6Yb0FbhJHKf43Mv' 
     let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"

     let buffer = new Buffer.from(consumerKey+":"+consumerSecret)  

     try {
     var queries= unirest("GET", url)

     let auth = `Basic ${buffer.toString('base64')}`


    
   
    
    queries.headers({
        "Authorization": auth
    })
   
      let oauth = queries.data.access_token
      return oauth
} catch (error) {
    console.log(error.response)
}
//    req.token = data["access_token"];


}

 