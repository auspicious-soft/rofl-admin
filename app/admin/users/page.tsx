"use client";
import React, { useState } from "react";
import DynamicTable from "@/app/utils/DynamicTable";
import { useRouter } from "next/navigation";
import { OpenEye } from "@/app/utils/icons";
import ReusableModal from "@/app/utils/ReusableModal";

// Example Page Component - Sellers Management
const SellerPage = () => {
  const [activeTab, setActiveTab] = useState<"all" | "blocked">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: string | null;
    selectedRow: any;
  }>({
    isOpen: false,
    type: null,
    selectedRow: null
  });
  const router = useRouter();

  // Sample data for sellers
 const usersData = [
  {
    itemId: "12345",
    nameOfUser: "John Doe",
    email: "john3@example.com",
    phoneNumber: "+1 555 234 5678",
    status: "Blocked",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "7890",
    nameOfUser: "Marco Smith",
    email: "marcho@testco.com",
    phoneNumber: "+1 555 987 6543",
    status: "Blocked",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "45678",
    nameOfUser: "Alex Johnson",
    email: "alex@testco.com",
    phoneNumber: "+1 555 456 1122",
    status: "Active",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "67890",
    nameOfUser: "Emily Brown",
    email: "emily@example.com",
    phoneNumber: "+1 555 778 9900",
    status: "Blocked",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "33445",
    nameOfUser: "Chris Martin",
    email: "chris@testco.com",
    phoneNumber: "+1 555 667 3344",
    status: "active",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "33445",
    nameOfUser: "Chris Martin",
    email: "chris@testco.com",
    phoneNumber: "+1 555 667 3344",
    status: "active",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "33445",
    nameOfUser: "Chris Martin",
    email: "chris@testco.com",
    phoneNumber: "+1 555 667 3344",
    status: "active",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "33445",
    nameOfUser: "Chris Martin",
    email: "chris@testco.com",
    phoneNumber: "+1 555 667 3344",
    status: "active",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "33445",
    nameOfUser: "Chris Martin",
    email: "chris@testco.com",
    phoneNumber: "+1 555 667 3344",
    status: "active",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "33445",
    nameOfUser: "Chris Martin",
    email: "chris@testco.com",
    phoneNumber: "+1 555 667 3344",
    status: "active",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
  {
    itemId: "33445",
    nameOfUser: "Chris Martin",
    email: "chris@testco.com",
    phoneNumber: "+1 555 667 3344",
    status: "active",
    blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
  },
];

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Pending: "bg-yellow-100 text-yellow-700",
      Live: "bg-blue-100 text-blue-700",
      "Sold Out": "bg-cyan-100 text-cyan-700",
      active: "bg-green-100 text-green-700",
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
    { key: "itemId", label: "Item ID" },
    { key: "nameOfUser", label: "Name Of User" },
    { key: "email", label: "Email Address" },
    { key: "phoneNumber", label: "Phone Number" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => getStatusBadge(value),
    },
  ];

  // Filter data based on search
  const filteredData = usersData.filter(
    (seller) =>
      seller.nameOfUser.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.itemId.includes(searchQuery)
  );

  // Modal handlers
  const openModal = (type: string, row: any) => {
    setModalState({ isOpen: true, type, selectedRow: row });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, selectedRow: null });
  };

  const handleUnblock = (data: any) => {
    console.log("Unblocked seller:", modalState.selectedRow, data);
    closeModal();
    // Add your unblock logic here
  };

  const activeActions = [
    {
      key: "view",
      icon: <OpenEye />,
      variant: "icon",
      onClick: () => router.push("/admin/users/45"),
      className: "bg-[#497BC6] text-white hover:bg-[#3a6bb0]",
    },
  ];


  const blockedActions = [
    {
      key: "unblock",
      label: "Unblock",
      variant: "text",
      onClick: (row: any) => openModal('unblock', row),
    },
    {
      key: "view",
      icon: <OpenEye />,
      variant: "icon",
      onClick:  () => router.push("/admin/users/45"),
      className: "bg-[#497BC6] text-white hover:bg-[#497BC6]",
    },
  ];



  const blockedColumns = [
    { key: "nameOfUser", label: "Name of User" },
    { key: "email", label: "Email" },
    { key: "blockedOn", label: "Blocked On" },
    { key: "adminNotes", label: "Admin Notes" },
  ];

  return (
    <div className="min-h-screen py-6">
      <div className="mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 bg-White cursor-pointer rounded-[10px] h-12 ${
                activeTab === "all"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "all"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              All Users
            </button>
            <button
              onClick={() => setActiveTab("blocked")}
              className={`px-5 bg-White cursor-pointer rounded-[10px] h-12 ${
                activeTab === "blocked"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "blocked"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Blocked Users
            </button>
          </div>

          {/* Search Bar */}
          <div className="bg-none">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 h-12 py-2 border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2482D] focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {activeTab === "all" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
        {activeTab === "blocked" && (
          <DynamicTable
            columns={blockedColumns}
            data={filteredData}
            rowActions={blockedActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
      </div>

      {/* Unblock Modal */}
      <ReusableModal
        isOpen={modalState.isOpen && modalState.type === 'unblock'}
        onClose={closeModal}
        type="unblock"
        title="Unblock Seller?"
        description="Are you sure you want to unblock this seller?"
        primaryButtonText="Unblock"
        primaryButtonColor="bg-[#F2482D] "
        secondaryButtonText="Cancel"
        iconColor="text-[#497BC6]"
        onPrimaryAction={handleUnblock}
      />
    </div>
  );
};

export default SellerPage;