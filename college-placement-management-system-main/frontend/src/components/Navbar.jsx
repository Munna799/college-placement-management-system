// Navbar.jsx
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function Navbar({ isSidebarVisible, toggleSidebar }) {
  const location = useLocation();

  // Page name extraction and formatting
  let pageName = location.pathname.split('/').filter(Boolean).pop();
  if (pageName === 'dashboard') pageName = "home";
  if (pageName === 'tpo') pageName = "TPO";
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className={`sticky top-0 z-20 flex h-20 items-center justify-start bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-700 text-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.9)] transition-all duration-300 ${isSidebarVisible ? 'ml-60 px-4' : 'ml-0'}`}>
      <button className="ml-4 rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md transition hover:bg-white/20" onClick={toggleSidebar}>
        <FaBars size={20} />
      </button>
      <div className="ml-6">
        <p className="text-[10px] uppercase tracking-[0.35em] text-blue-100/80">Portal</p>
        <span className="text-lg font-semibold">
          {pageName}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
