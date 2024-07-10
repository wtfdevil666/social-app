import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { Button } from "../../ui/button";
import { IoSearchSharp } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { PiDotsThreeCircle } from "react-icons/pi";

export const LeftSideBar = () => {
    return (
        <div className="flex flex-row space-x-2 md:space-x-0 md:space-y-5 md:flex-col items-center md:items-start justify-center md:pl-8">
            <div className="hidden md:block">
                <Button className="bg-black hover:bg-black rounded-full h-auto">
                    <BsTwitterX className="w-[35px] h-[35px]" />
                </Button>
            </div>
            <div>
                <Button className="bg-black space-x-2 hover:bg-zinc-900 rounded-full h-auto">
                    <GoHomeFill className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]" />
                    <p className="hidden lg:block font-semibold text-lg">
                        Home
                    </p>
                </Button>
            </div>
            <div>
                <Button className="bg-black space-x-2 hover:bg-zinc-900 rounded-full h-auto">
                    <IoSearchSharp className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]" />
                    <p className="hidden lg:block font-semibold text-lg">
                        Explore
                    </p>
                </Button>
            </div>
            <div>
                <Button className="bg-black space-x-2 hover:bg-zinc-900 rounded-full h-auto">
                    <LuBell className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]" />
                    <p className="hidden lg:block font-semibold text-lg">
                        Notification
                    </p>
                </Button>
            </div>
            <div>
                <Button className="bg-black space-x-2 hover:bg-zinc-900 rounded-full h-auto">
                    <RxAvatar className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]" />
                    <p className="hidden lg:block font-semibold text-lg">
                        Profile
                    </p>
                </Button>
            </div>
            <div>
                <Button className="bg-black space-x-2 hover:bg-zinc-900 rounded-full h-auto">
                    <PiDotsThreeCircle className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] " />
                    <p className="hidden lg:block font-semibold text-lg">
                        More
                    </p>
                </Button>
            </div>
        </div>
    );
};
