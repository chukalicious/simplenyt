import React, { useState } from "react";

const SearchBar = (props) => {
  console.log("props in the SearchBar", props);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = (e) => {
    props.getTopic(searchTerm);
    setSearchTerm("");
  };
  return (
    <div>
      <h1>SearchBar</h1>
      <input onChange={handleChange} value={searchTerm} />
      <button onClick={handleClick}>enter</button>
    </div>
  );
};

export default SearchBar;
