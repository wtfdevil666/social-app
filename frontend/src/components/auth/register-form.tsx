import { useForm } from "react-hook-form";
import { registerSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import z from "zod";
import axios from "axios";

export const RegisterForm = () => {
    const URL = import.meta.env.VITE_BACKENDURL;
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
        },
    });
    const onSubmit = async (values: z.infer<typeof registerSchema>) => {
        await axios
            .post(`${URL}/user/login`, {
                name: values.name,
                username: values.username,
                email: values.email,
                password: values.password,
            })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
            });
    };
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        className="rounded-xl bg-zinc-800 border-zinc-800 text-white"
                                        {...field}
                                        type="text"
                                        placeholder="johndoe"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="username"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        className="rounded-xl bg-zinc-800 border-zinc-800 text-white"
                                        {...field}
                                        type="text"
                                        placeholder="johndoe121"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className="rounded-xl bg-zinc-800 border-zinc-800 text-white"
                                        {...field}
                                        type="text"
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
                            Register
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
