import React from "react";
import PropTypes from "prop-types";
import "./Section.css";

const Section = React.forwardRef(({ section, ImageComponent }, ref) => (
  <section className="section" id={`${section.id}`} ref={ref}>
    <h1 className="title-section">{section.name}</h1>
    <div className="section-content">{section.content}</div>
    {ImageComponent && <ImageComponent />}
  </section>
));

Section.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    recommendations: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        porcentaje: PropTypes.number,
        allowed: PropTypes.bool,
      }),
    ).isRequired,
  }).isRequired,
  ImageComponent: PropTypes.elementType,
};

export default Section;