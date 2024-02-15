"use client";

import { useState } from "react";

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
    <div className="my-20 px-8 lg:my-40 lg:px-24">
      {/* vacancies */}
      <div className="text-3xl font-bold my-20 lg:text-5xl">Open vacancies</div>
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
            text-white rounded-lg lg:invisible hover:bg-gray-800 group-hover:-translate-y-10"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
