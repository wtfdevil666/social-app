import { jwtDecode } from "jwt-decode"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const verifyToken = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            navigate("/login");
            return;
        }
        const decoded = jwtDecode(token)
        if (!decoded.id) {
            console.log("Not Authorized");
            navigate("/login");
            return;
        }
        const time = new Date().getTime() / 1000
        if (!decoded.exp) {
            navigate("/login");
            return
        }
        if (time > decoded.exp) {
            navigate("/login")
            return
        }
        navigate("/")
    }, [])
}