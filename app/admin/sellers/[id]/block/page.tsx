"use client";
import DynamicTable from "@/app/utils/DynamicTable";
import { OpenEye } from "@/app/utils/icons";
import ReusableModal from "@/app/utils/ReusableModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

// Main Page Component
const SellerDashboard = () => {
  const [sortValue, setSortValue] = useState<string>("newest");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [modalOpen,setModalOpen] = useState(false)
  const router = useRouter()

  const sellerData = {
    name: "Alexander Thompson",
    reasonToBlock:"Too many disputes against this seller",
    email: "alexander.t@mail.com",
    phone: "+1 567 890 1209",
    address: "321 Sunshine Ave, Apt 7, Port Washington, NY 10025",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  };


  const items = [
    {
      id: "12345",
      name: "Name of Item",
      price: "$2,570",
      pickup: "$75",
      status: "Pending",
      time: "7 days",
      action: "view",
    },
    {
      id: "12346",
      name: "Name of Item",
      price: "$2,390",
      pickup: "$75",
      status: "Active",
      time: "15 days",
      action: "view",
    },
    {
      id: "12345",
      name: "Name of Item",
      price: "$3,570",
      pickup: "$100",
      status: "Sold Out",
      time: "30 days",
      action: "view",
    },
    {
      id: "54321",
      name: "Name of Item",
      price: "$1,890",
      pickup: "$75",
      status: "Active",
      time: "7 days",
      action: "view",
    },
    {
      id: "12345",
      name: "Name of Item",
      price: "$2,200",
      pickup: "$81",
      status: "Completed",
      time: "14 days",
      action: "view",
    },
    {
      id: "65987",
      name: "Name of Item",
      price: "$6,785",
      pickup: "$82",
      status: "Pending",
      time: "30 days",
      action: "view",
    },
    {
      id: "74123",
      name: "Name of Item",
      price: "$4,560",
      pickup: "$75",
      status: "Active",
      time: "10 days",
      action: "view",
    },
    {
      id: "99102",
      name: "Name of Item",
      price: "$5,785",
      pickup: "$82",
      status: "Pending",
      time: "30 days",
      action: "view",
    },
    {
      id: "74102",
      name: "Name of Item",
      price: "$5,450",
      pickup: "$85",
      status: "Expired",
      time: "30 days",
      action: "view",
    },
    {
      id: "77642",
      name: "Name of Item",
      price: "$2,900",
      pickup: "$75",
      status: "Completed",
      time: "30 days",
      action: "view",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Pending: "bg-yellow-100 text-yellow-700",
      Active: "bg-blue-100 text-blue-700",
      "Sold Out": "bg-cyan-100 text-cyan-700",
      Completed: "bg-green-100 text-green-700",
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

  const columns: TableColumn[] = [
    { key: "id", label: "Sr No." },
    { key: "name", label: "Item Name" },
    { key: "price", label: "Price" },
    { key: "pickup", label: "Pickup Price" },
    {
      key: "status",
      label: "Status",
      render: (value) => getStatusBadge(value),
    },
    { key: "time", label: "Time Left" },
  ];

  const activeActions = [
      {
        key: "view",
        icon: <OpenEye />,
        onClick: () => router.push("/admin/sellers/45"),
        className: "bg-[#497BC6] text-white hover:bg-[#3a6bb0]",
      },
    ];
    const handleUnBlock = (data: any) => {
    setModalOpen(false);
    // Add your rejection logic here
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        {/* Profile Card */}
        <div className=" rounded-xl bg-transparent mb-6">
          <div className="flex flex-wrap justify-between gap-6">
            {/* Left Section */}
            <div className="flex flex-col sm:flex-row bg-white rounded-xl gap-5 p-4 flex-1">
              <Image
                src={sellerData.profileImage}
                alt={sellerData.name}
                width={120}
                height={120}
                className="w-64 h-64 rounded-[20px] object-cover"
              />

              <div className="flex-1">
                {/* Name + Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h1 className="text-[#F2482D] text-2xl font-normal magison leading-8 [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)]">
                    {sellerData.name}
                  </h1>

                  <button
                  onClick={()=> setModalOpen(true)}
                   className="bg-[#F2482D] shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] text-white text-xs font-medium px-4 py-1.5 rounded-md w-fit">
                    Seller Blocked
                  </button>
                </div>

                {/* Details */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                   <div className="sm:col-span-2">
                    <p className="text-xs text-gray-400 mb-1">Reason to Block</p>
                    <p className="text-black text-base font-medium ">
                      {sellerData.reasonToBlock}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Email Address</p>
                    <p className="text-black text-base font-medium">
                      {sellerData.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Phone Number</p>
                    <p className="text-black text-base font-medium">
                      {sellerData.phone}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-xs text-gray-400 mb-1">Address</p>
                    <p className="text-black text-base font-medium">
                      {sellerData.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:max-w-70 bg-white rounded-xl p-5 shadow-sm">
              {/* Stats */}
              <h3 className="text-[#F2482D] text-2xl font-normal leading-8 [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison mb-4">
                Stats
              </h3>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Live Items</p>
                  <p className="font-semibold text-gray-900">24</p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs mb-1">
                    Total Items Listed
                  </p>
                  <p className="font-semibold text-gray-900">520</p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs mb-1">
                    Total Revenue Generated
                  </p>
                  <p className="font-semibold text-gray-900">$25482.45</p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs mb-1">Disputes</p>
                  <p className="font-semibold text-gray-900">31</p>
                </div>
              </div>

              <div className="h-px my-2" />

              {/* Identity Proofs */}
              <h3 className="text-[#F2482D] text-2xl font-normal magison leading-8 [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] mb-3">
                Identity Proofs
              </h3>

              <div className="flex flex-wrap gap-2">
                {["ID Front", "ID Back", "Selfie"].map((label) => (
                  <button
                    key={label}
                    className="px-4 py-1.5 rounded-lg bg-[#FFF6F6] text-xs text-gray-600 border border-gray-200"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <DynamicTable
          title="Items Listed"
          columns={columns}
          data={items}
          rowActions={ activeActions}
          pagination={{ enabled: true, itemsPerPage: 10 }}
          headerActions={{
            dropdowns: [
              {
                label: "Sort",
                value: sortValue,
                options: [
                  { label: "Newest", value: "newest" },
                  { label: "Oldest", value: "oldest" },
                ],
                onChange: setSortValue,
              },
              {
                label: "Status",
                value: statusFilter,
                options: [
                  { label: "All", value: "all" },
                  { label: "Pending", value: "pending" },
                  { label: "Live", value: "active" },
                  { label: "Sold Out", value: "active" },
                  { label: "Expired", value: "active" },
                  { label: "Completed", value: "active" },
                ],
                onChange: setStatusFilter,
              },
            ],
          }}
        />
      </div>

      <ReusableModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="unblock"
        title="Unblock Seller?"
        description="Are you sure you want to Unblock this seller?"
        primaryButtonText="Unblock"
        primaryButtonColor="bg-[#F2482D]"
        showRemarks={true}
        remarksLabel="Add Remarks"
        remarksPlaceholder="Description"
        remarksList={[]}
        onPrimaryAction={handleUnBlock}
      />
    </div>
  );
};

export default SellerDashboard;
