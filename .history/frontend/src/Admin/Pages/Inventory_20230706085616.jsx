import { Typography, Space} from "antd"
import SideMenu from "../Components/SideMenu"
import AdminHeader from "../Components/AdminHeader"
function Inventory() {
    return (
        <div className="app">
        <AdminHeader />
        <div className="sidemenu-content">
            <SideMenu></SideMenu>
    <Space size={20} direction="vertical">
        <Typography.Title level={4}>Inventory</Typography.Title>
    </Space>
    </div>
    </div>
    )
}

export default Inventory