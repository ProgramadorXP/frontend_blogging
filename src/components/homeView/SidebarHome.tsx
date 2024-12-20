import { clsx } from "clsx";

// type SidebarProps = {
//   isSidebarVisible: boolean;
// };

export default function Sidebar({ isSidebarVisible }: { isSidebarVisible: boolean }) {

    const sidebarClasses = clsx(`bg-[#02020A] py-4 h-fit px-6 fixed left-0 lg:h-full lg:z-10 w-[200px] transform transition-transform duration-300 ${
      isSidebarVisible ? "top-28 left-2 xs:left-6" : "-z-10"
    }`);

  return (
    <aside
      className={sidebarClasses}
    >
      <ul className="space-y-4">
        <li className="text-lg font-bold text-[#FCFF4B]">Home</li>
        <li>
          <a href="#" className="hover:text-gray-300 text-[#ffffff]">
            Questions
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 text-[#ffffff]">
            Tags
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 text-[#ffffff]">
            Saved
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 text-[#ffffff]">
            Users
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 text-[#ffffff]">
            Unanswered
          </a>
        </li>
      </ul>
    </aside>
  );
}
