"use client";
import React, { useState } from "react";
import DynamicTable from "@/app/utils/DynamicTable";
import { useRouter } from "next/navigation";
import { Check, CheckCircle, X } from "lucide-react";
import { Approve, Delete, OpenEye } from "@/app/utils/icons";
import ReusableModal from "@/app/utils/ReusableModal";

// Example Page Component - Sellers Management
const SellerPage = () => {
  const [activeTab, setActiveTab] = useState<"active" | "pending" | "blocked">(
    "active"
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
  const sellersData = [
    {
      srNo: "12345",
      sellerName: "Name of Item",
      email: "john3@example.com",
      joined: "January 24, 2025",
      itemsListed: "24",
      timeLine: "7 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "7890",
      sellerName: "Name of Item",
      email: "marcho@testco.com",
      joined: "March 5, 2025",
      itemsListed: "12",
      timeLine: "30 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "12345",
      sellerName: "Name of Item",
      email: "john3@example.com",
      joined: "January 24, 2025",
      itemsListed: "93",
      timeLine: "30 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "67890",
      sellerName: "Name of Item",
      email: "marcho@example.com",
      joined: "March 5, 2025",
      itemsListed: "23",
      timeLine: "7 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "12345",
      sellerName: "Name of Item",
      email: "john@testco.com",
      joined: "January 24, 2025",
      itemsListed: "18",
      timeLine: "14 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "67890",
      sellerName: "Name of Item",
      email: "marcho@testco.com",
      joined: "March 5, 2025",
      itemsListed: "6",
      timeLine: "30 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "67890",
      sellerName: "Name of Item",
      email: "marcho@testco.com",
      joined: "March 5, 2025",
      itemsListed: "8",
      timeLine: "30 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "67890",
      sellerName: "Name of Item",
      email: "marcho@testco.com",
      joined: "March 5, 2025",
      itemsListed: "6",
      timeLine: "30 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "67890",
      sellerName: "Name of Item",
      email: "marcho@testco.com",
      joined: "March 5, 2025",
      itemsListed: "6",
      timeLine: "30 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "67890",
      sellerName: "Name of Item",
      email: "marcho@testco.com",
      joined: "March 5, 2025",
      itemsListed: "6",
      timeLine: "30 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "67890",
      sellerName: "Name of Item",
      email: "marcho@testco.com",
      joined: "March 5, 2025",
      itemsListed: "6",
      timeLine: "30 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
    {
      srNo: "67890",
      sellerName: "Name of Item",
      email: "marcho@testco.com",
      joined: "March 5, 2025",
      itemsListed: "6",
      timeLine: "30 days",
      blockedOn: "January 24, 2025",
      adminNotes: "Inappropriate content and policy violations reported here",
    },
  ];

  const columns = [
    { key: "srNo", label: "Sr No." },
    { key: "sellerName", label: "Seller Name" },
    { key: "email", label: "Email" },
    { key: "joined", label: "Joined" },
    { key: "itemsListed", label: "Items Listed" },
    { key: "timeLine", label: "Time Line" },
  ];

  // Filter data based on search
  const filteredData = sellersData.filter(
    (seller) =>
      seller.sellerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.srNo.includes(searchQuery)
  );

  // Modal handlers
  const openModal = (type: string, row: any) => {
    setModalState({ isOpen: true, type, selectedRow: row });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, selectedRow: null });
  };

  const handleApprove = (data: any) => {
    console.log("Approved seller:", modalState.selectedRow, data);
    closeModal();
    // Add your approval logic here
  };

  const handleReject = (data: any) => {
    console.log("Rejected seller:", modalState.selectedRow, data);
    closeModal();
    // Add your rejection logic here
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
      onClick: () => router.push("/admin/sellers/45"),
      className: "bg-[#497BC6] text-white hover:bg-[#3a6bb0]",
    },
  ];

  const pendingActions = [
    {
      key: "approve",
      icon: <Check size={16} />,
      variant: "icon",
      onClick: (row: any) => openModal('approve', row),
      className: "bg-[#497BC6] text-white hover:bg-[#497BC6]",
    },
    {
      key: "reject",
      icon: <Delete />,
      variant: "icon",
      onClick: (row: any) => openModal('reject', row),
      className: "bg-[#F2482D] text-white hover:bg-[#F2482D]",
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
      onClick: (row: any) => console.log("View", row),
      className: "bg-[#497BC6] text-white hover:bg-[#497BC6]",
    },
  ];

  const AttachmentsTabs = () => {
    const tabs = ["ID Front", "ID Back", "Selfie"];

    return (
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <span
            key={tab}
            className="px-2 py-1 text-xs border border-[#E6E6E6] rounded cursor-pointer bg-[#FFF6F6] "
          >
            {tab}
          </span>
        ))}
      </div>
    );
  };

  const pendingColumns = [
    { key: "sellerName", label: "Seller Name" },
    { key: "email", label: "Email" },
    { key: "joined", label: "Submitted" },
    {
      key: "attachments",
      label: "Attachments",
      render: () => <AttachmentsTabs />,
    },
  ];

  const blockedColumns = [
    { key: "sellerName", label: "Seller Name" },
    { key: "email", label: "Email" },
    { key: "blockedOn", label: "Blocked On" },
    { key: "adminNotes", label: "Admin Notes" },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTab("active")}
              className={`px-5 bg-White cursor-pointer rounded-[10px] h-12 ${
                activeTab === "active"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "active"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Active Sellers
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`px-5 bg-White cursor-pointer rounded-[10px] h-12 ${
                activeTab === "pending"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "pending"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Pending Approval
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
              Blocked Sellers
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

        {activeTab === "active" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
        {activeTab === "pending" && (
          <DynamicTable
            columns={pendingColumns}
            data={filteredData}
            rowActions={pendingActions}
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

      {/* Approve Modal */}
      <ReusableModal
        isOpen={modalState.isOpen && modalState.type === 'approve'}
        onClose={closeModal}
        type="approve"
        title="Approve?"
        description="Are you sure you want to approve this seller?"
        primaryButtonText="Yes"
        primaryButtonColor="bg-[#F2482D]"
        secondaryButtonText="No"
        remarksList={[
          "The images are not properly visible. Update and apply again.",
          "Front ID still needs improvement."
        ]}
        iconColor="text-green-500"
        onPrimaryAction={handleApprove}
      />

      {/* Reject Modal */}
      <ReusableModal
        isOpen={modalState.isOpen && modalState.type === 'reject'}
        onClose={closeModal}
        type="reject"
        title="Reject?"
        description="Are you sure you want to reject this seller?"
        primaryButtonText="Reject"
        primaryButtonColor="bg-[#F2482D] "
        showRemarks={true}
        remarksLabel="Add Remarks"
        remarksPlaceholder="Description"
        remarksList={[
          "The images are not properly visible. Update and apply again."
        ]}
        onPrimaryAction={handleReject}
      />

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