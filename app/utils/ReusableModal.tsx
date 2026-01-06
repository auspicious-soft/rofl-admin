"use client";
import React, { useState,ReactNode } from "react";
import Image from "next/image";
type ModalType =
  | "block"
  | "schedule"
  | "approve"
  | "reject"
  | "unblock";

interface PrimaryActionPayload {
  remarks?: string;
  date?: string;
  time?: string;
}

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;

  type?: ModalType;
  title: string;
  description?: string;

  icon?: string;
  iconColor?: string;

  primaryButtonText?: string;
  primaryButtonColor?: string;
  onPrimaryAction?: (data?: PrimaryActionPayload) => void;

  showSecondaryButton?: boolean;
  secondaryButtonText?: string;
  onSecondaryAction?: () => void;

  showRemarks?: boolean;
  remarksLabel?: string;
  remarksPlaceholder?: string;
  remarksList?: string[];

  showDateTimeInputs?: boolean;

  children?: ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  type = "block",
  title,
  description,
  icon ,
  iconColor,
  primaryButtonText = "Confirm",
  primaryButtonColor = "bg-red-500 hover:bg-red-600",
  showSecondaryButton = true,
  secondaryButtonText = "Cancel",
  onPrimaryAction,
  onSecondaryAction,
  showRemarks = false,
  remarksLabel = "Add Remarks",
  remarksPlaceholder = "Description",
  remarksList = [],
  showDateTimeInputs = false,
  children,
}) => {
  const [remarks, setRemarks] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  if (!isOpen) return null;

  const handlePrimaryClick = () => {
    const data = {
      remarks: showRemarks ? remarks : undefined,
      date: showDateTimeInputs ? selectedDate : undefined,
      time: showDateTimeInputs ? selectedTime : undefined,
    };
    onPrimaryAction?.(data);
  };

  const handleSecondaryClick = () => {
    onSecondaryAction?.();
    onClose();
  };

  const defaultIcons = {
    block: "/icons/reject.svg",
    schedule: "/icons/calender.svg",
    approve: "/icons/approve.svg",
    reject: "/icons/reject.svg",
    unblock: "/icons/unblock.svg",
  };

  const displayIcon = icon || defaultIcons[type];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-opacity-30 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full animate-fadeIn">
        <div className="p-8">
          {/* Icon */}
          <div
            className={`flex justify-center mb-4 ${
              iconColor || "text-red-500"
            }`}
          >
            <Image src={displayIcon} alt=";lt" width={type ? 120 :90} height={90} />
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold magison text-center mb-2 [text-shadow:2px_2px_0px_rgb(0_0_0/1.00)] text-[#F2482D]">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-center text-gray-600 mb-6 text-sm">
              {description}
            </p>
          )}

          {/* Remark Reasons List */}
          {remarksList.length > 0 && (
            <div className="mb-4 bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Recent Remarks
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                {remarksList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Date and Time Inputs */}
          {showDateTimeInputs && (
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="6/1/00"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-2">
                  Select Time
                </label>
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="6/1/00"
                />
              </div>
            </div>
          )}

          {/* Remarks Input */}
          {showRemarks && (
            <div className="mb-6">
              <label className="block text-xs text-gray-600 mb-2">
                {remarksLabel}
              </label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder={remarksPlaceholder}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />
            </div>
          )}

          {/* Custom Children Content */}
          {children}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {showSecondaryButton && (
              <button
                onClick={handleSecondaryClick}
                className="flex-1 px-6 py-3 border-2 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {secondaryButtonText}
              </button>
            )}
            <button
              onClick={handlePrimaryClick}
              className={`flex-1 px-6 py-3 rounded-lg cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] bg-[#F2482D] font-semibold text-white transition-colors flex items-center justify-center gap-2 ${primaryButtonColor}`}
            >
              {primaryButtonText}
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReusableModal;
