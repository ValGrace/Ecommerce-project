// export async function Reloadly(){

// const url = 'https://auth.reloadly.com/oauth/token'
// const options = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
//     body: JSON.stringify({
//         client_id: "3WaSsceX5w2ATMLBy59vC7hC26Mq8uqT",
//         client_secret: "6zd6F6HmtH-lpo3taiVlzXVa96maJh-rE8xUxQMiupzYMoqgIiklqVO7b1T179l",
//         grant_type: "client_credentials",
//         audience: "https://topups-sandbox.reloadly.com"
//     })
// }

// await fetch(url, options)
//    .then(res => res.json())
//    .then(json => console.log(json))
//    .catch(err => console.error('error:' +err))
// }
// }

// const fetch = require('node-fetch');

// const url = 'https://topups-sandbox.reloadly.com/operators/auto-detect/phone/%7Bphone%7D/countries/%7Bcountryisocode%7D?suggestedAmountsMap=true&suggestedAmounts=%7Bvalue%7D';
// const options = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/com.reloadly.topups-v1+json',
//     Authorization: 'Bearer <YOUR_TOKEN_HERE>'
//   }
// };

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));

