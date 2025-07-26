import React from "react";
import { Upload, Search, CheckCircle, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const steps = [
    {
        icon: <Upload className="h-8 w-8" />,
        title: "Submit Resources",
        description:
            "Community members submit valuable tech resources including tutorials, courses, tools, and articles.",
        color: "from-blue-500 to-cyan-500",
        step: "01",
    },
    {
        icon: <Search className="h-8 w-8" />,
        title: "Admin Review",
        description:
            "Our expert admin team carefully reviews each submission for quality, relevance, and accuracy.",
        color: "from-green-500 to-emerald-500",
        step: "02",
    },
    {
        icon: <CheckCircle className="h-8 w-8" />,
        title: "Quality Approval",
        description:
            "Approved resources are categorized and tagged, making them easily discoverable by the community.",
        color: "from-purple-500 to-pink-500",
        step: "03",
    },
    {
        icon: <Users className="h-8 w-8" />,
        title: "Community Access",
        description:
            "Everyone benefits from curated, high-quality resources organized by career path and difficulty level.",
        color: "from-orange-500 to-red-500",
        step: "04",
    },
];
const HowItWorks = () => {
    return (
        <>
            {steps.map((step, index) => (
                <div className="relative" key={step.title}>
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-foreground/10 to-muted z-0  " />
                    )}

                    <Card className="relative shadow-sm z-10 h-full hover:shadow-lg transition-all duration-300  bg-card/50 backdrop-blur-sm inset-shadow-2xs border">
                        <CardHeader className="text-center">
                            <div className="relative mx-auto mb-4">
                                <div
                                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-4 text-white`}
                                >
                                    {step.icon}
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                                    {step.step}
                                </div>
                            </div>
                            <CardTitle className="text-xl font-semibold">
                                {step.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </>
    );
};

export default HowItWorks;
