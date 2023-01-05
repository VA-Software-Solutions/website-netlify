import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "./../styles/pages/index.sass"
import Layout from "../components/Layout";
import TextSection from "../sections/text-section";
import ContactSection from "../sections/contact-section";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  about,
  description,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
    <div className="hero-slider hero-slider-4" id="slider">
      <div className="single-slide">
        <div className="hero-content-one container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="slider-text-info">
                <h1>
                  {heading}
                </h1>
                <h4>{subheading}</h4>
                <div className="slider-button">
                  <Link
                     className="slider-btn theme-btn"
                      activeClass="active"
                      to="/services"
                      spy={true}
                      smooth="easeInOutQuart"
                    >
                      Read more
                    </Link>
                    <Link
                     className="slider-btn white-btn"
                      activeClass="active"
                      to="/contact"
                      spy={true}
                      smooth="easeInOutQuart"
                    > 
                      Contact us
                    </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="slider-img">
                {/* <Image fileName={imageFileName} alt="slider"></Image> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TextSection data={about}></TextSection>
    <ContactSection></ContactSection>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  about: PropTypes.object,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  console.log(frontmatter);
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        about={frontmatter.about}
        description={frontmatter.description}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        description
        about {
          primaryTitle
          secondaryTitle
          subheading
          content
        }
      }
    }
  }
`;
