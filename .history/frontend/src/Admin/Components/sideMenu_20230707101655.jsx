import { Menu} from "antd"
import { ShopOutlined, AppstoreOutlined, UserOutlined, ShoppingCartOutlined} from "@ant-design/icons"
import { useLocation} from "react-router-dom"
import {createBrowserHistory} from 'history'
import { useEffect, useState } from "react"

function SideMenu() {
    const navigate = createBrowserHistory()
    const location = useLocation()
    const [selectedKeys, setSelectedKeys] = useState()
    useEffect(()=> {
        const pathname = location.pathname
        setSelectedKeys(pathname)
    }, [location.pathname])
    return (
        <div className="SideMenu">
            <Menu className="side-menu-vertical" mode="vertical" onClick={(item) => {
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