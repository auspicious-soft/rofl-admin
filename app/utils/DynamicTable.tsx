import React, { useState } from "react";
import { Eye, CheckCircle } from "lucide-react";
import { Edit, OpenEye } from "./icons";

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

interface DynamicTableProps {
  title?: string;
  columns: TableColumn[];
  data: any[];
  actions?: {
    view?: (row: any) => void;
    approve?: (row: any) => void;
  };
  pagination?: PaginationConfig;
  headerActions?: HeaderActions;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  title,
  columns,
  data,
  actions,
  pagination = { enabled: false, itemsPerPage: 10 },
  headerActions,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = pagination.itemsPerPage || 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate current data to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = pagination.enabled
    ? data.slice(startIndex, endIndex)
    : data;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {(title || headerActions?.dropdowns?.length) && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          {title && (
            <h2 className="text-[#F2482D] text-2xl font-normal magison leading-8 [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)]">{title}</h2>
          )}

          {headerActions?.dropdowns && (
            <div className="flex gap-3 flex-wrap">
              {headerActions.dropdowns.map((dropdown, index) => (
                <select
                  key={index}
                  value={dropdown.value}
                  onChange={(e) => dropdown.onChange(e.target.value)}
                  className="px-3 py-2 text-sm border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#F2482D]"
                >
                  {dropdown.label && (
                    <option value="" disabled>
                      {dropdown.label}
                    </option>
                  )}
                  {dropdown.options.map((opt, optIdx) => (
                    <option key={`${opt.value}-${optIdx}`} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#FFF6F6]">
            <tr className="border-b border-gray-200">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="text-left py-3 px-4 text-sm font-medium text-gray-600"
                >
                  {column.label}
                </th>
              ))}
              {actions && (
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
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
                {actions && (
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      {actions.view && (
                        <button
                          onClick={() => actions.view(row)}
                          className="w-8 h-8 flex items-center justify-center bg-[#497BC6] rounded text-white hover:bg-[#3a6bb0] transition-colors"
                        >
                          <OpenEye />
                        </button>
                      )}
                      {actions.approve && (
                        <button
                          onClick={() => actions.approve(row)}
                          className="w-8 h-8 flex items-center justify-center bg-[#4FA662] rounded text-white hover:bg-[#3d8a4f] transition-colors"
                        >
                          <Edit />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls - Only show if pagination is enabled and there are multiple pages */}
      {pagination.enabled && totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded text-sm font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400  cursor-not-allowed border-gray-200"
                  : "bg-white text-gray-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] hover:bg-gray-50 border-gray-300"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded  text-sm font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                  : "bg-[#F2482D] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] hover:bg-[#D63B24]"
              }`}
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
