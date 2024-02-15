"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="bg-purple-100 rounded-3xl m-8 mt-4">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 ml-1 rounded-full font-semibold text-gray-900">
                Ahead app
              </div>
            </div>
            <h1 className="mt-5 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Master your life by mastering emotions
            </h1>

            {/* app store button and ratings */}
            <div className="mt-10 w-40 lg:w-full lg:-ml-14 flex items-center">
              <Image
                src="/appstore.png"
                alt="AppStore"
                width={300}
                height={60}
                className=""
              />
              <div className="ml-2 lg:-ml-8">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 mx-1 text-yellow-400" />
                  <StarIcon className="h-5 w-5 mx-1 text-yellow-400" />
                  <StarIcon className="h-5 w-5 mx-1 text-yellow-400" />
                  <StarIcon className="h-5 w-5 mx-1 text-yellow-400" />
                  <StarIcon className="h-5 w-5 mx-1 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-800 ml-1">
                  100+ AppStore reviews
                </div>
              </div>
            </div>
          </div>

          {/* hero image */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Image src="/hero.png" alt="Hero" width={500} height={500} />
          </div>
        </div>
      </div>

      {/* text grid */}
      <div className="my-40 m-16 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-12">
        <div className="h-32 rounded-lg flex justify-center text-3xl font-semibold">
          EQ beats IQ
        </div>
        <div className="h-32 lg:w-80 rounded-lg text-lg text-gray-700">
          People with high emotional intelligence (EQ) live more fulfilling
          lives. They tend to be happier and have happier relationships.
        </div>
        <div className="h-32 lg:w-80 rounded-lg text-lg text-gray-700">
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29k a year.
        </div>
      </div>
    </div>
  );
}
