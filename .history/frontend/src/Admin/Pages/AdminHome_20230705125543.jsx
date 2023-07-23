import { Typography, Space, Card, Statistic} from "antd"
import { ShoppingCartOutlined, DollarCircleOutlined, UserOutlined, ShoppingOutlined} from "@ant-design/icons"
function AdminHome() {
    return (
       <Space size={20} direction="vertical">
          <Typography.Title>Dashboard</Typography.Title>
          <Space direction="horizontal">
            <DashboardCard icon={<ShoppingCartOutlined 
              style={{
               color: "green",
               backgroundColor: "rgba(0,255, 0, 0.25)",
               borderRadius: "8px",
               padding: "4px"

              }}
            />} title={"Orders"} value={""} />
            <DashboardCard icon={<DollarCircleOutlined 
              style={{
               color: "green",
               backgroundColor: "rgba(0,255, 0, 0.25)",
               borderRadius: "8px",
               padding: "4px"

              }}
            />} title={"Orders"} value={""} />
            <DashboardCard icon={<UserOutlined
              style={{
               color: "green",
               backgroundColor: "rgba(0,255, 0, 0.25)",
               borderRadius: "8px",
               padding: "4px"

              }}
            />} title={"Orders"} value={""} />
            <DashboardCard icon={<ShoppingOutlined
              style={{
               color: "green",
               backgroundColor: "rgba(0,255, 0, 0.25)",
               borderRadius: "8px",
               padding: "4px"

              }}
            />} title={"Orders"} value={""} />
          </Space>
       </Space>
    )
}

function DashboardCard({ icon, title, value}) {
   return (
      <Card>
          <Space direction="horizontal">
            {icon}
            <Statistic title={title} value={value} />
          </Space>
      </Card>
   )
}

export default AdminHome

