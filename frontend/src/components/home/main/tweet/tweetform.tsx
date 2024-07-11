import z from "zod";
import { tweetSchema } from "../../../../lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField } from "../../../ui/form";
import { Textarea } from "../../../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Button } from "../../../ui/button";
import { useState } from "react";

export const TweetForm = () => {
    const [charCount, setCharCount] = useState(0);
    const form = useForm<z.infer<typeof tweetSchema>>({
        resolver: zodResolver(tweetSchema),
        defaultValues: {
            content: "",
        },
    });
    const onSubmit = (values: z.infer<typeof tweetSchema>) => {
        console.log(values);
    };
    return (
        <div className="flex flex-row space-x-2">
            <div className="p-3">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="w-full p-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            name="content"
                            control={form.control}
                            render={({ field }) => (
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="What's Happening?!"
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setCharCount(
                                                e.currentTarget.value.length
                                            );
                                        }}
                                        className="bg-black border-none resize-none rounded-none focus-visible:ring-offset-0 text-base h-[150px]"
                                    />
                                </FormControl>
                            )}
                        />
                    </form>

                    <div className="mt-4 items-end flex flex-col mr-4">
                        <div className="flex flex-row space-x-4 items-center">
                            <div
                                className={`text-right text-gray-400 ${
                                    charCount > 120 && "text-red-500"
                                }`}
                            >
                                {charCount}/120
                            </div>
                            <Button className="bg-sky-500 rounded-full">
                                Posts
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};
