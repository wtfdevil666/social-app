import { Link } from "react-router-dom";
import { RegisterForm } from "../components/auth/register-form";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";

export const Register = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader className="items-center">
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <Link
                        to={"/login"}
                        className="text-sm hover:underline hover:underline-offset-2"
                    >
                        Already Have An Account ?
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};
