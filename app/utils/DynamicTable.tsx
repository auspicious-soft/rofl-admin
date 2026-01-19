"use client";

import React, { useState } from "react";

interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface HeaderDropdown {
  label?: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

interface HeaderActions {
  dropdowns?: HeaderDropdown[];
}

interface PaginationConfig {
  enabled: boolean;
  itemsPerPage?: number;
}

interface RowAction {
  key: string;
  icon?: React.ReactNode;
  label?: string;
  onClick: (row: any) => void;
  className?: string;
  variant?: "icon" | "text";
}

interface DynamicTableProps {
  title?: string;
  columns: TableColumn[];
  data: any[];
  rowActions?: any;
  pagination?: PaginationConfig;
  headerActions?: HeaderActions;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  title,
  columns,
  data,
  rowActions,
  pagination = { enabled: false, itemsPerPage: 10 },
  headerActions,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = pagination.itemsPerPage || 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = pagination.enabled
    ? data.slice(startIndex, endIndex)
    : data;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {(title || headerActions?.dropdowns?.length) && (
        <div className="flex justify-between mb-4">
          {title && (
            <h2 className="text-[#F2482D] text-2xl font-normal leading-8 [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] magison">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#FFF6F6]">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="text-left py-3 px-4 text-sm font-medium text-[#272727]"
                >
                  {column.label}
                </th>
              ))}
              {rowActions && (
                <th className="py-3 px-4 text-sm font-medium text-[#272727]">
                  Action
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {currentData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="py-3 px-4 text-sm text-gray-700"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}

                {rowActions && (
                  <td className="py-3 px-4">
                    <div className="flex justify-center gap-2">
                      {rowActions.map((action: any, actionIndex: number) => {
                        const isText = action.variant === "text";

                        const key = `action-${action.key}-${index}-${actionIndex}`;

                        return (
                          <button
                            key={key}
                            onClick={() => action.onClick(row)}
                            className={
                              isText
                                ? "text-[#497BC6] text-sm cursor-pointer font-medium hover:underline"
                                : `w-8 h-8 flex items-center justify-center cursor-pointer  rounded transition-colors ${action.className}`
                            }
                          >
                            {isText ? action.label : action.icon}
                          </button>
                        );
                      })}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagination.enabled && totalPages > 1 && (
        <div className="mt-4 flex flex-wrap justify-between">
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <div className="flex flex-wrap gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 cursor-pointer border rounded disabled:opacity-50"
            >
              Previous
            </button>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 bg-[#F2482D] cursor-pointer text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicTable;
