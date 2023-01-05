import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ServiceRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: services } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {services &&
          services.map(({ node: service }) => (
            <div className="is-parent column is-6" key={service.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <header>
                  {service.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: service.frontmatter.featuredimage,
                          alt: `featured image thumbnail for service ${service.frontmatter.title}`,
                          width:
                            service.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            service.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={service.fields.slug}
                    >
                      {service.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                  </p>
                </header>
                <p>
                  {service.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={service.fields.slug}>
                    Learn more →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

ServiceRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function ServiceRoll() {
  return (
    <StaticQuery
      query={graphql`
        query ServiceRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "service-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  image {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ServiceRollTemplate data={data} count={count} />}
    />
  );
}
