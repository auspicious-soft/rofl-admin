"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Page() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    payout: "",
    timeline: "",
    description: "",
  });

  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const previews = Array.from(files).map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...previews]);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F5] flex justify-center py-4">
      <div className="w-full max-w-6xl">
        {/* ===================== STEP 1 ===================== */}
        
          <>
            <h2 className="text-sm font-medium text-gray-800 mb-2">
              Basic Details
            </h2>

            <div className="bg-white rounded-xl border border-[#E6E6E6] p-6">
              {/* Item Title */}
              <div className="mb-4">
                <label className="block text-xs text-[#605050] mb-1">
                  Item Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
                />
              </div>

              {/* Payout + Timeline */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs mb-1">
                    Desired Net Payout
                  </label>
                  <input
                  type="number"
                    value={formData.payout}
                    onChange={(e) =>
                      setFormData({ ...formData, payout: e.target.value })
                    }
                    placeholder="$10,000"
                    className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1">Select Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm"
                  >
                    <option value="">Select</option>
                    <option>7 Days</option>
                    <option>14 Days</option>
                    <option>30 Days</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-xs mb-1">Description</label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm resize-none"
                />
              </div>

              {/* Images */}
              <div>
                <label className="block text-xs mb-2">Item Images</label>
                <div className="flex gap-3">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 rounded-lg overflow-hidden border"
                    >
                      <Image src={img} alt="" width={80} height={80} />
                    </div>
                  ))}

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-20 h-20 border rounded-lg text-sm text-red-500"
                  >
                    + Add More
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>

            {/* Next */}
            <div className="flex justify-end mt-6">
              <button
                onClick={()=>router.push("/admin/items/host-item/detail")}
                className="bg-[#F04C2E] w-52 h-14 border border-[#000000] text-white rounded-xl flex items-center justify-center gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                Next <ArrowRight />
              </button>
            </div>
          </>
        

        {/* ===================== STEP 2 (IMAGE-2) ===================== */}
        
      </div>
    </div>
  );
}
