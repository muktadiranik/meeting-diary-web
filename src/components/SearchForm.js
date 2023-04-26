import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResultAction } from "../redux/actions/searchActions";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getSearchResultAction(e.target.search.value));
    navigate("/search", { replace: true });
  };

  return (
    <>
      <form className="d-flex" method="get" onSubmit={onSubmitHandler}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Anything"
          aria-label="Search"
          name="search"
          onChange={(e) => {
            dispatch(getSearchResultAction(e.target.value));
          }}
        />
        <button className="btn btn-outline-success" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default SearchForm;
