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
      {filters.map((filter, index) => (
        <Button
          pressed={
            activeFilters[prerapeKey(filter.title)].active
          }
          title={filter.title}
          key={index}
          onClick={e => onClick(prerapeKey(filter.title))}
        />
      ))}
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
