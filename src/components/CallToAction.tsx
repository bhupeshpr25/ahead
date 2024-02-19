"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="bg-blue-100 rounded-3xl m-8 my-20">
        <div className="px-6 py-10 sm:py-32 lg:flex lg:items-center lg:px-2 lg:py-32">
          <div
            className="mx-auto max-w-full text-center"
            style={{
              transform: isInView ? "none" : "scale(0.5)",
              opacity: isInView ? 1 : 0,
              transition:
                "transform  0.5s cubic-bezier(0.17,   0.55,   0.55,   1)   0.5s, opacity   0.9s cubic-bezier(0.17,   0.55,   0.55,   1)   0.5s",
            }}
          >
            <p className="my-4 text-gray-800 font-semibold lg:text-lg">
              Let your friends, family, and co-workers (anonymously) rate your
              social skills.
            </p>
            <h2 className="mt-20 lg:mt-10 text-3xl font-bold text-gray-900 lg:text-5xl">
              Ever wondered what others think of you?
            </h2>

            {/* points 1,2,3 */}
            <div className="mx-auto mt-6 max-w-full text-lg leading-8 text-gray-800 font-semibold hidden lg:block">
              <div className="my-20 w-full h-1 flex items-center justify-between border-2 border-yellow-500 border-dashed">
                <div className="w-1/6 flex flex-col justify-start relative">
                  <div className="w-12 bg-yellow-600 text-white rounded-full border-8 border-yellow-500 border-dashed">
                    1
                  </div>
                  <div className="absolute mt-16 -ml-20 text-start text-gray-600 w-96">
                    Answer questions on your social skills
                  </div>
                </div>
                <div className="w-1/6 flex justify-start relative">
                  <div className="w-12 bg-yellow-600 text-white rounded-full border-8 border-yellow-500 border-dashed">
                    2
                  </div>
                  <div className="absolute mt-16 -ml-40 text-start text-gray-600 w-96">
                    Let others anonymously answer the same questions about you
                  </div>
                </div>
                <div className="w-6/6 flex justify-start relative">
                  <div className="w-12 bg-yellow-600 text-white rounded-full border-8 border-yellow-500 border-dashed">
                    3
                  </div>
                  <div className="absolute mt-16 -ml-56 text-start text-gray-600  w-96">
                    Find out where you and others see things the same way - and
                    where not!
                  </div>
                </div>
              </div>
            </div>

            {/* timeline card */}
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center bg-white mt-20 h-48 w-full lg:w-3/4 px-10 gap-x-6 rounded-3xl">
                <div className="bg-gray-200 w-full h-1 flex items-center justify-between">
                  <div className="w-1/12 flex justify-start relative">
                    <div className="px-4 py-2 -ml-12 -mt-16 w-max h-10 lg:h-12 bg-purple-500 text-white font-semibold rounded-xl lg:text-xl absolute">
                      You
                    </div>
                    <div className="bg-purple-500 h-6 w-6 rounded-full shadow" />
                  </div>
                  <div className="w-2/12 flex justify-start relative">
                    <div className="bg-blue-500 h-6 w-6 rounded-full shadow" />
                    <div className="px-4 py-2 -ml-8 lg:-ml-0 mt-10 w-max h-10 lg:h-12 bg-blue-500 text-white font-semibold rounded-xl lg:text-xl absolute">
                      Anonymonos 1
                    </div>
                  </div>
                  <div className="w-4/12 flex justify-start relative">
                    <div className="px-4 py-2 -ml-2 lg:-ml-12 -mt-16 w-max h-10 lg:h-12 bg-yellow-400 text-white font-semibold rounded-xl lg:text-xl absolute">
                      Anonymonos 2
                    </div>
                    <div className="bg-yellow-400 h-6 w-6 rounded-full shadow" />
                  </div>
                  <div className="w-12/12 flex justify-start relative">
                    <div className="bg-green-500 h-6 w-6 rounded-full" />
                    <div className="px-4 py-2 -ml-12 lg:-ml-0 mt-10 w-max h-10 lg:h-12 bg-green-500 text-white font-semibold rounded-xl lg:text-xl absolute">
                      Anonymonos 3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* call to action */}
      <div className="bg-white">
        <div ref={ref} className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div
            className="mx-auto max-w-2xl text-center"
            style={{
              transform: isInView ? "none" : "scale(0.5)",
              opacity: isInView ? 1 : 0,
              transition:
                "transform  0.5s cubic-bezier(0.17,   0.55,   0.55,   1)   0.5s, opacity   0.9s cubic-bezier(0.17,   0.55,   0.55,   1)  2s",
            }}
          >
            <p className="text-gray-800 lg:text-lg my-4">
              We take privacy seriously
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Before you get started
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-800">
              We wont share your answers with anyone (and wont ever tell you
              which friends said what about you)
            </p>

            <div className="text-gray-800 my-10 flex items-center justify-center space-x-2">
              <p className="font-medium">with love</p>
              <p className="font-bold font-mono text-xl underline">
                Team ahead
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-white rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                Start a test
              </button>
            </div>
            <p className="text-gray-800 my-4">Takes only 5 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
