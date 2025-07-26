"use client";
import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = "Made by the community, powered by knowledge";
const Hero = () => {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
            >
                Welcome to{" "}
                <Highlight className="text-black dark:text-white">
                    Tech Hub
                </Highlight>
            </motion.h1>

            <div className="max-w-2xl mx-auto mt-8">
                <TextGenerateEffect words={words} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mx-auto w-1/2"
            >
                <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-[#027d84] to-[#05b2bb] hover:from-[#026065] hover:to-[#059da5] "
                >
                    <Link href="/explore">
                        Explore Links
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="hover:bg-secondary"
                >
                    <Link href="/submit">Submit a Link</Link>
                </Button>
            </motion.div>
        </HeroHighlight>
    );
};

export default Hero;
