import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { PiDotsThreeCircle } from "react-icons/pi";
import { Button } from "../../ui/button";

export const LeftSideBar = () => {
    return (
        <div className="flex sm:flex-col md:items-start space-y-4 h-auto w-full pt-16 pl-32">
            <div className="hidden md:block">
                <Button className="bg-black hover:bg-black rounded-full">
                    <TwitterLogoIcon className="w-[40px] h-[40px]" />
                </Button>
            </div>
            <div>
                <Button className="bg-black h-auto hover:bg-zinc-900 rounded-full gap-x-2">
                    <GoHomeFill className="w-[30px] h-[30px]" />
                    <p className="text-lg font-semibold md:block hidden">
                        Home
                    </p>
                </Button>
            </div>
            <div>
                <Button className="bg-black h-auto hover:bg-zinc-900 rounded-full gap-x-2">
                    <IoSearch className="w-[30px] h-[30px]" />
                    <p className="text-lg font-semibold md:block hidden">
                        Explore
                    </p>
                </Button>
            </div>
            <div>
                <Button className="bg-black h-auto hover:bg-zinc-900 rounded-full gap-x-2">
                    <LuBell className="w-[30px] h-[30px]" />
                    <p className="text-lg font-semibold md:block hidden">
                        Notification
                    </p>
                </Button>
            </div>
            <div>
                <Button className="bg-black h-auto hover:bg-zinc-900 rounded-full gap-x-2">
                    <RxAvatar className="w-[30px] h-[30px]" />
                    <p className="text-lg font-semibold md:block hidden">
                        Profile
                    </p>
                </Button>
            </div>
            <div>
                <Button className="bg-black h-auto hover:bg-zinc-900 rounded-full gap-x-2">
                    <PiDotsThreeCircle className="w-[30px] h-[30px]" />
                    <p className="text-lg font-semibold md:block hidden">
                        More
                    </p>
                </Button>
            </div>
        </div>
    );
};
