"use client";

import AuthLayout from "@/app/component/AuthLayout";
import { ArrowRight, MailOpen } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <AuthLayout logoClassName="mt-44">
      <form className="space-y-5 border border-[#eeeaea] p-5 rounded-3xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl text-center self-stretch [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison text-[#F2482D] drop-shadow-sm">
            Forgot Password?
          </h1>
          <p className="mt-2 text-base font-normal text-[#464646]">
            Reset your password by email link and set a new one securely
          </p>
        </div>

        {/* Email */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <MailOpen size={16} />
          </span>
          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full rounded-xl border text-black border-gray-200 pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>


        {/* Submit */}
        <button
          type="submit"
          className="w-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] text-center rounded-xl bg-[#F2482D] py-3  text-white text-base font-medium  border border-[#000000] hover:bg-[#c42e17] transition flex items-center justify-center gap-2"
        >
          Verify Email<ArrowRight/>
        </button> 

          <div className="text-center">
          <button
            type="button"
            onClick={()=>router.push("/")}
            className="text-xs text-[#464646] "
          >
            Remember Password? <span className="underline text-zinc-700 text-sm font-normal cursor-pointer"> Login </span>
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
