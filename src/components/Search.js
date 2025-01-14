import React from "react";

function Search({ search, setSearch }) {
 
  function handleChange(event) {
    setSearch(event.target.value)
    
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={search}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
