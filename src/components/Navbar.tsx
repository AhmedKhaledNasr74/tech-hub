"use client";
import { Menu } from "lucide-react";

import logoPath from "../../public/vercel.svg";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ModeToggle } from "./ui/Theme-toggler";
import { motion } from "motion/react";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface NavbarProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
    auth?: {
        login: {
            title: string;
            url: string;
        };
        signup: {
            title: string;
            url: string;
        };
    };
}

const Navbar = ({
    logo = {
        url: "",
        src: logoPath,
        alt: "logo",
        title: "Tech Hub",
    },
    menu = [
        { title: "Home", url: "#" },
        {
            title: "Archive",
            url: "#",
        },
    ],
    auth = {
        login: { title: "Login", url: "#" },
        signup: { title: "Sign up", url: "#" },
    },
}: NavbarProps) => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            className="fixed top-0 left-0 w-full z-50 bg-transparent"
        >
            <section className="lg:flex hidden dark:bg-[#013F48]/40 backdrop-blur-sm  px-2 py-3 pr-4 mx-44 my-5 shadow-md dark:shadow-[#08deff] rounded-full items-center justify-between border border-gray-200/50 dark:border-[#013f48]/50 ">
                <div className="container">
                    {/* Desktop Menu */}
                    <nav className="hidden justify-between md:flex items-center">
                        <div className="flex items-center gap-6">
                            {/* Logo */}
                            <div className="flex items-center justify-center pl-2">
                                <Image
                                    src="/vercel.svg"
                                    width={32}
                                    height={32}
                                    alt={logo.alt}
                                    className="max-h-8"
                                />
                            </div>
                            <span className="ml-2 text-xl font-bold tracking-tight ">
                                {logo.title}
                            </span>

                            <div className="flex items-center">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        {menu.map((item) =>
                                            renderMenuItem(item)
                                        )}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <ModeToggle />

                            {/* Auth Buttons */}
                            <Button
                                asChild
                                variant="outline"
                                className="!rounded-full"
                            >
                                <a href={auth.login.url}>{auth.login.title}</a>
                            </Button>
                            <Button asChild className="!rounded-full">
                                <a href={auth.signup.url}>
                                    {auth.signup.title}
                                </a>
                            </Button>
                        </div>
                    </nav>
                </div>
            </section>
            {/* Mobile Menu */}
            <div className="block lg:hidden ">
                <div className="fixed top-4 right-4 z-50 flex gap-4 items-center">
                    <ModeToggle />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full"
                            >
                                <Menu className="size-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="overflow-y-auto dark:!bg-black">
                            <SheetHeader>
                                <SheetTitle>
                                    <Image
                                        src="/vercel.svg"
                                        width={32}
                                        height={32}
                                        alt={logo.alt}
                                        className="max-h-8"
                                    />
                                </SheetTitle>
                            </SheetHeader>
                            <NavigationMenu className="!min-w-full">
                                <NavigationMenuList className="flex flex-col items-center w-full gap-2">
                                    {menu.map((item) => (
                                        <NavigationMenuItem
                                            key={item.title}
                                            className="w-full "
                                        >
                                            <NavigationMenuLink
                                                href={item.url}
                                                className=" flex h-10 items-center justify-center w-full rounded-md bg-background dark:!bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-accent dark:hover:!bg-accent hover:text-accent-foreground"
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                            <div className="flex flex-col gap-6 p-4">
                                <div className="flex flex-col gap-3">
                                    <Button asChild variant="outline">
                                        <a href={auth.login.url}>
                                            {auth.login.title}
                                        </a>
                                    </Button>
                                    <Button asChild>
                                        <a href={auth.signup.url}>
                                            {auth.signup.title}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

const renderMenuItem = (item: MenuItem) => {
    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className=" inline-flex h-10 w-max items-center justify-center rounded-full bg-background dark:bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted dark:hover:bg-muted hover:text-accent-foreground"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};
