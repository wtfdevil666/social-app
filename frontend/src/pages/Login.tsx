import { BsTwitterX } from "react-icons/bs";
import { LoginForm } from "../components/auth/login-form";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Card className="space-y-4 w-[380px] rounded-2xl bg-black text-white border-zinc-800">
                <CardHeader className="items-center">
                    <CardTitle>
                        <BsTwitterX className="w-[30px] h-[30px]" />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
