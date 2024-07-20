import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/problem-solving.png"

export default function LandingPage() {
  return (
    <div className="">
      <div className="relative isolate px-2 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-6">
          <div className="text-center">
            <Image
  className="inline-block lg:h-44 lg:w-44 sm:h-36 sm:w-36"
  src="/problem-solving.png"
  width={150}
  height={150}
  alt="dev finder logo"
/>


            <h1 className="text-3xl font-extrabold sm:font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Find other awesome devs to pair with online
            </h1>
            <p className="mt-6 text-sm sm:text-lg sm:leading-8 text-gray-600 dark:text-gray-200">
              This platform is for sharing your screen and working with other
              random developers online so that you can work together
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/browse"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:mx-20 sm:mx-10">
        <Link href='https://x.com/RithikM15'>
        <p className="text-xs font-semibold dark:text-[#E1F7F5]">
          Developed by
        <span className="font-serif ml-1 text-sm dark:text-[#E1F7F5] text-blue-600 underline hover:text-lime-500 font-bold sm:text-xl">
          M Rithik
        </span>
        </p></Link>
        <Link href='https://github.com/Rithik-93/realtime-video-app' target="_blank"
              rel="noopener noreferrer"><p className="text-blue-700 hover:underline font-bold text-sm sm:text-xl pb-1">source code</p></Link>
        </div>
      </div>
    </div>
  );
}