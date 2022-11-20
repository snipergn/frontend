import React, { useState } from "react";
import "./filter.css";
import FilterIcon from "../Assets/filter.png";

const Filter = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div className="locationfilter">
      <div class="ph3 mt">
        <a
          class="f6 link dim br1 ba ba12 ph3 pv2 mb2 dib black"
          href="#0"
          onClick={handleClick}
        >
          <img
            src={FilterIcon}
            alt="Iconfilter"
            className="filtericon"
            width="17px"
          />
          FILTERS
        </a>
      </div>
      {isShown && (
        <div class="card">
          <div class="container">
            <p className="text"> Country</p>
            <input className="inputfilter" type="search" />
            <p className="text"> Wind probability</p>
            <input className="inputfilter" type="search" /> <br />
            <button className="applyfilter"> Apply FILTER</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
