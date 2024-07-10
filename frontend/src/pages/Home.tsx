import { Main } from "../components/home/main/main";
import { RightSidebar } from "../components/home/sidebar/rightsidebar";
import { verifyToken } from "../lib/verifyToken";

const Home = () => {
    verifyToken();
    return (
        <div className="text-white grid md:grid-cols-4 h-screen">
            <Main />
            <RightSidebar />
        </div>
    );
};

export default Home;
