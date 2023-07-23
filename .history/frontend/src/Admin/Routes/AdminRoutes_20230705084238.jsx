import { Switch, Route} from "react-router-dom"
import Orders from '../Admin/Pages/Orders'
import Customers from '../Admin/Pages/Customers'
import Inventory from '../Admin/Pages/Inventory'
import AdminHome from '../Admin/Pages/AdminHome'
import { AuthProvider } from "../../Context/AuthContext"
function Routes() {
    return (
        <AuthProvider>
                <Switch>
                    <Route path="/admin" component={AdminHome}/>
                    <Route path="/inventory" component={Inventory} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/customers" component={Customers} /> 
                </Switch>
              </AuthProvider>
    )
} 

export default Routes