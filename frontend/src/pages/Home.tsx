import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "../components/home/Main/main";
import { RightSideBar } from "../components/home/Sidebar-right/rightsidebar";

export const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/login");
            console.log("not auth");
        }
    }, []);

    return (
        <div className="grid md:grid-cols-4">
            <div className="md:col-span-3 col-span-4">
                <Main />
            </div>
            <div className="md:block hidden">
                <RightSideBar />
            </div>
        </div>
    );
};
