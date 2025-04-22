'use client';

import { useState } from 'react';

export const AboutDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-black hover:underline">企業情報 / About</button>

      {open && (
        <div className="absolute bg-white shadow-lg mt-2 w-72 z-50 text-sm border border-gray-200">
          <a
            href="#home_brand"
            className="block px-4 py-2 hover:bg-gray-100 text-black"
          >
            ブランド About The Uniproperty Brand
          </a>
          <a
            href="#home_services"
            className="block px-4 py-2 hover:bg-gray-100 text-black"
          >
            事業概要 Service Overview
          </a>
          <a
            href="#home_corporateProfile"
            className="block px-4 py-2 hover:bg-gray-100 text-black"
          >
            会社概要 Corporate Profile
          </a>
        </div>
      )}
    </div>
  );
};
