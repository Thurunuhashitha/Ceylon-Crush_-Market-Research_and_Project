
'use client';

import Link from 'next/link';

export default function ActionButtons() {
  return (
    <div className="space-y-4 mt-6">
      {/* Try Another Outfit Button */}
      <Link href="/cart">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">
          <div className="flex items-center justify-center gap-3">
            <i className="ri-shopping-bag-line text-xl"></i>
            Try Another Outfit
          </div>
        </button>
      </Link>

      {/* Edit Avatar Button */}
      <Link href="/avatar-creation">
        <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">
          <div className="flex items-center justify-center gap-3">
            <i className="ri-edit-line text-xl"></i>
            Edit Avatar
          </div>
        </button>
      </Link>

      {/* Additional Options */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl border border-gray-200 transition-all cursor-pointer whitespace-nowrap">
          <div className="flex items-center justify-center gap-2">
            <i className="ri-download-line"></i>
            Save
          </div>
        </button>
        
        <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl border border-gray-200 transition-all cursor-pointer whitespace-nowrap">
          <div className="flex items-center justify-center gap-2">
            <i className="ri-share-line"></i>
            Share
          </div>
        </button>
      </div>
    </div>
  );
}
