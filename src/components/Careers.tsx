"use client";

import { useState } from "react";
import Benefits from "./Benefits";

interface Vacancy {
  title: string;
  type: string;
  location: string;
  compensation: string;
}

export default function Careers() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const vacancies: Vacancy[] = [
    {
      title: "Senior Full-Stack Engineer",
      type: "Full time position",
      location: "Berlin or remote",
      compensation: "€65-85k, 0.5-1.50% equity share options",
    },
    {
      title: "Senior Designer",
      type: "Full time",
      location: "Berlin or remote",
      compensation: "€40-55k, 0.25-0.50% equity share options",
    },
    {
      title: "Superstar Intern",
      type: "Full time",
      location: "Berlin or remote",
      compensation: "€20-24k, 0.5-1.50% equity share options",
    },
  ];

  return (
    <div>
      {/* work with us */}
      <div className="bg-violet-100 rounded-3xl m-8 mt-4">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 flex flex-col lg:grid lg:items-center lg:gap-x-6 lg:px-2 lg:py-32">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="h-full rounded-lg lg:col-span-2">
              {/* left side */}
              <div className="max-w-2xl lg:mx-0">
                <h1 className="mt-5 max-w-lg text-2xl font-bold text-gray-900 lg:text-5xl">
                  Work with us
                </h1>
                <div className="w-full my-10 bg-white max-w-lg rounded-xl">
                  <div className="rounded-xl p-6 py-10">
                    <div className="flex items-center text-3xl">👻</div>

                    <h3 className="mt-4 font-semibold text-lg">About</h3>

                    <p className="mt-4 text-md text-gray-800">
                      At ahead our goal is to make self-improvement fun and
                      lasting. We know there is a way how to make it work. And
                      that is what ahead is all about
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-6 py-10 rounded-xl">
                    <h3 className="mt-4 font-semibold text-lg">Product</h3>

                    <p className="mt-4 text-md text-gray-800">
                      Sure, you could spend ages reading books or sitting in
                      seminars on how to become a better spouse, parent, or
                      manager - like we did...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-32 rounded-lg bg-gray-200">
              <Benefits />
            </div>
          </div>
        </div>
      </div>

      {/* vacancies */}
      <div className="my-20 px-8 lg:my-40 lg:px-24">
        <div className="text-3xl font-bold my-20 lg:text-5xl">
          Open vacancies
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {vacancies.map((vacancy, index) => (
            <div key={index} className="p-8 rounded-3xl bg-yellow-100 group">
              <div className="text-xl font-bold">{vacancy.title}</div>
              <ul className="list-disc p-4 pb-12">
                <li className="my-1">{vacancy.type}</li>
                <li className="my-1">{vacancy.location}</li>
                <li className="my-1">{vacancy.compensation}</li>
              </ul>

              {/* reveal button on hover */}
              <button
                className="lg:transition lg:transform
            translate-y-8 ease-in-out block
            lg:absolute group-hover:visible pr-10
            pl-10 pt-2 pb-2 mt-2 ml-4 mb-10 bg-gray-900
            text-white rounded-lg lg:invisible hover:bg-gray-800 lg:group-hover:-translate-y-10"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
