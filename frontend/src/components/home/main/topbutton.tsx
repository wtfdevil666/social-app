import { useState } from "react";
import { Button } from "../../ui/button";

export const Topbutton = () => {
    const [active, setActive] = useState("foryou");
    return (
        <div className="grid grid-cols-2 border-b border-zinc-800">
            <Button
                onClick={() => {
                    setActive("foryou");
                }}
                className={`h-auto md:text-base bg-black hover:bg-zinc-900 rounded-none lg:py-4 ${
                    active === "foryou" && "border-b border-sky-500"
                }`}
            >
                For you
            </Button>
            <Button
                onClick={() => {
                    setActive("following");
                }}
                className={`h-auto md:text-base bg-black hover:bg-zinc-900 rounded-none lg:py-4 ${
                    active === "following" && "border-b border-sky-500"
                }`}
            >
                Following
            </Button>
        </div>
    );
};
