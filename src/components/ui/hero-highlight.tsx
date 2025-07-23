"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React from "react";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    // SVG patterns for different states and themes
    const dotPatterns = {
        light: {
            default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
            hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%2304B2BC' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
        },
        dark: {
            default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
            hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%2304B2BC' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
        },
    };

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <div
            className={cn(
                "group/hero relative flex overflow-y-hidden h-screen w-full items-center justify-center ",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Add the bottom gradient */}
            <motion.div
                className="absolute inset-x-0 bottom-0 z-10"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    delay: 0.2,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
            >
                <div
                    className="h-screen"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 200%, #027d84ff 25%, transparent 67.05%)",
                    }}
                />
            </motion.div>

            {/* Dot patterns with fade-in animation */}
            <motion.div
                className="pointer-events-none absolute inset-0 dark:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                style={{
                    backgroundImage: dotPatterns.light.default,
                    WebkitMaskImage:
                        "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent 100%)",
                    maskImage:
                        "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent 100%)",
                }}
            />
            <motion.div
                className="pointer-events-none absolute inset-0 hidden dark:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                style={{
                    backgroundImage: dotPatterns.dark.default,
                    WebkitMaskImage:
                        "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent 100%)",
                    maskImage:
                        "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent 100%)",
                }}
            />
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover/hero:opacity-100 dark:hidden"
                style={{
                    backgroundImage: dotPatterns.light.hover,
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />
            <motion.div
                className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover/hero:opacity-100 dark:block"
                style={{
                    backgroundImage: dotPatterns.dark.hover,
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />

            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block rounded-lg bg-gradient-to-r  from-[#027d84] to-[#04b6c0] px-1 pb-1 `,
                className
            )}
        >
            {children}
        </motion.span>
    );
};
