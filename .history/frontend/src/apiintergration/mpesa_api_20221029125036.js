import { useState, useEffect} from 'react'

const GetAcccessToken = () => {
    const consumerKey = 'hjVvv31dBNW3Xbyut9vKo6CbRBWvrIpf'
    const consumerSecret = 'q6Yb0FbhJHKf43Mv'
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    const [auth, setauth] = useState('')
    const [token, setToken] = useState('')
    let buffer = new Buffer.from(consumerKey+":"+consumerSecret).toString('base64') 
    setauth(`Basic ${buffer}`)

  
       fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": auth
        }
       })
       .then((res) => res.json())
       .then((auth_token) => {
          setToken(auth_token.data.access_token)
       })
       .catch((err) => {
        console.log(err.message)
       })
  
   return token
}

export const Lipa_na_mpesa = () => {
    const oauth = `Bearer ${GetAcccessToken()}`
    const passkey = "WMi70FWUYl89fUkRU5Sx36kmMeY9V4rf2fOb9ICgdwZmCXE7MZ0+6DtQmjSs5sdt80kF1f01UHh56JxB0EB0wr0maV1PxIjNLf/XC2q4r0aNuaENFXNaqb5BQGzA32+Ll7QnTN6/CLs2RlEqyGlCF4xaON2BjUTYoejsZj4Oc7rL1R4HmcMc2JGsxwJkQ+/vOaxkFZ9giF7Lmfvnv07S17UOOH9sjE77Tgvq+k+0W0a0zhM7MPRSqmQ/N8BUs/09jEY2qt/KpPoCrnwRElcEP3NXNndYji2y9RuO76kfxzLPcIdphPKXrwl87sC0GeDNdw2Zf3zRjioNYi8wNmiJAg=="
    const timestamp = Date.now()
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    const short_code = '174379'
    let transaction_type = "CustomerPayBillOnline"
    let phone = window.localStorage.getItem("phone-number")
    const [status, setStatus] = useState('')
    const [responseBody, setResponseBody] = useState('')
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
            CallBackURL: "https://9c5d-102-219-208-46.in.ngrok.io",
            TransactionDesc: "anypay shopping"
        }),
        headers: {
            "Authorization": oauth,
            "Content-type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((responseBuf) => {
       setStatus("Stk push sent to phone")
       setResponseBody(responseBuf.data)
       console.log(responseBody)
    })
    .catch((err) => {
        console.log(err.message)
    })

    return (
        <>
        <h4>{status}</h4>
        <h4>{responseBody}</h4>
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
