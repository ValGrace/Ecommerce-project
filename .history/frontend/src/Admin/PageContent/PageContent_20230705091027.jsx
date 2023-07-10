import Routes from "../Routes/AdminRoutes";
import SideMenu from "../Components/sideMenu";
import AdminHeader from "../Components/adminHeader"; 
import MyFooterNav from "../../components/footerNavbar";
function PageContent() {
    return (
        <div className="page-content">
            <AdminHeader /> 
            <Space className="side-content">
             <SideMenu></SideMenu>
            <Routes />
            </Space>
            <MyFooterNav />
        </div>
    )
}

export default PageContent