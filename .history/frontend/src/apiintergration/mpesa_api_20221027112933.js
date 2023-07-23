let unirest = require("unirest")
const qrcode = require("qrcode")
const axios = require("axios") 
async function getAcccessToken(req, res, next) {
    const consumerKey = 'hjVvv31dBNW3Xbyut9vKo6CbRBWvrIpf'
    const consumerSecret = 'q6Yb0FbhJHKf43Mv' 
    let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"

    let buf = new Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")
   
    let auth = `Basic ${buf}`

try  {
    req = await unirest("GET",url);

    req.query({
        "grant_type": "client_credentials"
    })
    
    req.headers({
        "Authorization": auth
    })

   req.token = req.data.access_token;

    res.status(200)
    return next()
}    catch(err){ 

    req.end(res => {
        if (res.error) throw new Error(res.Error)
        console.log(res.body);
    })

    
}
}

export async function lipaNaMpesaC2B(req, res) {
    let token = req.token
    let auth = `Bearer ${token}`

    const timestamp = Date.now()
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

    let short_code = ''
    
    let transaction_type = "CustomerPayBillOnline"
    let password =`${short_code}${auth}${timestamp}`
    let amount = "20"
    let msisdn = ""
    let partyA = ""
    let partyB = short_code    
    let callBackUrl = "https://b453-102-219-208-47.in.ngrok.io"
    let accountReference = "anypay online store"
    let transaction_desc = "Transaction for payment of goods bought "

    try {
        let { data} = await axios.post(url, {
            "BusinessShortCode": short_code,
            "Password": password,            
            "Timestamp": timestamp,
            "TransactionType": transaction_type,
            "Amount": amount,
            "Msisdn": msisdn,
            "BillRefNumber": partyB,
            "AccountReference": accountReference,
            "CallBackURL": callBackUrl,
            
        }, {
              "headers": {
                "Authorization": auth
              }
        }).catch(console.log)
        return res.send({
            success: true,
            message: data
        })
    } catch (err){
        return res.send({
            success: false,
            message: err['response']['statusText']
        })
    }
   
}