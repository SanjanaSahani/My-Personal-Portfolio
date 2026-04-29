'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, } from "./ui/navbar-menu";
import { cn } from "@/components/utils/cn"
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                </Link>

                <Link href={"/servic"}>
                    <MenuItem setActive={setActive} active={active} item="Services"></MenuItem>
                </Link>

                <Link href={"/about"}>
                    <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
                </Link>

                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Skills"></MenuItem>
                </Link>

                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
                </Link>

                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
                </Link>

            </Menu>
        </div>
    )
}

export default Navbar