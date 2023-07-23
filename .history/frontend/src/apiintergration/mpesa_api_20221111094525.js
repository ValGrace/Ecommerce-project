
import axios from 'axios'
// const app = express()
// const cors = require('cors')

export async function GetAccessToken (req, res){
 
    const consumerKey = 'hjVvv31dBNW3Xbyut9vKo6CbRBWvrIpf'
    const consumerSecret = 'q6Yb0FbhJHKf43Mv'
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
    
    
    let buffer = new Buffer.from(consumerKey+":"+consumerSecret).toString('base64') 
    
     let token = ''
   
     try {
           
    let {data} = await axios.get(url, {  
         
       'headers': {
            'Authorization': 'Basic ' +buffer,  
            // "Connection": "keep-alive",          
           // 'Access-Control-Allow-Origin': 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
           
            
        }
       })  
       return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'application/json'  
        },
        data
       }
    } catch(err){
        console.error(err)
    }
      
  
   return token
}



// export const Lipa_na_mpesa = () => {
//     let oauth_token = GetAccessToken()
//     const oauth = `Bearer ${oauth_token}`
//     const passkey = "WMi70FWUYl89fUkRU5Sx36kmMeY9V4rf2fOb9ICgdwZmCXE7MZ0+6DtQmjSs5sdt80kF1f01UHh56JxB0EB0wr0maV1PxIjNLf/XC2q4r0aNuaENFXNaqb5BQGzA32+Ll7QnTN6/CLs2RlEqyGlCF4xaON2BjUTYoejsZj4Oc7rL1R4HmcMc2JGsxwJkQ+/vOaxkFZ9giF7Lmfvnv07S17UOOH9sjE77Tgvq+k+0W0a0zhM7MPRSqmQ/N8BUs/09jEY2qt/KpPoCrnwRElcEP3NXNndYji2y9RuO76kfxzLPcIdphPKXrwl87sC0GeDNdw2Zf3zRjioNYi8wNmiJAg=="
//     const timestamp = Date.now()
//     const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
//     const short_code = '174379'
//     let transaction_type = "CustomerPayBillOnline"
//     let phone = window.localStorage.getItem("phone-number")

//     let pushStatus = ''
//     let pushResponse;
//     axios.post(url, {        
//         body: JSON.stringify({
//             BusinessShortCode: short_code,
//             Password: `${short_code}${passkey}${timestamp}`,
//             Timestamp: timestamp,
//             TransactionType: transaction_type,
//             Amount: window.localStorage.getItem("total-price"),
//             PartyA: phone,
//             PartyB: short_code,
//             PhoneNumber: phone,
//             AccountReference: "anypay online store",
//             CallBackURL: "https://2e88-102-219-208-47.in.ngrok.io ",
//             TransactionDesc: "anypay shopping"
//         }),
//         headers: {
//             "Authorization": oauth,
//             "Content-type": "application/json"
//         },
//     })
//     .then((res) => res.json())
//     .then((responseBuf) => {
//        pushStatus = "Stk push sent to phone"
//        pushResponse = responseBuf.data
//        console.log(pushResponse)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })
    
//     return (
//         <>
//         <h4>{pushStatus}</h4>
//         <h4>{pushResponse}</h4>
//         </>
//     )
// }



      

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
