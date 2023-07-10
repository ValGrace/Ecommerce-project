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
// import PrivateRoute from '../Context/PrivateRoute'
import PageContent from '../Admin/PageContent'
import { Space} from "antd"
import SideMenu from '../Admin/Components/SideMenu'
import AdminHeader from '../Admin/Components/AdminHeader'
const EntryPage = () => {
    
    return (
        
        <div className="landing-page">
           <AuthProvider>
                <AdminHeader />     
                <Space className="side-content">
                    <SideMenu></SideMenu>
                    <PageContent />
                    </Space>
                
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