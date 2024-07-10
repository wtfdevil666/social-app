import { verifyToken } from "../lib/verifyToken";

const Home = () => {
    verifyToken();
    return <div className="text-white">Home</div>;
};

export default Home;
