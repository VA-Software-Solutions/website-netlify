import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line
export const FeatureSectionTemplate = ({
  primaryTitle,
  secondaryTitle,
  cards
}) => {
  console.log(cards)
  return (
    <div class="feature-area section-pt section-pb-70" id="feature">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ml-auto mr-auto">
            <div class="section-title">
              <h2>{primaryTitle}</h2>
              <p>{secondaryTitle}</p>
            </div>
          </div>
        </div>

        <div class="row">
          {cards.map((value) => {
            return (
              <div class="col-lg-3 col-md-6">
                <div class="signle-feature">
                  <div class="feature-icon">
                    <span className={"bi bi-"+value.icon}></span>
                  </div>
                  <div class="feature-content">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
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

FeatureSectionTemplate.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object)
}

const FeatureSection = ({ data }) => {
  console.log(data)
  return (
    <FeatureSectionTemplate
      primaryTitle={data.primaryTitle}
      secondaryTitle={data.secondaryTitle}
      cards={data.cards}
    />
  );
};

FeatureSection.propTypes = {
  data: PropTypes.shape({
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
  })
};

export default FeatureSection;
