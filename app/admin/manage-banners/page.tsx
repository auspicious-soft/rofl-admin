"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { X, Plus } from "lucide-react";
import { Delete } from "@/app/utils/icons";

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
}

const ImageUploadGrid = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<UploadedImage[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: UploadedImage[] = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
    e.target.value = "";
  };

  const handleRemove = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="flex flex-wrap gap-4">
      {/* Uploaded Images */}
      {images.map((img) => (
        <div
          key={img.id}
          className="relative w-42.5 h-30 rounded-xl overflow-hidden bg-gray-100"
        >
          <Image
            src={img.preview}
            alt="uploaded"
            fill
            className="object-cover"
          />

          {/* Remove Button */}
          <button
            onClick={() => handleRemove(img.id)}
            className="absolute top-2 right-2 bg-[#F2482D] text-white rounded-full p-1 shadow"
          >
            <Delete/>
          </button>
        </div>
      ))}

      {/* Add More */}
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-42.5 h-30 rounded-xl border border-dashed border-[#F2482D] flex flex-col items-center justify-center text-[#F2482D] bg-white hover:bg-[#fff1ef] transition"
      >
        <Plus size={20} />
        <span className="text-sm mt-1">Add More</span>
      </button>

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploadGrid;