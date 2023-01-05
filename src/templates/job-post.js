import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const JobPostTemplate = ({
  title,
  contentComponent,
  date,
  content
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
        <div class="hero-slider hero-slider-1 " id="slider">
        <div class="single-slide small-header">
                  <div class="hero-content-one container">
                <div class="row">
                    <div class="col-lg-12"> 
                        <div class="slider-text-info text-center">
                            <h1>{title}
                            <br/>
                            <span>{date}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <section className="section">
          <div className="container">
            <div className="content">
                <PostContent content={content} />
            </div>
          </div>
        </section>
      </div>
  );
};

JobPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
};

const JobPost = ({ data }) => {
  const { markdownRemark: job } = data;

  return (
    <Layout>
        <JobPostTemplate
          content={job.html}
          date={job.frontmatter.date}
          contentComponent={HTMLContent}
          title={job.frontmatter.title}
        />
    </Layout>
  );
};

JobPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default JobPost;

export const pageQuery = graphql`
  query JobPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
