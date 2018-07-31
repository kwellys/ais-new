import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import classname from "classname";

import TopHomePage from "../blocks/HomePage/Top";
import OurExperience from "../blocks/HomePage/OurExperience";

//Questionable
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";
import { Block as Feedback } from "../components/Feedback";
import Filter from "../blocks/WorkPage/Filter";
const SHOW_ALL = "showall";
const setStringToLowerCase = (dirtKey = "") =>
  dirtKey
    .toLocaleLowerCase()
    .split(" ")
    .join("");

export class WorkPageTemplate extends Component {
  state = {
    showPopUp: false,
    links: [
      { title: "services", href: "/services" },
      { title: "expertise", href: "/" },
      { title: "technologies", href: "/" },
      { title: "work", href: "/work" },
      { title: "company", href: "/" }
    ],
    contacts: {
      address: ["220004, Minsk city", "Amuratorskaya st. 4b, office 24"],
      email: "info@aisnovations.com",
      phone: "+375 29 379 90 08"
    },
    popup: {
      sent: {
        text: "You will be returned back in [numberSec] seconds",
        title: "Thank you!"
      },
      title: "Let's get in touch"
    },
    feedback: {
      title: "Let's create something beautiful together",
      fields: [
        {
          error: "Enter name",
          label: "Name",
          name: "name",
          placeholder: "Your name",
          type: "text"
        },
        {
          error: "Phone isn’t correct",
          label: "Phone",
          name: "phone",
          placeholder: "Your phone",
          type: "number"
        },
        {
          error: "Email isn’t correct",
          label: "Email",
          name: "email",
          placeholder: "mail@example.com",
          type: "email"
        },
        {
          error: null,
          label: "Message",
          name: "message",
          placeholder: "Enter your message...",
          type: "textarea"
        }
      ]
    },
    activeFilters: []
  };
  handleComputedFilters = () => {
    const { filters } = this.props;
    const newFilters = filters.reduce((newFilters, filter) => {
      const key = setStringToLowerCase(filter.title);
      const active = key === SHOW_ALL;
      newFilters[key] = { value: filter.title, active };
      return newFilters;
    }, {});
    this.setState({ activeFilters: newFilters });
  };
  componentWillMount() {
    this.handleComputedFilters();
  }

  switchPopUp = () => {
    this.setState(prev => ({ showPopUp: !prev.showPopUp }));
  };

  setEmailError = message => {
    const { feedback } = this.state;
    const EMAIL = "email";
    const newFields = feedback.fields.map(field => {
      if (field.name === EMAIL) {
        return {
          ...field,
          error: message
        };
      }
      return { ...field };
    });
    this.setState({ feedback: { ...feedback, fields: newFields } });
  };
  handleShowAllFilter = () => {
    const { activeFilters } = this.state;
    const newFilters = Object.keys(activeFilters).reduce((newFilters, key) => {
      if (key === SHOW_ALL) {
        newFilters[key] = {
          ...activeFilters[key],
          active: true
        };
      } else {
        newFilters[key] = { ...activeFilters[key], active: false };
      }
      return newFilters;
    }, {});
    this.setState({ activeFilters: newFilters });
  };
  handleCurrentFilter = filterKey => {
    const { activeFilters } = this.state;
    const checkFilters = Object.keys(activeFilters).filter(key => {
      return activeFilters[key].active;
    });

    if (checkFilters.length === 1 && checkFilters.indexOf(filterKey) !== -1) {
      this.handleShowAllFilter();
    } else {
      const newFilters = Object.keys(activeFilters).reduce(
        (newFilters, key) => {
          if (key === filterKey || key === SHOW_ALL) {
            if (key === SHOW_ALL) {
              newFilters[key] = {
                ...activeFilters[filterKey],
                active: false
              };
            } else {
              newFilters[key] = {
                ...activeFilters[filterKey],
                active: !activeFilters[filterKey].active
              };
            }
          } else {
            newFilters[key] = { ...activeFilters[key] };
          }
          return newFilters;
        },
        {}
      );
      this.setState({ activeFilters: newFilters });
    }
  };

  handleFilter = filterKey => {
    if (filterKey === SHOW_ALL) {
      this.handleShowAllFilter();
    } else {
      this.handleCurrentFilter(filterKey);
    }
  };

  filterArray = projects => {
    const { activeFilters } = this.state;
    const filters = Object.keys(activeFilters).filter(key => {
      return activeFilters[key].active;
    });
    if (filters.indexOf(SHOW_ALL) !== -1) {
      return projects;
    }

    const filtredProject = projects.expirienceArray.filter(project => {
      const projectTags = project.tags.map(item => {
        return setStringToLowerCase(item)
      })
      let result = false;
      projectTags.forEach(projectTag => {
        if(filters.indexOf(projectTag) !== -1){
          result = true;
        }
      })
      return result
    });
    return { expirienceArray: filtredProject };
  };
  render() {
    const { topHome, expirience, filters } = this.props;
    const {
      feedback,
      contacts,
      links,
      showPopUp,
      popup,
      activeFilters
    } = this.state;
    const { handleFilter, filterArray } = this;
    const mainClass = classname({ blur: showPopUp });
    return (
      <Fragment>
        <PopUp
          showPopUp={showPopUp}
          onClose={this.switchPopUp}
          popup={popup}
          fields={feedback.fields}
          setEmailError={this.setEmailError}
        />
        <div className={mainClass}>
          <Header links={links} onClick={this.switchPopUp} />
          <TopHomePage {...topHome} />
          <Filter
            filters={filters}
            onClick={handleFilter}
            activeFilters={activeFilters}
          />
          <OurExperience
            request="Сделать запрос"
            title={null}
            expirience={filterArray(expirience)}
          />
          <Feedback
            title={feedback.title}
            fields={feedback.fields}
            setEmailError={this.setEmailError}
          />
          <Footer contacts={contacts} links={links} />
          <style jsx>
            {`
              .blur {
                filter: blur(10px);
              }
            `}
          </style>
        </div>
      </Fragment>
    );
  }
}

WorkPageTemplate.propTypes = {};

const WorkPage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;
  return (
    <WorkPageTemplate
      title={frontmatter.title}
      topHome={frontmatter.topHome}
      expirience={frontmatter.expirience}
      filters={frontmatter.filters}
    />
  );
};

WorkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default WorkPage;

export const WorkPageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        topHome {
          description
          image
          title
        }
        expirience {
          expirienceArray {
            image
            href
            inverted
            more
            reversed
            pointList
            tags
            title
          }
        }
        filters {
          title
        }
      }
    }
  }
`;
