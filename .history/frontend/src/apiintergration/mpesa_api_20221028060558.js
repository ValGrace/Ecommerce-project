import axios from 'axios';
const unirest = require('unirest');
export async function getAcccessToken(req, res, next) {
    // const consumerKey = 'hjVvv31dBNW3Xbyut9vKo6CbRBWvrIpf'
    // const consumerSecret = 'q6Yb0FbhJHKf43Mv' 
     let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"



     var queries= unirest("GET", url)

    let buf = "aGpWdnYzMWRCTlczWGJ5dXQ5dktvNkNiUkJXdnJJcGY6cTZZYjBGYmhKSEtmNDNNdg=="
   
    let auth = `Basic ${buf}`

try  {
    
   
    
    queries.headers({
        "Authorization": auth
    })
   

//    req.token = data["access_token"];
  
      
   
    return next()
}    catch(err){ 

   console.log(err)

    
}
queries.end(res => {
    if (res.error) throw new Error(res.error)
    console.log(res.body) 
})
}

 