"use client"

import { FiMenu, FiX } from "react-icons/fi";
import AccountToggle from "./AccountToggle";
import NavItems from "./NavItems";
import Plan from "./Plan";
import Search from "./Search";
import { useState } from "react";

export default function Sidebar(){
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return(
        <>
            <button 
                className="md:hidden fixed top-4 right-4 ml-auto p-2 z-10 bg-stone-800 rounded-full"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
                {isOpenMenu ? <FiX className="size-6 text-white" /> : <FiMenu className="size-6 text-white" />}
            </button>
            <div className={`fixed md:sticky bg-stone-100 z-10 h-full top-0 md:top-4
                ${isOpenMenu ? "left-0" : "-left-full"} transition-all`}>
                <div className="overflow-y-auto md:sticky top-0 md:top-4 h-[calc(100vh-32px-48px)]">
                    <AccountToggle />
                    <Search />
                    <NavItems />
                </div>
                <Plan />
            </div>
        </>
    )
}