# Ecommerce-project

anypay is an ecommerce online store with a range of products for sale
## Features
- User authentication using firebase

![image](https://github.com/ValGrace/Ecommerce-project/blob/main/frontend/public/static/media/ecom-signup.PNG)
![image](https://github.com/ValGrace/Ecommerce-project/blob/main/frontend/public/static/media/ecom-login.PNG)

- Homepage

- ![image](https://github.com/ValGrace/Ecommerce-project/blob/main/frontend/public/static/media/ecom-home.PNG)
![image](https://github.com/ValGrace/Ecommerce-project/blob/main/frontend/public/static/media/ecom-home2.PNG)
- Product store with a range of products

- ![image](https://github.com/ValGrace/Ecommerce-project/blob/main/frontend/public/static/media/ecom-vrs.PNG)
![image](https://github.com/ValGrace/Ecommerce-project/blob/main/frontend/public/static/media/ecom-phones.PNG)
![image](https://github.com/ValGrace/Ecommerce-project/blob/main/frontend/public/static/media/ecom-plnts.PNG)

- User can purchase airtime
- Product cart powered by redux

- Checkout functionality from an express serverless backend

- ![image](https://github.com/ValGrace/Ecommerce-project/blob/main/frontend/public/static/media/ecom-checkout.PNG)
![image](https://github.com/ValGrace/Ecommerce-project/blob/main/frontend/public/static/media/ecom-checkout2.PNG)

### Steps to run this project:
- Clone the project using git clone  
- Switch to the client side directory:
   `cd frontend`
- Run `npm install` to install all the reuired dependencies then `npm start`.
- The app will now automatically open in your default browser


### Payment Gateway
The express backend is implemented using the serverless framework and it runs stk push reuest function.
- Open a new terminal and switch to the backend directory:
    cd `backend`
 - Run `npm install`
 - Create an account on mpesa daraja api platform then create a new app sandbox
 - Create a .env file in the root directory. add the following values in the file: 
    <ol>
      <li>consumerKey=consumerKeyValue</li>
      <li>consumerSecret=consumerSecretValue</li>
      <li>passKey=passKeyValue</li>
      <li>API_GATEWAY=</li>
    </ol>
    NOTE: Leave API_GATEWAY value empty
  - Start the server using `sls offline start --param="tunnel=true"` 
 
![image](https://user-images.githubusercontent.com/69193709/205547894-fa42a753-9477-4b47-8d33-e6c61931b11d.png)
 
