import {
    Search,
    Shield,
    Users,
    Filter,
    TrendingUp,
    BookOpen,
} from "lucide-react";
import { HoverEffect } from "./ui/card-hover-effect";

const features = [
    {
        icon: <Users className="h-6 w-6" />,
        title: "Community Driven",
        description:
            "Built by the community, for the community. Submit and discover resources curated by fellow developers.",
        color: "from-purple-500 to-purple-600",
        bg: "bg-purple-500/10",
    },
    {
        icon: <Shield className="h-6 w-6" />,
        title: "Quality Assurance",
        description:
            "Every resource is reviewed and approved by our admin team to ensure quality and relevance.",
        color: "from-green-500 to-green-600",
        bg: "bg-green-500/10",
    },
    {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Real-time Stats",
        description:
            "Track platform growth with live statistics on resources, contributors, and trending content.",
        color: "from-teal-500 to-teal-600",
        bg: "bg-teal-500/10",
    },
    {
        icon: <Search className="h-6 w-6" />,
        title: "Advanced Filtering",
        description:
            "Filter by career path, resource type, difficulty level, and tags to find exactly what you need.",
        color: "from-blue-500 to-blue-600",
        bg: "bg-blue-500/10",
    },
    {
        icon: <Filter className="h-6 w-6" />,
        title: "Smart Categories",
        description:
            "Organized by career paths including Frontend, Backend, DevOps, AI/ML, Cybersecurity, and more.",
        color: "from-orange-500 to-orange-600",
        bg: "bg-orange-500/10",
    },
    {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Structured Learning",
        description:
            "Resources organized for progressive learning from beginner to advanced levels.",
        color: "from-indigo-500 to-indigo-600",
        bg: "bg-indigo-500/10",
    },
];

const Features = () => {
    return <HoverEffect items={features} />;
};

export default Features;
