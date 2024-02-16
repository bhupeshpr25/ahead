"use client";

export default function CallToAction() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-gray-800 text-sm my-4">
            We take privacy seriously
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Before you get started
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-800">
            We wont share your answers with anyone (and wont ever tell you which
            friends said what about you)
          </p>

          <p className="text-gray-800 my-10">with love, Team ahead</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-white rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              Start a test
            </button>
          </div>
          <p className="text-gray-800 my-4">Takes only 5 minutes</p>
        </div>
      </div>
    </div>
  );
}
