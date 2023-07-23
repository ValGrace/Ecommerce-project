import { useState} from 'react'
import axios from "axios"
let unirest = require('unirest');
const GetAcccessToken = () => {

    
let req = unirest('GET', 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
.headers({ 'Authorization': 'Bearer aGpWdnYzMWRCTlczWGJ5dXQ5dktvNkNiUkJXdnJJcGY6cTZZYjBGYmhKSEtmNDNNdg==' })
.send()
.end(res => {
	if (res.error) throw new Error(res.error);
	console.log(res.raw_body);
});
//     const consumerKey = 'hjVvv31dBNW3Xbyut9vKo6CbRBWvrIpf'
//     const consumerSecret = 'q6Yb0FbhJHKf43Mv'
//     const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    
    
//     let buffer = "aGpWdnYzMWRCTlczWGJ5dXQ5dktvNkNiUkJXdnJJcGY6cTZZYjBGYmhKSEtmNDNNdg==" 
    
//      let token = ''
//      let auth = `Basic ${buffer}`
//      axios.get(url, {       
//         headers: {
//             "Authorization": auth,  
//             "Connection": "keep-alive",          
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET",
//             "Access-Control-Allow-Headers": "*"
//         }
//        })       
//        .then((auth_token) => {
//           token = auth_token.data.access_token
//        })
//        .catch((err) => {
//         console.log(err.message)
//        })
  
//    return token
}



export const Lipa_na_mpesa = () => {
    let oauth_token = GetAcccessToken()
    const oauth = `Bearer ${oauth_token}`
    const passkey = "WMi70FWUYl89fUkRU5Sx36kmMeY9V4rf2fOb9ICgdwZmCXE7MZ0+6DtQmjSs5sdt80kF1f01UHh56JxB0EB0wr0maV1PxIjNLf/XC2q4r0aNuaENFXNaqb5BQGzA32+Ll7QnTN6/CLs2RlEqyGlCF4xaON2BjUTYoejsZj4Oc7rL1R4HmcMc2JGsxwJkQ+/vOaxkFZ9giF7Lmfvnv07S17UOOH9sjE77Tgvq+k+0W0a0zhM7MPRSqmQ/N8BUs/09jEY2qt/KpPoCrnwRElcEP3NXNndYji2y9RuO76kfxzLPcIdphPKXrwl87sC0GeDNdw2Zf3zRjioNYi8wNmiJAg=="
    const timestamp = Date.now()
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    const short_code = '174379'
    let transaction_type = "CustomerPayBillOnline"
    let phone = window.localStorage.getItem("phone-number")
    const [status, setStatus] = useState('')
    const [responseBody, setResponseBody] = useState('')
    let pushStatus = ''
    let pushResponse;
    fetch(url, {
        method: 'POST',
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
            CallBackURL: "https://0498-102-219-208-45.in.ngrok.io",
            TransactionDesc: "anypay shopping"
        }),
        headers: {
            "Authorization": oauth,
            "Content-type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((responseBuf) => {
       pushStatus = "Stk push sent to phone"
       pushResponse = responseBuf.data
       console.log(pushResponse)
    })
    .catch((err) => {
        console.log(err.message)
    })
    
    return (
        <>
        <h4>{pushStatus}</h4>
        <h4>{pushResponse}</h4>
        </>
    )
}
      

//             "TransactionDesc": "anypay shopping"
            
//         },
//             headers: {
//                 "Authorization": auth,
//                 "Access-Control-Allow-Origin": "*"
//               }
//         }).then(responseBuf => {
//             res.status(200).send('Stk push sent to phone')
//            let responseBody = responseBuf.data 
//            console.log(responseBody)
//         }).catch(error => {
//             res.status(500).send('There was an error')
//             console.error(error)
//         })
  
 
// }

// myapp.post('/mpesa', lipaNaMpesaC2B)

// myapp.post('/c2b/confirmation', function (req, res) {
//     console.log('----------------C2B CONFIRMTION')
//     console.log(req.body)

//     let message = {
//         "ResultCode": 0,
//         "ResultDesc": "Success"
//     }
//     res.json(message)
// })
// export function Daraja() {
//     getAcccessToken().then(() => {
//         myapp.listen(3000, console.log("Successfully connected"))
//     }) 
// }
