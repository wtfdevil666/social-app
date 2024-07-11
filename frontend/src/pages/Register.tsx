import { Link } from "react-router-dom";
import { RegisterForm } from "../components/auth/register-form";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { BsTwitterX } from "react-icons/bs";

const Register = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <Card className="space-y-4 w-[380px] rounded-2xl bg-black text-white border-zinc-800">
                    <CardHeader className="items-center">
                        <CardTitle>
                            <BsTwitterX className="w-[30px] h-[30px]" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RegisterForm />
                    </CardContent>
                    <CardFooter className="flex-col items-center">
                        <Link
                            to={"/login"}
                            className="text-base underline underline-offset-2"
                        >
                            Already Have An Account?
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Register;
