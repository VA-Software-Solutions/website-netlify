import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ServiceTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const ServiceContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <ServiceContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

ServiceTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const Service = ({ data }) => {
  const { markdownRemark: service } = data;

  return (
    <Layout>
      <ServiceTemplate
        content={service.html}
        contentComponent={HTMLContent}
        description={service.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${service.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${service.frontmatter.description}`}
            />
          </Helmet>
        }
        title={service.frontmatter.title}
      />
    </Layout>
  );
};

Service.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Service;

export const pageQuery = graphql`
  query ServiceByID($id: String!) {
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
