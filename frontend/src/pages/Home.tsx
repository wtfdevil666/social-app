import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/login");
            console.log("not auth");
        }
    }, []);

    return <div>Home</div>;
};
