import { useEffect, useState } from "react";
import { LeftSideBar } from "./leftsidebar";
import { Profile } from "./profileavatar";
import { Topbutton } from "./topbutton";
import { TweetForm } from "./tweet/tweetform";
import { Tweets } from "./tweet/tweets";
import axios from "axios";

interface Tweet {
    id: string;
    content: string;
    userId: string;
    user: {
        id: string;
        name: string;
        username: string;
    };
}
export const Main = () => {
    const URL = import.meta.env.VITE_BACKENDURL;

    const [tweets, setTweets] = useState<Tweet[]>([]);
    async function getTweets() {
        try {
            const response = await axios.get(`${URL}/tweet/get`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            console.log(response.data);
            return response.data.tweets || [];
        } catch (error) {}
    }

    useEffect(() => {
        async function fetchTweets() {
            const fetchedTweets = await getTweets();
            setTweets(fetchedTweets);
        }

        fetchTweets();
    }, []);

    return (
        <div className="md:col-span-3 grid grid-rows-1 md:grid-cols-3 md:border-r md:border-zinc-800">
            <div className="order-2 md:order-1  h-auto xl:pl-32 md:pt-16 md:border-r md:border-zinc-800 md:space-y-44 sm:pr-48 md:pr-48 col-span-2 sm:col-span-1">
                <LeftSideBar />
                <div className="md:block hidden">
                    <Profile />
                </div>
            </div>
            <div className="md:order-2 col-span-2">
                <Topbutton />
                <TweetForm />
                {tweets.map((tweet) => (
                    <Tweets
                        key={tweet.id}
                        name={tweet.user.name}
                        username={tweet.user.username}
                        content={tweet.content}
                    />
                ))}
            </div>
        </div>
    );
};
