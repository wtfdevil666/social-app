import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";

export const RightSidebar = () => {
    const navigate = useNavigate();
    const onClick = () => {
        localStorage.removeItem("token");
        navigate("/register");
    };
    return (
        <div className="hidden md:block">
            <Button onClick={onClick}>Logout</Button>
        </div>
    );
};
