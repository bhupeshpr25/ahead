import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      <hr className="border-gray-400 border-t my-10" />
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={80}
            className="rounded-xl"
          />
          <div className="text-xl mt-2 font-semibold text-purple-900">
            ahead
          </div>
        </div>
        <div className="mt-10 justify-center space-x-10 lg:flex">
          <div className="flex">
            <div className="bg-green-200 p-2 rounded-full">
              <MapPinIcon className="h-5 w-5 text-gray-600" />
            </div>
            <div className="mt-1 ml-1 font-semibold">
              Auguststraße 26, 10117 berlin
            </div>
          </div>
          <div className="flex">
            <div className="bg-green-200 p-2 rounded-full">
              <EnvelopeIcon className="h-5 w-5 text-gray-600" />
            </div>
            <div className=" mt-1 ml-1 font-semibold">hi@ahead-app.com</div>
          </div>
        </div>
        <Image src="/appstore.png" alt="footer" width={300} height={300} />
        <p className="my-10 text-center text-sm leading-5 text-gray-500">
          &copy; 2024 Ahead app. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
