import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Tailwind CSS classes will replace styled-components
const SidebarLink = ({ to, onClick, active, children, hasSubnav }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex h-14 w-full items-center justify-between rounded-xl px-3 text-base font-medium text-slate-200 no-underline transition-all duration-200 hover:border-l-4 hover:border-cyan-400 hover:bg-white/10 ${!hasSubnav ? 'hover:border-cyan-400' : ''} ${active ? 'border-l-4 border-cyan-400 bg-white/10 text-white shadow-sm' : 'bg-transparent text-slate-300'}`}
  >
    {children}
  </Link>
);

const SidebarLabel = ({ children }) => (
  <span className="ml-3">{children}</span>
);

const DropdownLink = ({ to, active, children }) => (
  <Link
    to={to}
    className={`flex h-12 items-center pl-8 text-sm font-medium text-slate-300 no-underline transition-all duration-200 hover:border-l-4 hover:border-cyan-400 hover:bg-white/10 ${active ? 'border-l-4 border-cyan-400 bg-white/10 text-white' : 'bg-transparent'}`}
  >
    {children}
  </Link>
);

const SubMenu = ({ item, currentPath }) => {
  const [subnav, setSubnav] = useState(false);

  useEffect(() => {
    if (item.subNav && item.subNav.some(subItem => currentPath.includes(subItem.path))) {
      setSubnav(true);
    } else {
      setSubnav(false);
    }
  }, [currentPath, item.subNav]);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubnav}
        active={currentPath === item.path}
        hasSubnav={!!item.subNav}  // Pass whether it has subnav
      >
        <div className="flex items-center">
          {item.icon}
          <SidebarLabel>
            {item.title}
          </SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>

      {subnav && (
        <div className="mx-2 mb-2 rounded-2xl border border-white/10 bg-slate-900/70 py-1">
          {item.subNav.map((subItem, index) => (
            <DropdownLink
              to={subItem.path}
              key={index}
              active={currentPath === subItem.path}
            >
              {subItem.icon}
              <SidebarLabel>
                {subItem.title}
              </SidebarLabel>
            </DropdownLink>
          ))}
        </div>
      )}
    </>
  );
};

export default SubMenu;
