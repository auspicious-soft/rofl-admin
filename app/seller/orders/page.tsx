"use client";
import React, { useState } from "react";
import DynamicTable from "@/app/utils/DynamicTable";
import { useRouter } from "next/navigation";
import { Add, Link, OpenEye } from "@/app/utils/icons";
import Image from "next/image";

const SellerPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const router = useRouter();

  const usersData = [
    {
      itemId: "12345",
      nameOfWinner: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "link",
      email: "arisu.anama@gmail.com",
      rewardStatus: "Delivered",
    },
    {
      itemId: "67890",
      nameOfWinner: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "add",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
    },
    {
      itemId: "12345",
      nameOfWinner: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "arisu.anama@gmail.com",
      rewardStatus: "Delivered",
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      Delivered: "bg-[#4FA662] p-0.5 text-white",
      Pending: "bg-[#E6F1FE] p-0.5 text-black",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          styles[status] ?? "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
    );
  };

  const columns = [
    { key: "itemId", label: "Item ID" },
    { key: "itemName", label: "Items" },
    { key: "nameOfWinner", label: "Name of Winner" },
    { key: "email", label: "Email Address" },
    {
      key: "trackingId",
      label: "Tracking ID/Link",
      render: (value: string) => {
        if (value === "link") {
          return (
            <button
              type="button"
              className="cursor-pointer text-blue-600 hover:text-blue-800"
            >
              <Link />
            </button>
          );
        }

        if (value === "add") {
          return (
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => setIsTrackingModalOpen(true)}
            >
              <Add />
            </button>
          );
        }

        return value;
      },
    },
    {
      key: "rewardStatus",
      label: "Reward Status",
      render: (value: string) => getStatusBadge(value),
    },
  ];

  const filteredData = usersData.filter(
    (seller) =>
      seller.nameOfWinner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.itemId.includes(searchQuery)
  );

  const activeActions = [
    {
      key: "view",
      icon: <OpenEye />,
      variant: "icon",
      onClick: () => router.push("/seller/items/45"),
      className: "bg-[#497BC6] text-white hover:bg-[#3a6bb0]",
    },
  ];

  return (
    <>
      <div className="min-h-screen py-6">
        <div className="mx-auto">
          <div className="flex flex-wrap mb-4 justify-between">
            <div className="hidden md:block gap-2 mb-6"></div>

            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 h-12 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2482D]"
                />
              </div>
            </div>
          </div>

          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        </div>
      </div>

      {/* ================= TRACKING MODAL ================= */}
      {isTrackingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 text-center relative">
            <Image
              src="/icons/truck.svg"
              alt="Tracking"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />

            <h2 className="text-4xl font-normal [text-shadow:2px_2px_0px_rgb(0_0_0/1.00)] magison text-[#F2482D] mb-2">
              Add Tracking Link Or ID
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              Please provide the tracking link or ID. This will be shared with
              the user.
            </p>

            <input
              type="text"
              placeholder="Tracking Link"
              className="w-full border border-[#E6E6E6] rounded-lg px-4 py-3 mb-4 focus:outline-none"
            />

            <div className="text-gray-400 text-sm mb-4">Or</div>

            <input
              type="text"
              placeholder="Tracking ID"
              className="w-full border border-[#E6E6E6] rounded-lg px-4 py-3 mb-6 focus:outline-none"
            />

            <div className="flex gap-4">
              <button className="flex-2 bg-[#F2482D] text-white py-3 rounded-full font-medium">
                Add
              </button>

              <button
                onClick={() => setIsTrackingModalOpen(false)}
                className="flex-1 border border-[#8b8888] py-3 rounded-full font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SellerPage;
