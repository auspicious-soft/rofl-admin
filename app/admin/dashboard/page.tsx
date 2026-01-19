"use client";

import React from "react";
import StatsCard from "@/app/utils/StatsCard";
import DynamicTable from "@/app/utils/DynamicTable";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Edit, Eye, OpenEye } from "@/app/utils/icons";
import { useRouter } from "next/navigation";

interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

// Main Dashboard Page
const DashboardPage = () => {
  const router = useRouter();
  // Active Items Data
  const activeItemsData = [
    {
      id: "12345",
      name: "Name of Item",
      startDate: "January 24, 2025",
      timeLine: "7 days",
    },
    {
      id: "07800",
      name: "Name of Item",
      startDate: "March 6, 2025",
      timeLine: "14 days",
    },
    {
      id: "12345",
      name: "Name of Item",
      startDate: "January 24, 2025",
      timeLine: "30-days",
    },
    {
      id: "07800",
      name: "Name of Item",
      startDate: "March 6, 2025",
      timeLine: "7 days",
    },
    {
      id: "12345",
      name: "Name of Item",
      startDate: "January 24, 2025",
      timeLine: "14 days",
    },
    {
      id: "07800",
      name: "Name of Item",
      startDate: "March 6, 2025",
      timeLine: "30-days",
    },
  ];

  const activeItemsColumns: TableColumn[] = [
    { key: "id", label: "Items" },
    { key: "name", label: "Name" },
    { key: "startDate", label: "Start Date" },
    { key: "timeLine", label: "Time Line" },
  ];

  // Recent Winners Data
  const recentWinnersData = [
    { position: "2nd", name: "Jordan Mitchell" },
    { position: "3rd", name: "Taylor Johnson" },
    { position: "4th", name: "Alex Smith" },
    { position: "5th", name: "Alexandra Brown" },
    { position: "6th", name: "Chris Williams" },
    { position: "7th", name: "Chris Williams" },
    { position: "8th", name: "Chris Williams" },
    { position: "9th", name: "Chris Williams" },
    { position: "10th", name: "Chris Williams" },
    { position: "11th", name: "Chris Williams" },
    { position: "12th", name: "Chris Williams" },
  ];

  const data = [
    { month: "01", value: 0 },
    { month: "02", value: 90 },
    { month: "03", value: 150 },
    { month: "04", value: 190 },
    { month: "05", value: 170 },
    { month: "06", value: 200 },
    { month: "07", value: 150 },
    { month: "08", value: 180 },
    { month: "09", value: 120 },
    { month: "10", value: 110 },
    { month: "11", value: 140 },
    { month: "12", value: 135 },
  ];

  const activeActions = [
    {
      key: "view",
      icon: <OpenEye />,
      variant: "icon",
      onClick: () => router.push("/admin/sellers/45"),
      className: "bg-[#497BC6] text-white",
    },
    {
      key: "view",
      icon: <Edit />,
      variant: "icon",
      onClick: () => router.push("/admin/sellers/45"),
      className: "bg-[#4FA662] text-white",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Sellers"
            value="124"
            subtitle="Total no.of sellers on the platform."
            url="/icons/user.svg"
          />
          <StatsCard
            title="Live Items"
            value="38"
            subtitle="Items are ready active and running (sellers)."
            url="/icons/gift.svg"
          />
          <StatsCard
            title="Pending Seller Approval"
            value="50"
            subtitle="Sellers waiting for identity verification."
            url="/icons/pending.svg"
          />
          <StatsCard
            title="Pending Items Approval"
            value="48"
            subtitle="Item own listings awaiting admin review."
            url="/icons/pending.svg"
          />
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <DynamicTable
              title="Active Items"
              columns={activeItemsColumns}
              data={activeItemsData}
              rowActions={activeActions}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 w-full overflow-hidden">
            {/* Header */}
            <h2 className="text-[#F2482D] magison [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] text-xl mb-4">
              Recent Winners
            </h2>

            {/* Scroll Container */}
            <div className="max-h-100 w-full overflow-y-auto overflow-x-auto pr-1">
              <div className="space-y-3 w-full">
                {recentWinnersData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 whitespace-nowrap min-w-64"
                  >
                    {/* Position */}
                    <div className="w-10 text-sm text-gray-500 shrink-0">
                      {item.position}
                    </div>

                    {/* Name */}
                    <div className="flex-1 text-sm font-medium text-gray-800">
                      {item.name}
                    </div>

                    {/* Action */}
                    <button onClick={()=>router.push("/admin/users/45")} className="w-7 h-7 flex items-center justify-center text-white rounded-md bg-[#497BC6] shrink-0">
                      <OpenEye />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h2 className="text-[#F2482D]  magison [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] text-xl font-semibold">
                Items Sold
              </h2>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-[#F2482D]  magison [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] text-xl font-semibold mb-4">
              Last 5 Gift Card Winners
            </h2>
            <div className="space-y-3">
              {[
                { name: "Jordan Smith", date: "January 24, 2025" },
                { name: "Chris Williams", date: "March 6, 2025" },
                { name: "Zane Floyd", date: "January 24, 2025" },
                { name: "Eleanor Walker", date: "March 6, 2025" },
                { name: "Rowan Becker", date: "January 24, 2025" },
                { name: "Rowan Becker", date: "January 24, 2025" },
                { name: "Rowan Becker", date: "January 24, 2025" },
                { name: "Rowan Becker", date: "January 24, 2025" },
                { name: "Rowan Becker", date: "January 24, 2025" },
              ].map((winner, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-gray-700">{winner.name}</span>
                  <span className="text-gray-500">{winner.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
