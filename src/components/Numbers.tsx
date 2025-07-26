"use client";
import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Award, BookOpen, TrendingUp, Users } from "lucide-react";
const numbers = [
    {
        icon: <BookOpen className="h-8 w-8" />,
        label: "Curated Resources",
        value: 15847,
        suffix: "+",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: <Users className="h-8 w-8" />,
        label: "Active Contributors",
        value: 2156,
        suffix: "+",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: <Award className="h-8 w-8" />,
        label: "Career Paths",
        value: 12,
        suffix: "",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: <TrendingUp className="h-8 w-8" />,
        label: "Resources Added This Month",
        value: 847,
        suffix: "+",
        color: "from-orange-500 to-red-500",
    },
];

const Numbers = () => {
    return (
        <>
            {numbers.map((item) => (
                <Card className="shadow-md" key={item.label}>
                    <CardHeader>
                        <div
                            className={`flex justify-center items-center bg-gradient-to-b w-fit m-auto text-white p-4 rounded-full ${item.color}`}
                        >
                            {item.icon}
                        </div>
                        <CardTitle className="text-3xl my-2  text-foreground font-bold">
                            {item.suffix + " " + item.value}
                        </CardTitle>
                        <CardFooter className="flex items-center justify-center">
                            {item.label}
                        </CardFooter>
                    </CardHeader>
                </Card>
            ))}
        </>
    );
};

export default Numbers;
