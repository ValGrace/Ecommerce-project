import { Image, Typography, Space, Badge} from "antd"
import { MailOutlined, BellFilled} from "@ant-design/icons"

function AdminHeader() {
    return (
        <div className="adminHeader">
            <Image width={40} src=""></Image>
            <Typography.Title>Anypay Admin</Typography.Title>
            <Space>
                <Badge count={5} dot>
                    <MailOutlined />
                </Badge>
                <Badge count={25}>
                    <BellFilled />
                </Badge>
            </Space>
        </div>
    )
}

export default AdminHeader