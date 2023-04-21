import React from "react";

const SearchForm = () => {
  return (
    <>
      <form className="d-flex" method="get">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Anything"
          aria-label="Search"
          name="search"
        />
        <button className="btn btn-outline-success" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default SearchForm;
