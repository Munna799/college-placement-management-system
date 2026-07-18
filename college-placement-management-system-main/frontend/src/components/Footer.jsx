import React from 'react';

function Footer({ isSidebarVisible }) {
  return (
    <>
      <div className={`bottom-0 right-0 flex h-fit w-full items-center justify-between border-t border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 text-slate-300 shadow-[0_-10px_30px_-20px_rgba(15,23,42,0.7)] transition-all duration-300 max-md:py-4 md:py-6 max-sm:text-sm ${isSidebarVisible ? 'md:ml-60 md:w-[calc(100%-15rem)] px-10' : 'ml-0 px-4'}`}>
        <div className="flex flex-col text-left md:flex-row md:items-center">
          <span className="font-semibold">Developed & Maintained by</span>
          <span className="px-1">
            <a
              href="https://www.linkedin.com/in/moinnaik/"
              target='_blanck'
              className='cursor-pointer font-bold text-blue-300 no-underline transition hover:text-white'
            >
              Moin MN
            </a>
          </span>
        </div>

        <div className="mt-2 flex flex-col text-right sm:mt-0 sm:flex-row sm:items-center">
          <span className="font-semibold">Version</span>
          <span className="px-1">1.0.1</span>
        </div>
      </div>
    </>
  )
}
export default Footer
