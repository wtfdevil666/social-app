import { BsTwitterX } from "react-icons/bs";
import { LoginForm } from "../components/auth/login-form";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Link } from "react-router-dom";

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
                <CardFooter className="flex-col items-center">
                    <Link
                        to={"/register"}
                        className="text-base underline underline-offset-2"
                    >
                        Dont Have an Account?
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
