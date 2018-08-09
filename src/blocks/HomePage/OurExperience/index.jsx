import classname from "classname";
import Experience from "../../../components/Experience";
import DefaultLayout from "../../../layouts/Default";
import PropTypes from "prop-types";
import React from "react";

import style from "./style";

const OurExperience = ({ divided, expirience, homepage }) => {
  const experienceClasses = classname("our-experience__wrapper", {
    "our-experience__wrapper-divided": divided
  }, {"our-experience__wrapper-homepage": homepage});

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
                description={exp.descr}
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
  }),
  homepage: PropTypes.bool,
};
OurExperience.defaultProps = {
  divided: false,
  expirience: [{}],
  homepage: false,
};

export default OurExperience;
