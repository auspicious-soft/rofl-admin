"use client"
import React, { useState } from 'react';
import DynamicTable from '@/app/utils/DynamicTable';


// Example Page Component - Sellers Management
const ExamplePage = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'blocked'>('active');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for sellers
  const sellersData = [
    { srNo: '12345', sellerName: 'Name of Item', email: 'john3@example.com', joined: 'January 24, 2025', itemsListed: '24', timeLine: '7 days' },
    { srNo: '7890', sellerName: 'Name of Item', email: 'marcho@testco.com', joined: 'March 5, 2025', itemsListed: '12', timeLine: '30 days' },
    { srNo: '12345', sellerName: 'Name of Item', email: 'john3@example.com', joined: 'January 24, 2025', itemsListed: '93', timeLine: '30 days' },
    { srNo: '67890', sellerName: 'Name of Item', email: 'marcho@example.com', joined: 'March 5, 2025', itemsListed: '23', timeLine: '7 days' },
    { srNo: '12345', sellerName: 'Name of Item', email: 'john@testco.com', joined: 'January 24, 2025', itemsListed: '18', timeLine: '14 days' },
    { srNo: '67890', sellerName: 'Name of Item', email: 'marcho@testco.com', joined: 'March 5, 2025', itemsListed: '6', timeLine: '30 days' },
    { srNo: '67890', sellerName: 'Name of Item', email: 'marcho@testco.com', joined: 'March 5, 2025', itemsListed: '8', timeLine: '30 days' },
    { srNo: '67890', sellerName: 'Name of Item', email: 'marcho@testco.com', joined: 'March 5, 2025', itemsListed: '6', timeLine: '30 days' },
    { srNo: '67890', sellerName: 'Name of Item', email: 'marcho@testco.com', joined: 'March 5, 2025', itemsListed: '6', timeLine: '30 days' },
    { srNo: '67890', sellerName: 'Name of Item', email: 'marcho@testco.com', joined: 'March 5, 2025', itemsListed: '6', timeLine: '30 days' },
    { srNo: '67890', sellerName: 'Name of Item', email: 'marcho@testco.com', joined: 'March 5, 2025', itemsListed: '6', timeLine: '30 days' },
    { srNo: '67890', sellerName: 'Name of Item', email: 'marcho@testco.com', joined: 'March 5, 2025', itemsListed: '6', timeLine: '30 days' },
  ];

  const columns = [
    { key: 'srNo', label: 'Sr No.' },
    { key: 'sellerName', label: 'Seller Name' },
    { key: 'email', label: 'Email' },
    { key: 'joined', label: 'Joined' },
    { key: 'itemsListed', label: 'Items Listed' },
    { key: 'timeLine', label: 'Time Line' }
  ];

  const actions = {
    view: (row: any) => {
      console.log('View seller:', row);
      alert(`Viewing seller: ${row.sellerName}`);
    }
  };

  // Filter data based on search
  const filteredData = sellersData.filter(seller => 
    seller.sellerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.srNo.includes(searchQuery)
  );

  return (
    <div className="min-h-screen  p-6">
      <div className=" mx-auto">
        {/* Tab Navigation */}
        <div className='flex justify-between'>
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-5 bg-White rounded-[10px] h-12 ${activeTab === 'active' ? 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]' : 'shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]'} transition-colors ${
              activeTab === 'active'
                ? 'bg-[#F2482D] text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Active Sellers
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-5 bg-White rounded-[10px] h-12 ${activeTab === 'pending' ? 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]' : 'shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]'} transition-colors ${
              activeTab === 'pending'
                ? 'bg-[#F2482D] text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Pending Approval
          </button>
          <button
            onClick={() => setActiveTab('blocked')}
            className={`px-5 bg-White rounded-[10px] h-12 ${activeTab === 'blocked' ? 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]' : 'shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]'} transition-colors ${
              activeTab === 'blocked'
                ? 'bg-[#F2482D] text-white'
                : 'bg-white text-gray-700 border border-gray-300'
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

        {/* Table */}
        <DynamicTable
          columns={columns}
          data={filteredData}
          actions={actions}
          pagination={{ enabled: true, itemsPerPage: 10 }}
        />
      </div>
    </div>
  );
};

export default ExamplePage;