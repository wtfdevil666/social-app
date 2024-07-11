import z from "zod";
import { tweetSchema } from "../../../../lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField } from "../../../ui/form";
import { Textarea } from "../../../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Button } from "../../../ui/button";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";

export const TweetForm = () => {
    const URL = import.meta.env.VITE_BACKENDURL;
    const [charCount, setCharCount] = useState(0);
    const form = useForm<z.infer<typeof tweetSchema>>({
        resolver: zodResolver(tweetSchema),
        defaultValues: {
            content: "",
        },
    });
    const onSubmit = async (values: z.infer<typeof tweetSchema>) => {
        await axios.post(
            `${URL}/tweet/create`,
            {
                content: values.content,
            },
            {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            }
        );
        console.log(values);
    };
    const percentage = (charCount / 120) * 100;
    return (
        <div className="flex flex-row space-x-2 border-b border-zinc-800">
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
                        <div className="mt-4 items-end flex flex-col mr-4">
                            <div className="flex flex-row space-x-4 items-center">
                                <div>
                                    <CircularProgressbar
                                        value={percentage}
                                        maxValue={120}
                                        className="w-[32px] h-[32px]"
                                    />
                                </div>
                                <Button className="bg-sky-500 rounded-full">
                                    Post
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};
