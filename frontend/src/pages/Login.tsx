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
            <Card className="space-y-4 w-[380px]">
                <CardHeader className="items-center">
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
