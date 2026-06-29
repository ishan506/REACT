import { useState } from "react";
 

function App() {
  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

   
