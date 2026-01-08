"use client";
import { Close } from "@/app/utils/icons";
import { Paperclip } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DisputesModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter()

  const disputes = [
    {
      id: 1,
      user: "Lena Jankowski",
      role: "User Account",
      status: "In Progress",
      messages: [
        {
          sender: "system",
          text: "Resolved: We'll update you once we complete delivery verification.",
          avatar: "/api/placeholder/40/40",
        },
        {
          sender: "admin",
          text: "We are currently checking the courier details.",
          avatar: "/api/placeholder/40/40",
        },
      ],
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#FFF6F6] rounded-lg shadow-xl w-full min-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <h2 className="text-4xl font-normal magison [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] text-[#F2482D]">
            Disputes
          </h2>
          <button
            onClick={() => {
              setIsOpen(false)
              router.push("/seller/dashboard")
            }}
            className="px-4 bg-white rounded-[10px] text-lg flex items-center gap-2 text-[#605050] py-2 transition-colors"
          >
            <span>Close</span>
            <Close />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-4 overflow-hidden">
          {/* Dispute Header */}
          <div className="bg-[#272727] border border-[#E6E6E6] rounded-t-lg text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full overflow-hidden">
                <Image
                  src="/api/placeholder/40/40"
                  alt="Lena Jankowski"
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Lena Jankowski</h3>
                <p className="text-xs text-gray-400">User Account</p>
              </div>
            </div>
            <span className="text-[#F2482D] text-lg font-bold">
              In Progress
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 border border-[#E6E6E6] overflow-y-auto p-4 space-y-4">
            {disputes[0].messages.map((msg, index) => {
              const isMine = msg.sender === "admin";

              return (
                <div
                  key={index}
                  className={`flex items-end gap-3 ${
                    isMine ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Avatar – left side */}
                  {!isMine && (
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={msg.avatar}
                        alt="User"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Message bubble */}
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${
                      isMine
                        ? "bg-[#F2482D] text-white rounded-br-none"
                        : "bg-gray-100 text-gray-700 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Avatar – right side */}
                  {/* {isMine && (
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={msg.avatar}
                        alt="Admin"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  )} */}
                </div>
              );
            })}
          </div>

          {/* Input Area */}
          <div className="border-t border rounded-b-lg border-[#E6E6E6]  p-4">
            <div className="flex items-center">

              <div className="w-8 h-10 bg-gray-800 rounded-l-lg shrink-0 flex items-center justify-center">
                <Paperclip size={20} color="white" />
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Lena Jankowski"
                  className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10l16-8-6 18-2-10-8-0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputesModal;
