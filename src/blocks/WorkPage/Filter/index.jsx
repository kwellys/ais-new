import classname from "classname";
import Experience from "../../../components/Experience";
import DefaultLayout from "../../../layouts/Default";
import PropTypes from "prop-types";
import React from "react";
import Button from "../../../components/Button";

import style from "./style";

const prerapeKey = (dirtKey = "") =>
  dirtKey
    .toLocaleLowerCase()
    .split(" ")
    .join("");

const Filter = ({ filters, onClick, activeFilters }) => {
  return (
    <div className="filter">
      <div className="filter__container">
        {filters.map((filter, index) => (
          <div className="filter__button" key={index}>
            <Button
              pressed={activeFilters[prerapeKey(filter.title)].active}
              title={filter.title}
              small
              onClick={e => onClick(prerapeKey(filter.title))}
            />
          </div>
        ))}
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object)
};
Filter.defaultProps = {
  filters: []
};

export default Filter;
