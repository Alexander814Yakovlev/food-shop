import { useState } from "react";

function Search({callBack = Function.prototype}) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    callBack(value);
  };

  return (
    <div className="row" style={{ position: "relative" }}>
      <div className="input-field col s12">
        <input
          type="search"
          id="searchField"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </div>
      <button
        className="btn"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "#989898",
        }}
        onClick={handleSubmit}
      >
        <i className="material-icons" style={{ fontSize: 26 }}>
          search
        </i>
      </button>
    </div>
  );
}

export default Search;
