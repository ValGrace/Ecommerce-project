var express = require("express")
var router = express.Router()
var axios = require('axios')
let auth_token;
// router.get("/", function(req, res, next) {
//     let message = req.body.Body 
//     res.send(message)
// }) 

async function getOauthToken(req, res, next) {
    
    const consumerKey = 'hjVvv31dBNW3Xbyut9vKo6CbRBWvrIpf'
    const consumerSecret = 'q6Yb0FbhJHKf43Mv'
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
    
    
    let buffer = new Buffer.from(consumerKey+":"+consumerSecret).toString('base64') 
    
    try {
        let data= await axios.get(url, {
            'headers': {
                'Authorization': 'Basic ' +buffer 
            }
        })
        auth_token = data.access_token
        return next()

    } catch (error) {
        console.error(error.request)
    }
} 
async function Lipa_na_mpesa(req, res, next) {
    
    const oauth = `Bearer ${auth_token}`
    const passkey = "WMi70FWUYl89fUkRU5Sx36kmMeY9V4rf2fOb9ICgdwZmCXE7MZ0+6DtQmjSs5sdt80kF1f01UHh56JxB0EB0wr0maV1PxIjNLf/XC2q4r0aNuaENFXNaqb5BQGzA32+Ll7QnTN6/CLs2RlEqyGlCF4xaON2BjUTYoejsZj4Oc7rL1R4HmcMc2JGsxwJkQ+/vOaxkFZ9giF7Lmfvnv07S17UOOH9sjE77Tgvq+k+0W0a0zhM7MPRSqmQ/N8BUs/09jEY2qt/KpPoCrnwRElcEP3NXNndYji2y9RuO76kfxzLPcIdphPKXrwl87sC0GeDNdw2Zf3zRjioNYi8wNmiJAg=="
    const timestamp = Date.now()
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    const short_code = 600426
    let transaction_type = "CustomerPayBillOnline"
    let phone = window.localStorage.getItem("phone-number")

    let pushStatus = ''
    let pushResponse;
    try {
    let {data} = await axios.post(url, {        
        body: JSON.stringify({
            BusinessShortCode: short_code,
            Password: `${short_code}${passkey}${timestamp}`,
            Timestamp: timestamp,
            TransactionType: transaction_type,
            Amount: window.localStorage.getItem("total-price"),
            PartyA: phone,
            PartyB: short_code,
            PhoneNumber: phone,
            AccountReference: "anypay online store",
            CallBackURL: "https://7b08-102-219-208-47.in.ngrok.io/",
            TransactionDesc: "anypay shopping"
        }),
        headers: {
            "Authorization": oauth,
            "Content-type": "application/json"
        },
    })
    .catch((err) => {
        console.log(err.message)
    })
    return res.send({
        success: true,
        message: data
    })
}catch(err){
    return res.send({
        success: false,
        message: err['response']['statusText']
    })
}
} 
getOauthToken().then(router.post('/', Lipa_na_mpesa))

module.exports = router