"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle, XCircle } from "lucide-react";
import DynamicTable from "@/app/utils/DynamicTable";
import { OpenEye } from "@/app/utils/icons";
import { useRouter } from "next/navigation";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const usersData = [
    { srNo: 1, item: "iPhone 17 Pro", status: "Blocked", slots: "50 / 100" },
    { srNo: 2, item: "MacBook Pro M3", status: "Active", slots: "30 / 50" },
    { srNo: 3, item: "PlayStation 5", status: "Blocked", slots: "20 / 40" },
    { srNo: 4, item: "Apple Watch Ultra", status: "Active", slots: "15 / 25" },
    { srNo: 5, item: "Samsung S25 Ultra", status: "Active", slots: "60 / 100" },
    { srNo: 6, item: "DJI Mini Drone", status: "Blocked", slots: "10 / 20" },
  ];

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Pending: "bg-yellow-100 text-yellow-700",
      Live: "bg-blue-100 text-blue-700",
      "Sold Out": "bg-cyan-100 text-cyan-700",
      Active: "bg-green-100 text-green-700",
      Expired: "bg-red-100 text-red-700",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          statusColors[status] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
    );
  };

  const columns = [
    { key: "srNo", label: "Sr No." },
    { key: "item", label: "Item" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => getStatusBadge(value),
    },
    { key: "slots", label: "Slots" },
  ];

  const filteredData = usersData.filter(
    (user) =>
      user.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeActions = [
    {
      key: "view",
      icon: <OpenEye />,
      variant: "icon",
      onClick: () => router.push("/admin/users/45"),
      className: "bg-[#497BC6] text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF6F6] py-4 sm:py-6 px-4 sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          {/* User Details */}
          <div>
            <p className="text-[#605050] mb-2">User Details</p>
            <div className="bg-[#FFF6F4] rounded-xl p-4 sm:p-6 border border-[#F1E4E1]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-black">
                  Lucas Grant
                </h2>
                <span className="w-fit px-4 py-1 text-sm rounded-full bg-[#F2482D] text-white">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 mt-6 text-sm">
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-500">Email Address</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E9F7EF] text-[#0993F5]">
                      <CheckCircle size={12} />
                      Verified
                    </span>
                  </div>
                  <p className="text-gray-700 break-all">
                    grant.lucas465@gmail.com
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-500 text-xs">Phone Number</p>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FDECEC] text-[#EB5757] text-xs">
                      <XCircle size={12} />
                      Not Verified
                    </span>
                  </div>
                  <p className="text-gray-700">+4 0210540541</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs">Home Address</p>
                  <p className="text-gray-700">#224, Robinson Street</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs">Country</p>
                  <p className="text-gray-700">United States</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs">State</p>
                  <p className="text-gray-700">California, USA</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs">Postal Code</p>
                  <p className="text-gray-700">10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Items Purchased */}
          <div>
            <h3 className="text-lg font-semibold text-[#605050] mb-2">
              Items Purchased
            </h3>
            <div className="overflow-x-auto">
              <DynamicTable
                columns={columns}
                data={filteredData}
                rowActions={activeActions}
                pagination={{ enabled: true, itemsPerPage: 10 }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="text-sm font-semibold text-[#605050] mb-4">
            Winning History
          </h3>

          <div className="space-y-4 bg-white p-4 border border-[#E6E6E6] rounded-[10px]">
            {[{ name: "Macbook Air", date: "25 Aug 2025" }].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                    alt=""
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Purchased: {item.date}
                    </p>
                  </div>
                </div>

                <button className="w-8 h-8 rounded bg-[#497BC6] text-white flex items-center justify-center shrink-0">
                  <OpenEye />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;