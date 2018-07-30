import classname from "classname";
import Experience from "../../../components/Experience";
import DefaultLayout from "../../../layouts/Default";
import PropTypes from "prop-types";
import React from "react";
import Button from "../../../components/Button";

import style from "./style";

const Filter = ({ filters }) => {
  // const experienceClasses = classname('our-experience__wrapper', { 'our-experience__wrapper-divided': divided });
console.log(filters)
  return (
    <div className="filter">
      {/* <DefaultLayout title={expirience.title}>
        <div className={experienceClasses}>
          {expirience.expirienceArray.map(exp => (
            <Experience key={exp.title} descr={exp} inverted={exp.inverted} more={exp.more} reversed={exp.reversed} />
          ))}
        </div>
      </DefaultLayout> */}
      <Button title="Show all" />
      {filters.map((filter, index) => <Button title={filter.title} key={index} />)}
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
