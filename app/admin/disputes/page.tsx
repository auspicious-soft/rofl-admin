"use client"
import DynamicTable from "@/app/utils/DynamicTable";
import { OpenEye } from "@/app/utils/icons";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ChatModal from "../components/ChatModel";

const Disputes = () => {
  const [activeTab, setActiveTab] = useState<"open" | "closed">("open");
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

  // Sample data for disputes
  const disputesData = [
    {
      disputeId: "DSP-12345",
      item: "Item #12345",
      nameOfPerson: "John Doe",
      userType: "Seller",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-7890",
      item: "Item #7890",
      nameOfPerson: "Marco Smith",
      userType: "Seller",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-45678",
      item: "Item #45678",
      nameOfPerson: "Alex Johnson",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-67890",
      item: "Item #67890",
      nameOfPerson: "Emily Brown",
      userType: "Seller",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-33445",
      item: "Item #33445",
      nameOfPerson: "Chris Martin",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-33445",
      item: "Item #33445",
      nameOfPerson: "Chris Martin",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-33445",
      item: "Item #33445",
      nameOfPerson: "Chris Martin",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-33445",
      item: "Item #33445",
      nameOfPerson: "Chris Martin",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-33445",
      item: "Item #33445",
      nameOfPerson: "Chris Martin",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-33445",
      item: "Item #33445",
      nameOfPerson: "Chris Martin",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-33445",
      item: "Item #33445",
      nameOfPerson: "Chris Martin",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-33445",
      item: "Item #33445",
      nameOfPerson: "Chris Martin",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
    {
      disputeId: "DSP-33445",
      item: "Item #33445",
      nameOfPerson: "Chris Martin",
      userType: "Buyer",
      lastActivity: "January 24, 2025",
    },
  ];

  const columns = [
    { key: "disputeId", label: "Dispute ID" },
    { key: "item", label: "Item" },
    { key: "nameOfPerson", label: "Name Of Person" },
    { key: "userType", label: "User Type" },
    { key: "lastActivity", label: "Last Activity" },
  ];

  // Filter data based on search
  const filteredData = disputesData.filter(
    (dispute) =>
      dispute.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.nameOfPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.userType.includes(searchQuery)
  );

  // Modal handlers
  const openModal = (type: string, row: any) => {
    setModalState({ isOpen: true, type, selectedRow: row });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, selectedRow: null });
  };

  // Handle sending messages (future socket integration point)
  const handleSendMessage = (message: string) => {
    console.log("Message sent:", message);
    // TODO: Integrate with socket.io here
    // socket.emit('sendMessage', {
    //   disputeId: modalState.selectedRow?.disputeId,
    //   message: message,
    //   sender: 'admin'
    // });
  };

  const activeActions = [
    {
      key: "view",
      icon: <OpenEye />,
      variant: "icon",
      onClick: (row: any) => openModal("chat", row),
      className: "bg-[#497BC6] text-white hover:bg-[#3a6bb0]",
    },
  ];

  return (
    <div className="bg-[#FFF6F4] py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5">
          <p className="text-sm font-medium magison text-[#2A2A2A]">
            Disputes This Week
          </p>
          <p className="mt-3 text-base font-semibold text-[#F2482D]">12</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5">
          <p className="text-sm font-medium magison text-[#2A2A2A]">
            Last Draw
          </p>
          <p className="mt-3 text-base font-medium text-[#F2482D]">
            Dec 24, 2024
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5">
          <p className="text-sm font-medium magison text-[#2A2A2A]">
            Entries Collected This Week
          </p>
          <p className="mt-3 text-base font-semibold text-[#F2482D]">
            12,405
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5 flex justify-between items-start">
          <div>
            <p className="text-sm font-medium magison text-[#2A2A2A]">
              Available Gift Cards
            </p>
            <div className="flex flex-wrap justify-between items-center">
              <p className="mt-3 text-base font-semibold text-[#F2482D]">20</p>
              <button className="text-sm text-[#F2482D] hover:underline">
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-7">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-between mb-4">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTab("open")}
              className={`px-5 bg-White cursor-pointer rounded-[10px] h-12 ${
                activeTab === "open"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] border border-[#000000]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "open"
                  ? "bg-[#F2482D] border-[#000000] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Open Disputes
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`px-5 bg-White cursor-pointer rounded-[10px] h-12 ${
                activeTab === "closed"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] border border-[#000000]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "closed"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Closed
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

        {activeTab === "open" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
        {activeTab === "closed" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
      </div>

      {/* Chat Modal */}
      {modalState.isOpen && modalState.selectedRow && (

        <ChatModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          disputeData={{
            disputeId: modalState.selectedRow.disputeId,
            userName: modalState.selectedRow.nameOfPerson,
            status: "Mark As Resolved",
          }}
          onSendMessage={handleSendMessage}
        />
    
      )}
    </div>
  );
};

export default Disputes;