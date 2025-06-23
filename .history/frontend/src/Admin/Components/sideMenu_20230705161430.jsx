import { Menu} from "antd"
import { ShopOutlined, AppstoreOutlined, UserOutlined, ShoppingCartOutlined} from "@ant-design/icons"
import { useLocation, useHistory} from "react-router"
import { useEffect, useState } from "react"

function SideMenu() {
    const navigate = useHistory()
    const location = useLocation()
    const [selectedKeys, setSelectedKeys] = useState()
    useEffect(()=> {
        const pathname = location.pathname
        setSelectedKeys(pathname)
    }, [location.pathname])
    return (
        <div>
            <Menu onClick={(item) => {
                navigate.push(item.key)
            }}
            selectedKeys={[selectedKeys]}
             items={[
                {
                    label: "Dashboard",
                    icon: <AppstoreOutlined />,
                    key: "/admin"
                },
                {
                    label: "Inventory",
                    icon: <ShopOutlined />,
                    key: "/inventory"
                },
                {
                    label: "Orders",
                    icon: <ShoppingCartOutlined />,
                    key: "/orders"
                },
                {
                    label: "Customers",
                    icon: <UserOutlined />,
                    key: "/customers"
                }
            ]}>

            </Menu>
        </div>
    )
}

export default SideMenu