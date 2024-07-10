import { useForm } from "react-hook-form";
import z from "zod";
import { loginSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const LoginForm = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        console.log(values);
    };
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
                            <Input
                                {...field}
                                type="text"
                                placeholder="johndoe@example.com"
                            />
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                type="password"
                                placeholder="*****"
                            />
                        )}
                    />
                    <Button>Login</Button>
                </form>
            </Form>
        </div>
    );
};
