import React, { useCallback, useState } from "react";
import { questions } from "../api/questions";
import Sidebar from "../components/homeView/SidebarHome";
import HeaderMain from "../components/homeView/HeaderHome";
import { filters } from "../api/filters";

export default function HomeView() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (
        e.target instanceof Element &&
        (e.target.closest("aside") || e.target.closest("button"))
      ) {
        return;
      }
      setIsSidebarVisible(false);
    },
    []
  );

  //Reuse of styles with dinamic or constant values
  const buttonClass =
    "bg-[#27272a] py-2 px-4 rounded hover:bg-gray-600 text-[#ffffff]";
  const tagClass = "bg-green-600 text-white text-xs px-2 py-1 rounded";

  return (
    <main
      className="w-full relative flex min-h-screen"
      onClick={handleOutsideClick}
    >
      {/* Sidebar */}
      <Sidebar isSidebarVisible={isSidebarVisible} />

      {/* Main content */}
      <section className="lg:ml-[200px] w-full py-4 px-2 xs:px-6">
        {/* Header */}
        <HeaderMain
          setIsSidebarVisible={setIsSidebarVisible}
          isSidebarVisible={isSidebarVisible}
        />

        {/* Filter and meta information */}
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={buttonClass}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Questions list */}
        <div className="space-y-4">
          {/* Question item */}
          {questions.map((question) => (
            <div key={question.id} className="p-4 bg-[#27272a] rounded-lg">
              <h2 className="text-lg font-semibold hover:underline cursor-pointer text-[#FCFF4B]">
                {question.title}
              </h2>
              <div className="text-sm text-gray-400">
                {question.answers} answers • {question.views} views
              </div>
              <div className="mt-2 space-x-2">
                {question.tags.map((tag) => (
                  <span
                    key={tag}
                    className={tagClass}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
