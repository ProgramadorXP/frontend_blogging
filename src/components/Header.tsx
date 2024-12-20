import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <>
      <header className="sticky top-0 z-50 w-full py-2 px-2 xs:px-6 bg-[#02020A] text-white flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <Link to={"/"} className="ml-2 text-xl font-bold">
            COSMUNITY
          </Link>
        </div>
        <button
          className="lg:hidden text-yellow hover:text-[#ced118]"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/* Main Menu */}
        {!isAuthPage && (
          <nav className="hidden lg:flex flex-1 items-center pl-4 lg:ml-6">
            <SearchInput />
            <ul className="flex-1 flex justify-end items-center gap-2">
              <a
                href=""
                className="p-2 transition-colors hover:bg-zinc-800 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </a>
              <span className="p-2 transition-colors hover:bg-zinc-800 rounded-lg">
                <img
                  src="/avatar.png"
                  alt="logo"
                  className="w-8 h-8 rounded-full"
                />
              </span>
            </ul>
            {/* Responsive Menu */}
            {/** TODO: Add responsive menu to see profile options */}
          </nav>
        )}
      </header>
      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="absolute z-50 inset-0 bg-[#02020A] bg-opacity-90 flex flex-col items-center justify-center text-white space-y-6 lg:hidden">
          <Link to={"/"} className="text-yellow hover:text-[#ced118] text-xl">
            Home
          </Link>
          <a href="#" className="text-yellow hover:text-[#ced118] text-xl">
            About
          </a>
          <a href="#" className="text-yellow hover:text-[#ced118] text-xl">
            Contact
          </a>
          {!isAuthPage && (
            <>
              <div className="bg-zinc-800 flex rounded-lg lg:w-[55%]">
                <SearchInput />
              </div>
              <ul className="lg:flex-1 flex justify-end items-center gap-2">
                <a
                  href=""
                  className="p-2 transition-colors hover:bg-zinc-800 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </a>
                <a
                  href=""
                  className="p-2 transition-colors hover:bg-zinc-800 rounded-lg"
                >
                  <img
                    src="/avatar.png"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </ul>
            </>
          )}
          <button
            onClick={toggleNav}
            className="mt-4 text-yellow hover:text-[#ced118]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
