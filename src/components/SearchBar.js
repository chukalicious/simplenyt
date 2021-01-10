import React, { useState } from "react";

const SearchBar = (props) => {
  const [selection, setSelection] = useState("");
  const handleChange = (e) => {
    setSelection(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    props.getTopic(selection);
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        {/* <input onChange={handleChange} value={selection} /> */}
        <label htmlFor="select">Choose a topic: </label>
        <select id="topics" value={selection} onChange={handleChange}>
          <option selected value="select">
            --Select a Topic--
          </option>
          <option value="arts">Arts</option>
          <option value="automobiles">Automobiles</option>
          <option value="books">Books</option>
          <option value="business">Business</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="health">Health</option>
          <option value="home">Home</option>
          <option value="insider">Insider</option>
          <option value="magazine">Magazine</option>
          <option value="movies">Movies</option>
          <option value="nyregion">NY Region</option>
          <option value="obituaries">Obituaries</option>
          <option value="opinion">Opinion</option>
          <option value="politics">Politics</option>
          <option value="realestate">Real Estate</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="sundayreview">Sunday Review</option>
          <option value="technology">Technology</option>
          <option value="theater">Theater</option>
          <option value="t-magazine">Times Magazine</option>
          <option value="travel">Travel</option>
          <option value="upshot">Upshot</option>
          <option selected value="us">
            US
          </option>
          <option value="world">World</option>
        </select>
        <button>enter</button>
      </form>
    </div>
  );
};

export default SearchBar;
