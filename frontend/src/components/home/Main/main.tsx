import { LeftSideBar } from "../Sidebar-left/leftsidebar";

export const Main = () => {
    return (
        <div className="bg-black h-screen grid grid-cols-1 sm:grid-cols-8 md:grid-cols-3 w-auto">
            <div className="bg-black md:h-auto flex flex-row justify-center order-2 sm:order-1 sm:relative fixed bottom-0 left-0 right-0">
                <LeftSideBar />
            </div>
            <div className="bg-red-500 sm:col-span-7 md:col-span-2 md:h-screen order-1 sm:order-2">
                Main
            </div>
        </div>
    );
};
