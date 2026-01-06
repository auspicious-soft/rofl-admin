import Image from "next/image";
import logo from "@/public/authlogo.svg";
import leftLofo from "@/public/authleftlogo.svg";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex font-sans">
      <Image
        className="w-1/2 hidden md:block max-h-screen"
        src={logo}
        alt="Next.js logo"
        width={200}
        height={100}
        unoptimized
        priority
      />
      <div className="w-full flex flex-col relative items-center justify-center h-screen">
        <p className="absolute bottom-1 md:top-10 md:right-5 text-[#464646] text-sm font-normal">
          Have Issues? <span className="underline">Contact Support</span>
        </p>

        <Image
          src={leftLofo}
          width={150}
          height={100}
          alt="Right logo"
          className="mb-2 md:mt-10"
        />

        <div>{children}</div>
      </div>
    </div>
  );
}
