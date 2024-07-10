import { useForm } from "react-hook-form";
import z from "zod";
import { loginSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../../lib/verifyToken";

export const LoginForm = () => {
    const URL = import.meta.env.VITE_BACKENDURL;
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        await axios
            .post(`${URL}/user/login`, {
                email: values.email,
                password: values.password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate("/");
            });
    };

    verifyToken();

    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="bg-zinc-800 border-zinc-800 rounded-xl text-white"
                                        placeholder="johndoe@example.com"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-zinc-800 border-zinc-800 rounded-xl text-white"
                                        {...field}
                                        type="password"
                                        placeholder="*****"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="pt-4">
                        <Button className="bg-sky-500 hover:bg-sky-800 w-full rounded-full">
                            Login
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
