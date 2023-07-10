import { Switch, Route} from "react-router-dom"
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