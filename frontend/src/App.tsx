import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return <div className="h-full bg-black">{children}</div>;
}

export default App;
