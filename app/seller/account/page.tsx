"use client";

import { ArrowRight, Paperclip } from "lucide-react";
import { useState } from "react";

export default function HostItem() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessType: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    govIdFront: null as File | null,
    govIdBack: null as File | null,
    selfieWithId: null as File | null,
  });

  return (
    <div className="min-h-screen bg-[#FFF5F5] flex justify-center py-4">
      <div className="w-full">
        <h2 className="text-sm font-medium text-gray-800 mb-2">
          Basic Details
        </h2>

        <div className="bg-white rounded-xl border border-[#E6E6E6] p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs mb-1">First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs mb-1">Business Name</label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">Business Type</label>
              <input
                type="text"
                value={formData.businessType}
                onChange={(e) =>
                  setFormData({ ...formData, businessType: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs mb-1">Email</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">Phone Number</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-xs mb-1">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">State</label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">Zip Code</label>
              <input
                type="text"
                value={formData.zip}
                onChange={(e) =>
                  setFormData({ ...formData, zip: e.target.value })
                }
                className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        <h2 className="text-sm font-medium text-gray-800 mt-4 mb-2">
          Upload Verification Proof
        </h2>

        <div className="bg-white rounded-xl border border-[#E6E6E6] p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            {[
              ["Government ID (Front)", "govIdFront"],
              ["Government ID (Back)", "govIdBack"],
            ].map(([label, key]) => (
              <div key={key}>
                <label className="block text-xs mb-1">{label}</label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [key]: e.target.files?.[0] || null,
                      })
                    }
                    className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 pr-10 text-sm file:hidden"
                  />
                  <Paperclip
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-1">
                Selfie holding ID
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      selfieWithId: e.target.files?.[0] || null,
                    })
                  }
                  className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 pr-10 text-sm file:hidden"
                />
                <Paperclip
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={() => console.log(formData)}
            className="bg-[#F04C2E] w-52 h-14 border border-black text-white rounded-xl flex items-center justify-center gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Submit <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
