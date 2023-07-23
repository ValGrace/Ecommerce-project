import axios from 'axios';

export async function getAcccessToken(req, res, next) {
    // const consumerKey = 'hjVvv31dBNW3Xbyut9vKo6CbRBWvrIpf'
    // const consumerSecret = 'q6Yb0FbhJHKf43Mv' 
     let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"

    let buf = "aGpWdnYzMWRCTlczWGJ5dXQ5dktvNkNiUkJXdnJJcGY6cTZZYjBGYmhKSEtmNDNNdg=="
   
    let auth = `Basic ${buf}`

try  {
    
    let {data} = await axios.get(url, {
    
    "headers":{
        "Authorization": auth
    }
    })

   req.token = data["access_token"];
  

    res.status(200)
    return next()
}    catch(err){ 

   console.log(err)

    
}
}

 