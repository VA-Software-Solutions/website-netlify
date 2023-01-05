import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ fileName, alt, ...restProps }) => (
  <StaticQuery
    query={graphql`
      query BaseImageQuery {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `}
    render={({ images }) => {
      const image = images.edges.find((n) => n.node.relativePath.includes(fileName));

      if (!image) {
        return null;
      }

      const imageData = image.node.childImageSharp.gatsbyImageData;
      return <GatsbyImage alt={alt} image={imageData} {...restProps} />;
    }}
  />
);

Image.defaultProps = {
  alt: null,
};

export default Image;
