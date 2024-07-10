import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";

export const Profile = () => {
    return (
        <Button className="h-auto rounded-full bg-black hover:bg-zinc-900 sm:pl-12">
            <div className="md:flex md:flex-row md:space-x-4 md:items-center">
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-lg font-semibold lg:block hidden">
                        Aryan Singh
                    </span>
                    <p className="text-zinc-500 lg:block hidden">@wtfdevil</p>
                </div>
            </div>
        </Button>
    );
};
