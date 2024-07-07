import { Outlet } from "react-router-dom";
import TopNav from "../Components/TopNav";
import SideNav from "../Components/SideNav";

const Layout = () => {
    return (
        <div className="d-flex">

            <SideNav />

            <div className="w-100">
                <TopNav />

                <div className="p-3">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default Layout;