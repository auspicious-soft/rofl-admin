
import React, { useState, useRef, useEffect } from "react";
import { X, Send, Search, Paperclip } from "lucide-react";
import { Close } from "@/app/utils/icons";

interface Message {
  id: string;
  sender: "user" | "admin";
  text: string;
  timestamp: string;
  status?: "sent" | "delivered" | "read";
}

interface ChatUser {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
  isActive?: boolean;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  disputeData: {
    disputeId: string;
    userName: string;
    status: string;
  };
  onSendMessage?: (userId: string, message: string) => void;
  users?: ChatUser[];
  messages?: Record<string, Message[]>;
}

const ChatModal: React.FC<ChatModalProps> = ({
  isOpen,
  onClose,
  disputeData,
  onSendMessage,
  users: externalUsers,
  messages: externalMessages,
}) => {
  const { disputeId, userName, status } = disputeData
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null);

  const [internalUsers] = useState<ChatUser[]>([
    {
      id: "1",
      name: "Chatgram",
      username: "chatgram",
      lastMessage: "Chatgram Web was updated.",
      timestamp: "10:48",
      unread: true,
    },
    {
      id: "2",
      name: "Jessica Drew",
      username: "jessica.drew",
      lastMessage: "Ok, see you later",
      timestamp: "18:30",
      unread: true,
    },
    {
      id: "3",
      name: "Leta Jaskolski",
      username: "leta.jaskolski",
      lastMessage: "Received. We'll update you once we complete delivery verification.",
      timestamp: "18:18",
      isActive: true,
    },
    {
      id: "4",
      name: "Greg James",
      username: "greg.james",
      lastMessage: "I got a job at SpaceX 🚀🔧",
      timestamp: "18:02",
    },
    {
      id: "5",
      name: "David Moore",
      username: "david.moore2",
      lastMessage: "You I don't remember anything 😎",
      timestamp: "18:18",
    },
    {
      id: "6",
      name: "Emily Donson",
      username: "emily.d",
      lastMessage: "Table for four, 5PM. Be there.",
      timestamp: "17:42",
    },
    {
      id: "7",
      name: "David Moore",
      username: "david.moore3",
      lastMessage: "You I don't remember anything 😎",
      timestamp: "18:18",
    },
    {
      id: "8",
      name: "Office Chat",
      username: "office.chat",
      lastMessage: "Lewis: All done mate 😎",
      timestamp: "17:08",
    },
    {
      id: "9",
      name: "Little Sister",
      username: "little.sis",
      lastMessage: "Tell mom I will be home for tea 💜",
      timestamp: "Wed",
    },
  ]);

  const [internalMessages] = useState<Record<string, Message[]>>({
    "3": [
      {
        id: "1",
        sender: "admin",
        text: "Received. We'll update you once we complete delivery verification.",
        timestamp: "10:30",
        status: "read",
      },
      {
        id: "2",
        sender: "user",
        text: "Received. We'll update you once we complete delivery verification.",
        timestamp: "10:32",
        status: "read",
      },
      {
        id: "3",
        sender: "admin",
        text: "Received. We'll update you once we complete delivery verification.",
        timestamp: "10:35",
        status: "read",
      },
      {
        id: "4",
        sender: "user",
        text: "Received. We'll update you once we complete delivery verification.",
        timestamp: "10:38",
        status: "read",
      },
      {
        id: "5",
        sender: "admin",
        text: "Received. We'll update you once we complete delivery verification.",
        timestamp: "10:40",
        status: "read",
      },
    ],
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const users = externalUsers || internalUsers;
  const allMessages = externalMessages || internalMessages;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedUser) {
      scrollToBottom();
    }
  }, [selectedUser, allMessages]);

  useEffect(() => {
    if (isOpen && users.length > 0 && !selectedUser) {
      const activeUser = users.find((u) => u.isActive) || users[0];
      setSelectedUser(activeUser);
    }
  }, [isOpen, users]);

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedUser) {
      if (onSendMessage) {
        onSendMessage(selectedUser.id, messageInput);
      } else {
        console.log("Message sent:", messageInput);
      }
      setMessageInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentMessages = selectedUser ? allMessages[selectedUser.id] || [] : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="rounded-2xl bg-[#FFF6F6] shadow-2xl w-full max-w-350 h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#FFF6F6] text-white px-4 py-5 flex justify-between items-center shrink-0">
          <h2 className="text-[#F2482D] text-4xl font-normal">Disputes</h2>
          <button
            onClick={onClose}
            className="px-4 bg-white rounded-[10px] text-lg flex items-center gap-2 text-[#605050] py-2 transition-colors"
          >
            <span>Close</span>
            <Close/>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 px-4 pb-4 overflow-hidden">
          <div className="flex gap-4 h-full">
            {/* Left Sidebar - Users List */}
            <div className="w-80 rounded-[10px] border-gray-200 flex flex-col bg-white overflow-hidden">
              {/* Search Bar */}
              <div className="p-4 border-b border-gray-200 shrink-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2482D] focus:border-transparent text-sm"
                  />
                  <Search
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                </div>
              </div>

              {/* Users List - Scrollable */}
              <div className="flex-1 overflow-y-auto">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className={`px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                      selectedUser?.id === user.id ? "bg-[#FFEAE7]" : ""
                    } ${user.isActive ? "bg-[#FFE5E1]" : ""}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden shrink-0">
                        <span className="text-sm font-semibold text-gray-600">
                          {user.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-sm text-gray-900 truncate">
                            {user.name}
                          </h3>
                          <span className={`text-xs shrink-0 ml-2 ${user.unread ? "text-green-500" : "text-gray-500"}`}>
                            {user.timestamp}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mt-1">
                          {user.lastMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Chat Area */}
            <div className="flex-1 flex flex-col border border-[#E6E6E6] rounded-lg overflow-hidden">
              {selectedUser ? (
                <>
                  {/* Chat Header */}
                  <div className="bg-[#2A2A2A] text-white px-6 py-4 flex rounded-t-lg items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                        <span className="text-lg font-semibold">
                          {selectedUser.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">{selectedUser.name}</h2>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="text-sm px-4 py-1.5 bg-[#F2482D] hover:bg-[#d63d28] rounded-md transition-colors">
                        Mark As Resolved
                      </button>
                    </div>
                  </div>

                  {/* Messages Container - Scrollable */}
                  <div className="flex-1 overflow-y-auto px-6 py-4 bg-[#FFF6F4]">
                    {currentMessages.length > 0 ? (
                      currentMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`mb-4 flex ${
                            message.sender === "admin" ? "justify-end" : "justify-start"
                          }`}
                        >
                          {message.sender === "user" && (
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2 shrink-0">
                              <span className="text-xs font-semibold">
                                {selectedUser.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div className={`max-w-[70%]`}>
                            <div
                              className={`px-4 py-3 rounded-2xl ${
                                message.sender === "admin"
                                  ? "bg-[#F2482D] text-white rounded-br-none"
                                  : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                              }`}
                            >
                              <p className="text-sm">{message.text}</p>
                            </div>
                            <div
                              className={`text-xs text-gray-500 mt-1 ${
                                message.sender === "admin" ? "text-right" : "text-left"
                              }`}
                            >
                              {message.timestamp}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        No messages yet
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="px-6 py-4 bg-white border-t border-gray-200 shrink-0">
                    <div className="flex items-center gap-2 border rounded-lg border-gray-300">
                      <button className="p-3 bg-[#272727] rounded-lg text-white transition-colors">
                        <Paperclip size={20} />
                      </button>
                      <input
                        type="text"
                        placeholder="Type a message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 px-4 py-2.5  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2482D] focus:border-transparent"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="p-2.5 rounded-lg text-[#A49898  ] transition-colors"
                      >
                        <Send size={20} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Select a user to start chatting
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;