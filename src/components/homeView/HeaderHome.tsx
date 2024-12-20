import { Dispatch, SetStateAction } from "react";

type HeaderMainProps = {
  isSidebarVisible: boolean;
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
};

export default function HeaderMain({
  setIsSidebarVisible,
  isSidebarVisible,
}: HeaderMainProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        {/* Hamburger menu for small screens */}
        <button
          className="lg:hidden mr-4 text-white"
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        >
          ☰
        </button>
        <h1 className="text-xl font-bold text-yellow">Main Questions</h1>
      </div>
      <button className="bg-yellow text-[#02020A] font-medium py-2 px-4 rounded hover:bg-[#ced118]">
        Ask a question
      </button>
    </div>
  );
}
