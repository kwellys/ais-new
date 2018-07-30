import classname from "classname";
import Experience from "../../../components/Experience";
import DefaultLayout from "../../../layouts/Default";
import PropTypes from "prop-types";
import React from "react";

import style from "./style";

const OurExperience = ({ divided, expirience }) => {
  const experienceClasses = classname("our-experience__wrapper", {
    "our-experience__wrapper-divided": divided
  });

  return (
    <div>
      <DefaultLayout title={expirience.title}>
        <div className={experienceClasses}>
          {expirience.expirienceArray.map(exp => {
            return (
              <Experience
                key={exp.title}
                descr={exp}
                inverted={exp.inverted}
                more={exp.more}
                reversed={exp.reversed}
                tag={exp.tag}
              />
            );
          })}
        </div>
      </DefaultLayout>
      <style jsx>{style}</style>
    </div>
  );
};

OurExperience.propTypes = {
  divided: PropTypes.bool,
  expirience: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
  })
};
OurExperience.defaultProps = {
  divided: false,
  expirience: [{}]
};

export default OurExperience;
