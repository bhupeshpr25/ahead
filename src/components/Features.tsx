"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface TimelineItem {
  title: string;
  description: string;
}

export default function Features() {
  const divRef = useRef(null);
  const imgRef = useRef(null);
  const isDivInView = useInView(divRef, { once: true });
  const isImgInView = useInView(imgRef, { once: true });

  const timelineItems: TimelineItem[] = [
    {
      title: "Its not as easy as 1-2-3",
      description:
        "The journey of change may be long, but our sessions are quick. We get to the point (and tell you what you want to know and nothing else)",
    },
    {
      title: "Old habits are hard to break",
      description:
        "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use. ",
    },
    {
      title: "You and your motivation dont have a long-term relationship.",
      description:
        "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals. ",
    },
    {
      title: "Habitual behavior is difficult to change",
      description:
        "Our tools and techniques are designed to break through the toughest of habits, allowing you to achieve your goals. ",
    },
    {
      title: "Stay motivated with regular reminders and check-ins",
      description:
        "We send you friendly reminders and check-ins to keep you on track and motivated towards your goals. ",
    },
  ];

  return (
    <div ref={divRef} className="my-20 lg:mt-40">
      {/* colored section */}
      <div className="bg-red-50 rounded-3xl m-8 mt-4">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-2 lg:py-32">
          <div
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
            style={{
              transform: isDivInView ? "none" : "translateX(-200px)",
              opacity: isDivInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <div className="flex">
              <div className="relative flex items-center gap-x-4 ml-1 rounded-full font-semibold text-gray-900">
                Built out of frustration
              </div>
            </div>
            <h1 className="mt-5 max-w-lg text-2xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Meet the ahead app
            </h1>
            <div className="mt-12">
              <Image
                src="/features.png"
                alt="Hero"
                width={1200}
                height={1200}
                style={{
                  transform: isDivInView ? "rotate(0deg)" : "rotate(360deg)",
                  opacity: isDivInView ? 1 : 0,
                  transition:
                    "transform  0.9s cubic-bezier(0.17,  0.55,  0.55,  1)  0.5s, opacity  0.9s cubic-bezier(0.17,  0.55,  0.55,  1)  0.5s",
                  animation: isDivInView ? "none" : "spin  1s linear infinite",
                }}
              />
            </div>
          </div>

          <div
            className="text-md mt-10 lg:text-2xl lg:mt-0 text-gray-700"
            style={{
              transform: isDivInView ? "none" : "scale(0.5)",
              opacity: isDivInView ? 1 : 0,
              transition:
                "transform  0.9s cubic-bezier(0.17,   0.55,   0.55,   1)   0.5s, opacity   0.9s cubic-bezier(0.17,   0.55,   0.55,   1)   0.5s",
            }}
          >
            <p>
              A personalized pocket coach that provides bite-sized,
              science-driven tools that boost emotional intelligence.
            </p>
            <br />
            <p>
              Think of it as a pocket cheerleader towards a better, more
              fulfilling living.
            </p>
          </div>
        </div>
      </div>

      {/* timeline header */}
      <section ref={divRef} className="container max-w-5xl px-4 py-12 mx-auto">
        <div
          className="my-10"
          style={{
            transform: isDivInView ? "none" : "translateX(-200px)",
            opacity: isDivInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
          }}
        >
          <div className="text-sm lg:text-xl font-semibold">
            Wrong with self-improvement & how we are fixing it
          </div>
          <div className="flex items-center justify-start">
            <motion.div
              ref={divRef}
              className="mt-4 text-3xl lg:text-5xl font-bold lg:mt-2"
              style={{
                transform: isDivInView ? "none" : "translateX(-200px)",
                opacity: isDivInView ? 1 : 0,
                transition:
                  "all  0.9s cubic-bezier(0.17,  0.55,  0.55,  1)  0.5s",
              }}
            >
              Self-improvement. Ugh.
            </motion.div>

            <motion.img
              ref={imgRef}
              src="/blue.png"
              alt=""
              width={100}
              height={100}
              className="ml-4"
              style={{
                right: 0,
                top: "50%",
                transform: isImgInView ? "translateX(0)" : "translateX(250%)",
                opacity: isImgInView ? 1 : 0,
                transition:
                  "transform   0.9s ease-in-out, opacity   0.5s ease-in-out",
              }}
            />
          </div>
        </div>

        {/* timeline cards */}
        <div className="m-4 mt-20 px-2 lg:px-24">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-8 sm:space-y-8">
            <div className="col-span-12 space-y-12 relative px-4 sm:space-y-8 before:block before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-violet-400">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="h-4 w-4 rounded-full bg-violet-400 relative left-[-35px] z-[1] border-8 border-double border-violet-800 animate-pulse"></div>
                  <div className=" lg:text-gray-500 lg:hover:text-gray-900">
                    <h3 className="-mt-5 text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* text grid */}
      <div className="my-40 m-16 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-12 lg:mx-48">
        <div className="h-32 lg:w-60 rounded-lg flex justify-center text-3xl font-semibold">
          Be the best you with EQ
        </div>
        <div className="h-32 lg:w-72 rounded-lg text-lg text-gray-700">
          Not having your own emotions under control might be holding you back.
        </div>
        <div className="h-32 lg:w-72 rounded-lg text-lg text-gray-700">
          Additionally, not understanding those of others stops you from being
          parent, friend you can be.
        </div>
      </div>
    </div>
  );
}
