import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const SectionWrapperTemplate = ({
  primaryTitle,
  secondaryTitle,
  subheading,
  children,
  whiteBackground
}) => {
  var cls = "bg-grey";
  if (whiteBackground) {
    cls = '';
  }
  return (
    <div className={"our-team-area section-pt section-pb-70 " + cls} id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ml-auto mr-auto">
            <div class="section-title">
              <h2>{primaryTitle} <span>- {secondaryTitle}</span></h2>
              <p>{subheading}</p>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

SectionWrapperTemplate.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  children: PropTypes.object,
  whiteBackground: PropTypes.bool
}

const SectionWrapper = ({ data, children, whiteBackground }) => {
  return (
    <SectionWrapperTemplate
      primaryTitle={data.primaryTitle}
      secondaryTitle={data.secondaryTitle}
      subheading={data.subheading}
      children={children}
      whiteBackground={whiteBackground}
    />
  );
};

SectionWrapper.propTypes = {
  data: PropTypes.shape({
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    subheading: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
  }),
  whiteBackground: PropTypes.bool,
  children: PropTypes.object
};

export default SectionWrapper;
