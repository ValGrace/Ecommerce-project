import Orders from "../Pages/Orders";
import Inventory from "../Pages/Inventory";
import Customers from "../Pages/Customers";
import AdminHome from "../Pages/AdminHome";
import { Switch} from "react-router"
function ProjectRoutes() {
    return (
        <div>
            <Switch>
               <Route path="/admin" component={AdminHome} />
               <Route path="/inventory" component={Inventory} />
               <Route path="/customers" component={Customers} />
               <Route path="/orders" component={Orders} /> 
            </Switch>
        </div>
    )
}

export default ProjectRoutes