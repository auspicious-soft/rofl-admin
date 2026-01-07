"use client";
import React, { useState } from "react";
import DynamicTable from "@/app/utils/DynamicTable";
import { useRouter } from "next/navigation";
import { Link, OpenEye } from "@/app/utils/icons";
import ReusableModal from "@/app/utils/ReusableModal";

// Example Page Component - Sellers Management
const SellerPage = () => {
  const [activeTab, setActiveTab] = useState<"all" | "blocked">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: string | null;
    selectedRow: any;
  }>({
    isOpen: false,
    type: null,
    selectedRow: null,
  });
  const router = useRouter();

  // Sample data for sellers
  const usersData = [
    {
      itemId: "12345",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "link",
      email: "arisu.anama@gmail.com",
      rewardStatus: "Delivered",
    },
    {
      itemId: "67890",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
    },
    {
      itemId: "12345",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "link",
      email: "arisu.anama@gmail.com",
      rewardStatus: "Delivered",
    },
    {
      itemId: "67890",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
    },
    {
      itemId: "67890",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
    },
    {
      itemId: "67890",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
    },
    {
      itemId: "67890",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
    },
    {
      itemId: "67890",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
    },
    {
      itemId: "67890",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
    },
    {
      itemId: "67890",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
    },
    {
      itemId: "67890",
      nameOfUser: "Name of Item",
      itemName: "Kael Oakley",
      trackingId: "5550987654",
      email: "kaeloakley@gmail.com",
      rewardStatus: "Pending",
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
    { key: "nameOfUser", label: "Name of User" },
    { key: "itemName", label: "Items" },
    {
      key: "trackingId",
      label: "Tracking ID",
      render: (value: string) =>
        value === "link" ? (
          <button
            type="button"
            className="cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => console.log("Clicked")}
          >
            <Link />
          </button>
        ) : (
          value
        ),
    },
    { key: "email", label: "Email Address" },
    {
      key: "rewardStatus",
      label: "Reward Status",
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
      onClick: () => router.push("/admin/items/detail"),
      className: "bg-[#497BC6] text-white hover:bg-[#3a6bb0]",
    },
  ];

  return (
    <div className="min-h-screen py-6">
      <div className="mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap mb-4 justify-between">
          <div className=" hidden md:block gap-2 mb-6"></div>

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

        <DynamicTable
          columns={columns}
          data={filteredData}
          rowActions={activeActions}
          pagination={{ enabled: true, itemsPerPage: 10 }}
        />
      </div>

      {/* Unblock Modal */}
      <ReusableModal
        isOpen={modalState.isOpen && modalState.type === "unblock"}
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
