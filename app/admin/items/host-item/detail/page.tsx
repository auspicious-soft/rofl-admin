"use client"
import ReusableModal from '@/app/utils/ReusableModal'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const HostItemDetail = () => {
  const[modalOpen,setModalOpen]=useState(false)
  return (
    <div>
    <div>
      <div className="w-full">
            {/* Card */}
            <div className="bg-white rounded-2xl border border-[#E6E6E6] p-6">
              <div className="grid grid-cols-12 gap-6">
                {/* LEFT – Images */}
                <div className="col-span-4">
                  <div className="rounded-2xl overflow-hidden mb-3">
                   
                      <Image
                        src={""}
                        alt=""
                        width={400}
                        height={300}
                        className="w-full h-55 object-cover"
                      />
                    
                  </div>

                  <div className="flex gap-2">
                  
                      <Image
                        src={""}
                        alt=""
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                  
                  </div>
                </div>

                {/* RIGHT – Info */}
                <div className="col-span-8 grid grid-cols-2 gap-x-10">
                  {/* Left info */}
                  <div>
                    <h2 className="text-[22px] [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison font-normal text-[#F04C2E] magison leading-7">
                      gfdgdf
                    </h2>

                    <div className="mt-6 space-y-3 text-sm text-gray-700">
                      <div>
                        <p className="text-gray-400 text-xs">Total Spots</p>
                        654
                      </div>

                      <div>
                        <p className="text-gray-400 text-xs">Total Pot</p>
                        65
                      </div>

                      <div>
                        <p className="text-gray-400 text-xs">Platform Fee</p>
                        <p>$ 656</p>
                      </div>
                    </div>
                  </div>

                  {/* Right info */}
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="text-gray-400 text-xs">
                        Desired Net Payout
                      </p>
                      <p className="text-[22px] [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison font-normal text-[#F04C2E] magison">
                        $ 65
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400 text-xs">Ticket Price</p>
                      <p>$ 655</p>
                    </div>

                    <div>
                      <p className="text-gray-400 text-xs">IRS Withholding</p>
                      <p>$ 654</p>
                    </div>

                    <div>
                      <p className="text-gray-400 text-xs">Processing Fee</p>
                      <p>$ 654</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="flex justify-end items-center gap-6 mt-6">
              <button
              onClick={()=> setModalOpen(true)}
               className="text-sm underline text-gray-600">
                Schedule Item
              </button>

              <button className="bg-[#F04C2E] w-52 h-14 border border-[#000000] text-white rounded-xl flex items-center justify-center gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-sm font-medium">Publish</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        
      </div>

      <ReusableModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type="schedule"
          title="Schedule Item"
          description="Select desired time to schedule this item."
          primaryButtonText="Schedule"
          primaryButtonColor="bg-[#F2482D]"
          showDateTimeInputs={true}
          iconColor="text-red-500"
          onPrimaryAction={()=> setModalOpen(false)}
        />
        </div>
  )
}

export default HostItemDetail