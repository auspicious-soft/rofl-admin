"use client";

import AuthLayout from "@/app/component/AuthLayout";
import { ClosedEye, Eye } from "@/app/utils/icons";
import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: call API to set password
    // await setPassword()

    setShowSuccessModal(true);
  };

  return (
    <AuthLayout>
      <form
        className="space-y-5 border p-5 rounded-3xl"
        onSubmit={handleSubmit}
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl text-center self-stretch magison [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] text-[#F2482D] drop-shadow-sm">
            Create Password
          </h1>
          <p className="mt-2 text-base font-normal text-[#464646]">
            Create a strong new password and confirm it to secure access.
          </p>
        </div>

        {/* Password */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Lock size={16} />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Set New Password"
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
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Lock size={16} />
          </span>
          <input
            type={confirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
            className="w-full rounded-xl border border-gray-200 pl-10 pr-10 py-3 text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
            onClick={() => setConfirmPassword(!confirmPassword)}
          >
            {confirmPassword ? <ClosedEye /> : <Eye />}
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] text-center rounded-xl bg-[#F2482D] py-3  text-white text-base font-medium  border border-[#000000] hover:bg-[#c42e17] transition flex items-center justify-center gap-2"
        >
          Set Password
          <ArrowRight />
        </button>

        <div className="text-center">
          <button type="button" className="text-xs text-[#464646] ">
            Remember Password?
            <span className="underline text-zinc-700 text-sm font-normal cursor-pointer">
              {" "}
              Login{" "}
            </span>
          </button>
        </div>
      </form>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-[90%] max-w-md rounded-3xl bg-white p-6 text-center shadow-xl">
            <Image
              src={"/resetLogo.svg"}
              alt="Password Updated"
              width={10}
              height={10}
              className="mx-auto mb-4 w-28"
            />

            <h2 className="text-4xl font-normal magison text-[#F2482D] drop-shadow-sm">
              Password Updated
            </h2>

            <p className="mt-2 text-sm text-[#464646]">
              Your password has been updated successfully!
            </p>

            <button
              className="mt-6 w-full rounded-xl bg-[#F2482D] py-3 text-white font-medium border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#c42e17] transition"
              onClick={() => {
                setShowSuccessModal(false);
                router.push("/");
              }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
