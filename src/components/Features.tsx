import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="bg-red-50 rounded-3xl m-8 mt-4">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-2 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex">
            <div className="relative flex items-center gap-x-4 ml-1 rounded-full font-semibold text-gray-900">
              Built out of frustration
            </div>
          </div>
          <h1 className="mt-5 max-w-lg text-2xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            Meet the ahead app
          </h1>
          <div className="mt-12">
            <Image src="/features.png" alt="Hero" width={1200} height={1200} />
          </div>
        </div>

        <div className="text-md mt-10 lg:text-2xl lg:mt-0 text-gray-700">
          <p>
            A personalized pocket coach that provides bite-sized, science-driven
            tools that boost emotional intelligence.
          </p>
          <br />
          <p>
            Think of it as a pocket cheerleader towards a better, more
            fulfilling living.
          </p>
        </div>
      </div>
    </div>
  );
}
