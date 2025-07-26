import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import SectionWrapper from "@/components/SectionWrapper";

const sections = [
    {
        title: "Powerful Features",
        desc: "Everything you need to accelerate your developer journey",
        component: <Features />,
        className: " w-full",
    },

    {
        title: "Growing Every Day",
        desc: "Join thousands of developers who trust Tech Hub for their learning journey. Our community continues to grow and contribute quality resources daily.",
        component: <Numbers />,
        className:
            "text-center mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ",
    },

    {
        title: "How Tech Hub Works",
        desc: "Our simple yet effective process ensures that only the highest quality resources make it to our platform, creating a trusted learning environment for everyone.",
        component: <HowItWorks />,
        className:
            "text-center mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            {sections.map((section) => (
                <SectionWrapper
                    key={section.title}
                    title={section.title}
                    description={section.desc}
                    className={section.className}
                >
                    {section.component}
                </SectionWrapper>
            ))}
        </div>
    );
}
