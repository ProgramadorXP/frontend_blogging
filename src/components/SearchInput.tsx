import { useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    //Aquí puedes manejar la lógica de búsqueda
    console.log("Searching for:", query);
  };

  return (
    <div className="bg-zinc-800 flex rounded-lg w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="px-4 py-2 w-full text-white bg-transparent border-0 focus:outline-none"
        placeholder="Search..."
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 font-medium bg-yellow text-[#02020A] rounded-r-md hover:bg-[#ced118] focus:outline-none"
      >
        Search
      </button>
    </div>
  );
}
