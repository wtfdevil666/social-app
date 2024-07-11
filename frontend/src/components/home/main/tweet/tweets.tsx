import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";

interface TweetProps {
    name: string;
    content: string;
    username: string;
}

export const Tweets = ({ name, content, username }: TweetProps) => {
    return (
        <div className="flex flex-row space-x-2 space-y-4 border-b border-zinc-800 p-4">
            <div className="p-4">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="flex flex-row space-x-4 items-center">
                    <div className="text-base font-bold hover:underline hover:underline-offset-2">
                        {name}
                    </div>
                    <div className="text-sm">{`@${username}`}</div>
                </div>
                <div>{content}</div>
            </div>
        </div>
    );
};
