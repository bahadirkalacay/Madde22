import React, { useState } from "react";
import "./SearchBox.css";
import { GiPopcorn } from "react-icons/gi";

const SearchBox = (props) => {
  const [myInput, setMyInput] = useState("");

  return (
    <div className="search">
      <h3>
        The open movie database <GiPopcorn />
      </h3>
      <h5>Movie Title</h5>

      <input
        className="form"
        placeholder="Type to search..."
        name="myInput"
        onChange={(event) => setMyInput(event.target.value)}
      />
      <button
        onClick={() => props.setSearchValue(myInput)}
        className="btn btn--search"
        type="submit"
        id="myInput"
      >
        Search
      </button>
      <button
        onClick={() => props.setSearchValue("")}
        className="btn btn--clear"
        type="reset"
        id="myInput"
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBox;
