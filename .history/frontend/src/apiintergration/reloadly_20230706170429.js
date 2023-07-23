export async function Reloadly(){

const url = 'https://auth.reloadly.com/oauth/token'
const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
    body: JSON.stringify({
        client_id: "3WaSsceX5w2ATMLBy59vC7hC26Mq8uqT",
        client_secret: "6zd6F6HmtH-lpo3taiVlzXVa96maJh-rE8xUxQMiupzYMoqgIiklqVO7b1T179l",
        grant_type: "client_credentials",
        audience: "https://topups.reloadly.com"
    })
}

await fetch(url, options)
   .then(res => res.json())
   .then(json => console.log(json))
   .catch(err => console.error('error:' +err))
}

