import { Paid } from "@/app/utils/icons";
import Image from "next/image";
import React from "react";

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-medium text-[#605050]">{value}</p>
  </div>
);

const AuctionMarketplace = () => {
  return (
    <div className="min-h-screen py-4 sm:py-6 px-4 sm:px-0">
      <div className="mx-auto space-y-6">
        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Image Gallery */}
            <div className="shrink-0 w-full lg:w-auto">
              <div className="w-full lg:w-64 h-64 bg-gray-100 rounded-lg overflow-hidden mb-3">
                <Image
                  src="/images/iphone.svg"
                  alt="iPhone 17 Pro"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-gray-100 rounded shrink-0"
                  >
                    <Image
                      src="/images/iphone.svg"
                      alt={`Thumbnail ${i}`}
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h1 className="text-2xl magison font-bold text-[#F2482D] [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)]">
                  iPhone 17 Pro
                </h1>
                <span className="w-fit px-5 py-2.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] bg-[#E5F9EE] text-sm border border-black">
                  Live
                </span>
              </div>

              {/* Highlighted Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-[#E6E6E6] rounded-xl bg-[#FFF6F6] p-4 sm:p-5">
                <div>
                  <p className="text-sm text-gray-500">Desired Net Payout</p>
                  <p className="text-xl magison font-bold text-[#F2482D] [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)]">
                    $10,000
                  </p>
                </div>
                <Stat label="Created" value="Nov 28, 2025" />
                <Stat label="Ends" value="Dec 5, 2025" />
                <Stat label="Listed By" value="Seller" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
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
                  <p className="text-sm bg-[#FFF6F6] px-2.5 py-1 w-fit rounded text-[#605050]">
                    image.jpg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User + Winner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Profile */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="User"
                width={100}
                height={100}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-2xl magison font-bold text-[#F2482D] [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)]">
                  Alexander Thompson
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-3">
                  <div>
                    <p className="text-sm text-[#A49898]">Email Address</p>
                    <p className="font-medium break-all">
                      thomas@bradiffmail.com
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#A49898]">Phone Number</p>
                    <p className="font-medium">+1 547 458 7856</p>
                  </div>
                </div>

                <p className="text-sm text-[#A49898] mt-3">Address</p>
                <p className="font-medium">
                  1234 Grandiose Ave, Apt 7, Port Washington
                </p>
                <p className="font-medium">NY 10022</p>
              </div>
            </div>
          </div>

          {/* Winner Card */}
          <div className="relative border border-[#E6E6E6] rounded-2xl overflow-hidden bg-[#F54A2A] text-white">
            <div
              className="h-40 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1511512578047-dfb367046420')",
              }}
            />

            <div className="p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-[#F2482D] p-3 rounded-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] border border-black">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h2 className="text-xl magison font-semibold">Winner Name</h2>
                </div>
                <button className="px-5 py-2 rounded-lg bg-[#272727] text-sm">
                  View Details
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/80">Tracking Id</p>
                  <p className="font-medium">thomalex@radiffmail.com</p>
                </div>
                <div>
                  <p className="text-white/80">Phone Number</p>
                  <p className="font-medium">+1 547 458 7856</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disputes + Payout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Disputes */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-2xl magison font-bold text-[#F2482D]">
              Disputes
            </h3>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-3 border-b border-[#E6E6E6] last:border-0"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-medium">Name of User</span>
                </div>
                <button className="px-4 py-2 bg-[#605050] text-white text-sm rounded-lg">
                  Manage Dispute
                </button>
              </div>
            ))}
          </div>

          {/* Payout */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-2xl magison font-bold text-[#F2482D]">
              Payout
            </h3>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 border-b border-[#E6E6E6]">
                <div>
                  <p className="font-semibold">20% Payment</p>
                  <p className="text-sm text-gray-600">Paid $2,000</p>
                </div>
                <button className="px-4 py-2 flex gap-2 border border-[#F2482D] text-[#F2482D] text-sm rounded-lg">
                  <Paid /> Paid Already
                </button>
              </div>

              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 border-b border-[#E6E6E6]"
                >
                  <div>
                    <p className="font-semibold">80% Payment</p>
                    <p className="text-sm text-gray-600">To Pay $8,000</p>
                  </div>
                  <button className="px-4 py-2 bg-[#605050] text-white text-sm rounded-lg">
                    Release Funds
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionMarketplace;
