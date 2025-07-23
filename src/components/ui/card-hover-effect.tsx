import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./card";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        icon: any;
        bg: string;
        color: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    let [overlayStyle, setOverlayStyle] = useState<{
        top: number;
        left: number;
        width: number;
        height: number;
    } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseEnter = (idx: number) => {
        setHoveredIndex(idx);
        if (itemRefs.current[idx] && containerRef.current) {
            const itemRect = itemRefs.current[idx]!.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            setOverlayStyle({
                top: itemRect.top - containerRect.top,
                left: itemRect.left - containerRect.left,
                width: itemRect.width,
                height: itemRect.height,
            });
        }
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setOverlayStyle(null);
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-3 items-stretch",
                className
            )}
            style={{ position: "relative" }}
        >
            {/* Animated overlay */}
            <AnimatePresence>
                {hoveredIndex !== null && overlayStyle && (
                    <motion.span
                        key="hover-overlay"
                        className="absolute bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-2xl pointer-events-none"
                        style={{
                            top: overlayStyle.top,
                            left: overlayStyle.left,
                            width: overlayStyle.width,
                            height: overlayStyle.height,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            top: overlayStyle.top,
                            left: overlayStyle.left,
                            width: overlayStyle.width,
                            height: overlayStyle.height,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.7,
                            type: "spring",
                            bounce: 0.2,
                        }}
                    />
                )}
            </AnimatePresence>
            {items.map((item, idx) => (
                <motion.div
                    key={item?.title + idx}
                    ref={(el) => {
                        itemRefs.current[idx] = el;
                    }}
                    className="relative block p-2 h-full w-full"
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                >
                    <div className="relative z-10 h-full w-full">
                        <Card className="h-full w-full  backdrop-blur-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden">
                            <div className={`absolute inset-0`} />
                            <CardHeader className="relative z-10">
                                <div
                                    className={`w-12 h-12 rounded-lg mb-4 flex items-center text-white justify-center bg-gradient-to-r ${item.color}`}
                                >
                                    {item.icon}
                                </div>
                                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <CardDescription className="text-gray-700 dark:text-gray-300">
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
