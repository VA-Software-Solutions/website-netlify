import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const TeamSectionTemplate = ({
  primaryTitle,
  secondaryTitle,
  subheading,
  cards,
  whiteBackground,
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
        <div class="row" style={{ justifyContent: "center" }}>
          {cards.map((item) => {
            return (
              <div class="col-lg-3 col-md-6">
                <div class="single-team mb--30">
                  <div class="team-imgae">
                    <PreviewCompatibleImage imageInfo={item.image}></PreviewCompatibleImage>
                  </div>
                  <div class="team-info">
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

TeamSectionTemplate.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  subheading: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
  whiteBackground: PropTypes.bool
}

const TeamSection = ({ data, whiteBackground }) => {
  return (
    <TeamSectionTemplate
      primaryTitle={data.primaryTitle}
      secondaryTitle={data.secondaryTitle}
      subheading={data.subheading}
      cards={data.cards}
      whiteBackground={whiteBackground}
    />
  );
};

TeamSection.propTypes = {
  data: PropTypes.shape({
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    subheading: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
  }),
  whiteBackground: PropTypes.bool
};

export default TeamSection;
