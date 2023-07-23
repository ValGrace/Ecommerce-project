import React from 'react'
import { Switch, Route} from 'react-router-dom'
import LoginPage from './Login'
import SignupPage from './Signup'
import ConfirmPassWord from './ChangePass'
import MyDashBoard from './Dashboard'
// import MyNavbar from './navbar'
import MyStore from '../StoreComponents/images/StorePages/StoreContainer'
import { AuthProvider } from '../Context/AuthContext'
import AllProductsPage from './AllProducts';
import Airtime from './Buy Airtime'
import Orders from "../Pages/Orders";
import Inventory from "../Pages/Inventory";
import Customers from "../Pages/Customers";
import AdminHome from "../Pages/AdminHome";
// import PrivateRoute from '../Context/PrivateRoute'

import CheckoutPage from "./Checkout"

const EntryPage = () => {
    
    return (
        
        <div className="landing-page">
            <AuthProvider>
           <Switch>
                
                   <Route path="/admin" component={AdminHome} />
                   <Route path="/inventory" component={Inventory} />
                   <Route path="/customers" component={Customers} />
                   <Route path="/orders" component={Orders} /> 
                </Switch>
                </AuthProvider>
            <AuthProvider>
                <Switch>
            <Route path="/login" component={LoginPage} />  
               <Route exact path="/" component={SignupPage} />
               <Route path="/changepasscode" component={ConfirmPassWord} />
               {/* <div className="page-content"> */}
                    
                    
                   
               </Switch>
            </AuthProvider>
             <AuthProvider>
            <Switch>
                <Route path="/dash" component={MyDashBoard} />
                <Route path="/mystore" component={MyStore} />
                
                 {/* <Route path="/product" component={MakePurchase} /> */}
                 <Route exact path="/prod" component={AllProductsPage} />  
                 <Route path="/airtime" component={Airtime} />
                 <Route exact path="/checkout" component={CheckoutPage} />
               
            </Switch>
            </AuthProvider>
       
        </div>
        
    )
}

export default EntryPage