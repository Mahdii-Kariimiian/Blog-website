import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
        <div>
            <Topbar />
            <div className="home">
                <div className="outlet">
                    <Outlet />
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Home;
