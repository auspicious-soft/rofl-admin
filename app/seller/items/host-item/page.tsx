"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function HostItem() {
  const router = useRouter();

  const [ownsPrize, setOwnsPrize] = useState(false);

  // Item images
  const [images, setImages] = useState<string[]>([]);
  const itemImageInputRef = useRef<HTMLInputElement | null>(null);

  // Prize image (SEPARATE UPLOAD)
  const [selectedPrizeImage, setSelectedPrizeImage] = useState<string>("");
  const prizeImageInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    payout: "",
    timeline: "",
    description: "",
  });

  /* ---------------- ITEM IMAGE UPLOAD ---------------- */
  const handleItemImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const previews = Array.from(files).map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...previews]);
  };

  /* ---------------- PRIZE IMAGE UPLOAD ---------------- */
  const handlePrizeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setSelectedPrizeImage(preview);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F5] flex justify-center py-4">
      <div className="w-full ">
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
              <label className="block text-xs mb-1">Desired Net Payout</label>
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

          {/* Item Images */}
          <div>
            <label className="block text-xs mb-2">Item Images</label>
            <div className="flex flex-wrap gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-lg overflow-hidden border"
                >
                  <Image
                    src={img}
                    alt=""
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={() => itemImageInputRef.current?.click()}
                className="w-20 h-20 border rounded-lg text-sm text-red-500"
              >
                + Add More
              </button>

              <input
                ref={itemImageInputRef}
                type="file"
                multiple
                hidden
                onChange={handleItemImageUpload}
              />
            </div>
          </div>

          {/* Own Prize Checkbox */}
          <div className="mt-6">
            <label className="flex items-center max-w-36 gap-2 text-sm text-[#605050]">
              <input
                type="checkbox"
                checked={ownsPrize}
                onChange={(e) => {
                  setOwnsPrize(e.target.checked);
                  if (!e.target.checked) {
                    setSelectedPrizeImage("");
                  }
                }}
                className="w-4 h-4 border border-[#E6E6E6] accent-[#F04C2E]"
              />
              I own this prize
            </label>
          </div>

          {/* Select Image with Prize (UI SAME, LOGIC FIXED) */}
          <p className="mt-4 text-xs text-[#605050] ">
            Select Image with Prize
          </p>
          <div className="relative max-w-xs">
            <input
              type="text"
              readOnly
              placeholder="Select"
              value={selectedPrizeImage ? "Prize Image Selected" : ""}
              className={`w-full border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm pr-10 bg-white ${
                ownsPrize ? "cursor-pointer" : "cursor-not-allowed opacity-60"
              }`}
              onClick={() => {
                if (!ownsPrize) return;
                prizeImageInputRef.current?.click();
              }}
            />

            <button
              type="button"
              disabled={!ownsPrize}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 disabled:opacity-50"
              onClick={() => prizeImageInputRef.current?.click()}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 11-2.83-2.83l8.49-8.48" />
              </svg>
            </button>

            <input
              ref={prizeImageInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handlePrizeImageUpload}
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() => router.push("/seller/items/host-item/45")}
            className="bg-[#F04C2E] w-52 h-14 border border-[#000000] text-white rounded-xl flex items-center justify-center gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Next <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
