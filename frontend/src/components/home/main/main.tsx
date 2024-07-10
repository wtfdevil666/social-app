import { LeftSideBar } from "./leftsidebar";
import { Profile } from "./profileavatar";

export const Main = () => {
    return (
        <div className="md:col-span-3 grid grid-rows-1 md:grid-cols-3">
            <div className=" order-2 md:order-1 h-auto xl:pl-32 md:pt-16 md:border-r md:border-zinc-800 md:space-y-44 sm:pr-48 md:pr-48 col-span-2 sm:col-span-1">
                <LeftSideBar />
                <div className="md:block hidden">
                    <Profile />
                </div>
            </div>
            <div className="md:order-2 col-span-2 md:border-r md:border-zinc-800">
                Main
            </div>
        </div>
    );
};
