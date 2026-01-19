"use client";
import AuthLayout from "./component/AuthLayout";
import { Lock, MailOpen, MoveRight } from "lucide-react";
import { useState } from "react";
import { ClosedEye, Eye } from "./utils/icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  return (
    <AuthLayout logoClassName="mt-30">
      <form className="space-y-5 border border-[#eeeaea] p-5 rounded-3xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl text-center [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] self-stretch magison text-[#F2482D] drop-shadow-sm">
            Login To Your Account
          </h1>
          <p className="mt-2 text-base font-normal text-[#464646]">
            Sign in with email and password to securely access your account.
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

        {/* Password */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Lock size={16} />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-gray-200 pl-10 pr-10 py-3 text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ClosedEye /> : <Eye />}
          </button>
        </div>

        {/* Forgot password */}
        <div className="text-right">
          <button
            type="button"
            onClick={() => router.push("/forget-password")}
            className="inline-block whitespace-nowrap text-xs text-[#464646] hover:text-[#F2482D] underline cursor-pointer"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] text-center rounded-xl bg-[#F2482D] py-3  text-white text-base font-medium  border border-[#000000] hover:bg-[#c42e17] transition flex items-center justify-center gap-2"
        >
          Login
          <span className="ml-1">
            <MoveRight size={20} />
          </span>
        </button>
      </form>
    </AuthLayout>
  );
}
