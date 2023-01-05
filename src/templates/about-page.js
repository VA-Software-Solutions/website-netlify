import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import TextImageSection from "../sections/text-image-section";
import FeatureSection from "../sections/feature-section";
import TeamSection from "../sections/team-section";
// eslint-disable-next-line
export const AboutPageTemplate = ({ 
  heading,
  subheading,
  about,
  values,
  team

}) => {
  return (
    <div>
      <div class="hero-slider  hero-slider-1" id="slider">
        <div class="single-slide small-header" style={{
                'background-image': "url(/img/slider/slider-03.png)"
              }}>
            <div class="hero-content-one container">
                <div class="row">
                    <div class="col-lg-12"> 
                        <div class="slider-text-info text-white text-center">
                            <h4>{subheading} </h4>
                            <h1>{heading}</h1>
                            <div class="slider-button">
                                <a href="/contact" class="slider-btn white-btn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TextImageSection data={about} reverse={true}></TextImageSection>
    <FeatureSection data={values}></FeatureSection>
    <TeamSection data={team}></TeamSection>
    </div>
    
  );
};

AboutPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  about: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    subheading: PropTypes.string,
    content: PropTypes.string
  }),
  values: PropTypes.shape({
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
  }),
  team: PropTypes.shape({
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    subheading: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
  })
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post)
  return (
    <Layout>
      <AboutPageTemplate
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        about={post.frontmatter.about}
        values={post.frontmatter.values}
        team={post.frontmatter.team}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        description,
        heading,
        subheading,
        about {
          primaryTitle
          secondaryTitle
          subheading
          content,
          image {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
        }
        values {
          primaryTitle
          secondaryTitle
          cards {
            title
            description
            icon
          }
        }
        team {
          primaryTitle
          secondaryTitle
          subheading
          cards {
            name
            position
            image {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  }
`;
