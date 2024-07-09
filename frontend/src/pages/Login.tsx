import { Link } from "react-router-dom";
import { LoginForm } from "../components/auth/login-form";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

export const Login = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <Card className="w-[300px] sm:w-[400px] bg-black text-white border-zinc-700">
                <CardHeader className="items-center">
                    <CardTitle>
                        <TwitterLogoIcon className="w-[40px] h-[40px]" />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <Link
                        to={"/register"}
                        className="text-sm hover:underline hover:underline-offset-2"
                    >
                        Don't Have An Account ?
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};
