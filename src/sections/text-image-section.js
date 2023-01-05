import React from "react";
import PropTypes from "prop-types";
import remark from 'remark'
import remarkHTML from 'remark-html'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
// eslint-disable-next-line
export const TextImageSectionTemplate = ({
    primaryTitle,
    secondaryTitle,
    subheading,
    content,
    image,
    whiteBackground,
    reverse
}) => {
  var cls = "bg-grey";
  var flexDirection = "row";
if(whiteBackground){
   cls = '';
}
if(reverse){
  flexDirection = "row-reverse";
}
  return (
        <div className={cls + " section-ptb"}>
          <div className="container">
            <div className="row" style={{
                'flex-direction': flexDirection,
                alignItems: "center"
              }}>
              
              <div className="col-lg-6 col-md-12 p-4" style={{textAlign: "center"}}>
                <PreviewCompatibleImage imageInfo={image}></PreviewCompatibleImage>
              </div>
              <div className="col-lg-6 col-md-12 p-4">
                <div className="about-title">
                  <h2>
                    {primaryTitle}
                    <span> - {secondaryTitle}</span>
                  </h2>
                  <h4>
                    {subheading}
                  </h4>
                </div>
                <div className="about-text" dangerouslySetInnerHTML={{ __html: toHTML(content) }}>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

TextImageSectionTemplate.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  whiteBackground: PropTypes.bool,
  reverse: PropTypes.bool
}

const TextImageSection = ({ data, whiteBackground, reverse }) => {
  console.log(data)
  console.log(whiteBackground)
  console.log(reverse)
  return (
      <TextImageSectionTemplate
        primaryTitle={data.primaryTitle}
        secondaryTitle={data.secondaryTitle}
        subheading={data.subheading}
        content={data.content}
        image={data.image}
        reverse={reverse}
        whiteBackground={whiteBackground}
      />
  );
};

TextImageSection.propTypes = {
  data: PropTypes.shape({
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    subheading: PropTypes.string,
    content: PropTypes.string
  }),
  whiteBackground: PropTypes.bool,
  reverse: PropTypes.bool
};

export default TextImageSection;
