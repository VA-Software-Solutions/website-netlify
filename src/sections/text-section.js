import React from "react";
import PropTypes from "prop-types";
import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
// eslint-disable-next-line
export const TextSectionTemplate = ({
    primaryTitle,
    secondaryTitle,
    subheading,
    content,
}) => {

  return (
        <div className="bg-grey section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="about-title">
                  <h2>
                    {primaryTitle}
                    <span> - {secondaryTitle}</span>
                  </h2>
                  <h4>
                    {subheading}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 order-2 order-lg-1">
                <div className="about-content-inner">
                  <div className="about-text two-column" dangerouslySetInnerHTML={{ __html: toHTML(content) }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

TextSectionTemplate.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.string
}

const TextSection = ({ data }) => {

  return (
      <TextSectionTemplate
        primaryTitle={data.primaryTitle}
        secondaryTitle={data.secondaryTitle}
        subheading={data.subheading}
        content={data.content}
      />
  );
};

TextSection.propTypes = {
  data: PropTypes.shape({
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    subheading: PropTypes.string,
    content: PropTypes.string
  })
};

export default TextSection;
