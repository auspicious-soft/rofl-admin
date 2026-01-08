import { Paid } from "@/app/utils/icons";
import Image from "next/image";
import React from "react";

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-medium text-[#605050] ">{value}</p>
  </div>
);

const AuctionMarketplace = () => {
  return (
    <div className="min-h-screen py-6">
      <div className="mx-auto space-y-6">
        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-wrap items-start gap-6">
            {/* Image Gallery */}
            <div className="shrink-0">
              <div className="w-64 h-64 bg-gray-100 rounded-lg overflow-hidden mb-3">
                <Image
                  src={"/images/iphone.svg"}
                  alt="iPhone 17 Pro"
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-gray-100 rounded border-2 border-orange-500"
                  >
                    <Image
                      src={"/images/iphone.svg"}
                      alt={`Thumbnail ${i}`}
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details Grid */}
            <div className="flex-1 flex-wrap space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h1 className="text-2xl [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison font-bold text-[#F2482D]">
                  iPhone 17 Pro
                </h1>
                <span className="px-5 py-2.5 left-0 top-0  rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] bg-[#E5F9EE] text-black text-sm border border-[#000000] font-medium">
                  Live
                </span>
              </div>

              {/* Highlighted Summary */}
              <div className="grid lg:grid-cols-4  gap-6 border border-[#E6E6E6] rounded-xl bg-[#FFF6F6] p-5">
                <div>
                  <p className="text-sm text-gray-500">Desired Net Payout</p>
                  <p className="text-xl [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison font-bold text-[#F2482D]">
                    $10,000
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Created</p>
                  <p className="font-medium text-[#605050]">Nov 28, 2025</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Ends</p>
                  <p className="font-medium text-[#605050]">Dec 5, 2025</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Listed By</p>
                  <p className="font-medium text-[#605050]">Seller</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
                <Stat label="Ticket Price" value="$50" />
                <Stat label="Total Tickets" value="1440" />
                <Stat label="Tickets Sold" value="842" />
                <Stat label="Total Pot" value="$2,500" />

                <Stat label="IRS Withholding" value="$2,500" />
                <Stat label="Platform Fee" value="$1,440" />
                <Stat label="Processing Fee" value="$504" />
                <Stat label="Seller Receives" value="$10,000" />

                <div>
                  <p className="text-sm text-gray-500">Proof With Prize</p>
                  <p className="text-sm bg-[#FFF6F6] px-2.5 py-1 w-fit rounded text-[#605050] cursor-pointer">
                    image.jpg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Information and Winner Section */}
        <div className="grid  lg:grid-cols-2 gap-6">
          {/* User Profile */}
          {/* Winner Card */}
          <div className="relative border border-[#E6E6E6] rounded-2xl overflow-hidden bg-[#F54A2A] text-white">
            {/* Top Image Banner */}
            <div
              className="h-40 bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1511512578047-dfb367046420')",
              }}
            >
              {/* RESPONSIVE ABSOLUTE HEADER */}
              <div
                className="
        absolute
        -bottom-8
        left-4
        right-4
        lg:left-auto
        lg:right-14
        2xl:right-38
        flex
        flex-col
        lg:flex-row
        items-center
        lg:items-center
        justify-between
        gap-3
        px-3
        py-2.5
        rounded-[10px]
        bg-[#F2482D]
        border
        border-black
        shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]
      "
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                    alt="Winner"
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <h2 className="text-lg lg:text-2xl magison font-semibold">
                    Winner Name
                  </h2>
                </div>

                <button className="px-4 py-2 rounded-lg bg-[#272727] text-sm font-medium w-full lg:w-auto">
                  View Details
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-14 space-y-6">
              {/* Bottom Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-white/80 mb-1">Tracking Id</p>
                  <p className="font-medium">thomalex@radiffmail.com</p>
                </div>

                <div className="sm:text-right">
                  <p className="text-white/80 mb-1">Phone Number</p>
                  <p className="font-medium">+1 547 458 7856</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-white/80 mb-1">Shipping Status</p>
                  <p className="font-medium">Shipped</p>
                </div>

                <div className="sm:text-right">
                  <p className="text-white/80 mb-1">Tracking Link / ID</p>
                  <p className="font-medium">547 458 7856</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payout */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison font-bold text-[#F2482D]">
              Payout
            </h3>
            <div className="space-y-4 ">
              <div className="flex flex-wrap items-center justify-between p-4 border-b border-[#E6E6E6]  rounded-lg">
                <div>
                  <p className="font-semibold mb-1">20% Payment</p>
                  <p className="text-sm text-gray-600">Paid $2,000</p>
                </div>
                <button className="px-4 py-2 flex gap-2 justify-center bg-white border border-[#4FA662] text-[#4FA662] text-sm rounded-lg font-medium">
                  <span>Received</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between p-4 border-b border-[#E6E6E6] rounded-lg">
                <div>
                  <p className="font-semibold mb-1">80% Payment</p>
                  <p className="text-sm text-gray-600">To Pay $8,000</p>
                </div>
                <button className="px-4 py-2 bg-[#A49898] text-white text-sm rounded-lg transition-colors">
                  Release Funds
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between p-4 border-b border-[#E6E6E6] rounded-lg">
                <div>
                  <p className="font-semibold mb-1">80% Payment</p>
                  <p className="text-sm text-gray-600">To Pay $8,000</p>
                </div>
                <button className="px-4 py-2 bg-[#A49898] text-white text-sm rounded-lg transition-colors">
                  Release Funds
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionMarketplace;
