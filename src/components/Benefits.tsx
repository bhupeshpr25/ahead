"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface Benefit {
  title: string;
  description: string;
}

const Benefits: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits: Benefit[] = [
    {
      title: "Power through, even when the going gets tough",
      description:
        "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
    },
    {
      title: "Learn more about who you are and where you want to ago",
      description:
        "We ask you the right questions to help you better understand why you do things the way you do",
    },
    {
      title: "Play and grow together with others on the same journey",
      description:
        "Ahead feels like a game, not a chore. See yourself grow every day towards achieving your goals!",
    },
    {
      title: "Get personalized insights tailored just for you",
      description:
        "Our algorithms analyze your answers to provide you with tailored insights and recommendations.",
    },
    {
      title: "Stay motivated with regular reminders and check-ins",
      description:
        "We send you friendly reminders and check-ins to keep you on track and motivated towards your goals.",
    },
  ];

  return (
    <div className=" bg-violet-100" ref={ref}>
      <h1
        className="hidden lg:block mb-16 text-5xl font-semibold text-violet-800 text-end"
        style={{
          transform: isInView ? "none" : "translateX(2400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        ahead
      </h1>
      <div className="max-h-[200px] lg:max-h-[600px] overflow-y-auto">
        <div className="grid grid-cols-1 gap-8 scrollbar">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 lg:p-10"
            >
              <h2 className="text-xl font-semibold">{benefit.title}</h2>
              <p className="mt-4 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
