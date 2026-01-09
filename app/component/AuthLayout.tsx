import Image from "next/image";
import logo from "@/public/authlogo.svg";
import leftLofo from "@/public/authleftlogo.svg";
import { ReactNode } from "react";

export default function AuthLayout({
  children,
  logoClassName = "",
}: {
  children: ReactNode;
  logoClassName?: string;
}) {
  return (
    <div className="w-full flex font-sans h-screen">
      <div className="w-1/2 hidden md:flex items-center justify-center overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={logo}
          alt="Next.js logo"
          width={200}
          height={100}
          unoptimized
          priority
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col relative items-center justify-center h-screen">
        <p className="absolute top-1 md:top-10 right-5 text-[#464646] text-sm font-normal">
          Have Issues? <span className="underline">Contact Support</span>
        </p>

        <Image
          src={leftLofo}
          width={150}
          height={100}
          alt="Right logo"
          className={`mb-2 max-w-[90vw] md:max-w-full h-auto md:mt-0 ${logoClassName}`}
        />

        <div className="p-2">{children}</div>
      </div>
    </div>
  );
}
