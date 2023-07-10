import { Typography, Space} from "antd"
import AdminHeader from "../Components/AdminHeader"
import SideMenu from "../Components/SideMenu"


function Customers() {
    return (
        <div className="app">
        <AdminHeader />
        <div className="sidemenu-content">
            <SideMenu></SideMenu>
    <Space size={20} direction="vertical">
        <Typography.Title level={4}>Customers</Typography.Title>
    </Space>
    </div>
    </div>
    )
}

export default Customers