"use client";

import AuthLayout from "@/app/component/AuthLayout";
import { ArrowRight} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <AuthLayout logoClassName="mt-34">
      <form className="space-y-5 border border-[#eeeaea] p-5 rounded-3xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl text-center self-stretch [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison text-[#F2482D] drop-shadow-sm">
            Enter OTP
          </h1>
          <p className=" mt-2 text-base font-normal text-[#464646]">
            Enter the one-time code sent to your registered email address.
          </p>
        </div>

        {/* Email */}
        <div className="relative">
          <input
  type="number"
  required
  placeholder="Enter OTP"
  className="w-full rounded-xl border text-black border-gray-200 pl-5 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500
             appearance-none
             [&::-webkit-outer-spin-button]:appearance-none
             [&::-webkit-inner-spin-button]:appearance-none
             [-moz-appearance:textfield]"
/>

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] text-center rounded-xl bg-[#F2482D] py-3  text-white text-base font-medium  border border-[#000000] hover:bg-[#c42e17] transition flex items-center justify-center gap-2"
        >
          Verify<ArrowRight/>
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
