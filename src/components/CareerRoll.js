import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class CareerRollTemplate extends React.Component {
    render() {
        const { data } = this.props
        const { edges: jobs } = data.allMarkdownRemark

        return (

            <div class="priceing-package-area section-pt section-pb-70" id="pricing">
                <div class="container">
                    <div class="row">
                        {jobs &&
                            jobs.map(({ node: job }) => (
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-price-package bg-grey mb--30">
                                        <div class="price-title">
                                            <h4>{job.frontmatter.date}</h4>
                                            <h2>{job.frontmatter.title}</h2>
                                        </div>
                                        <div class="price-list">
                                            {job.frontmatter.skills && job.frontmatter.skills.length ? (
                                                <div style={{ marginTop: `4rem` }}>
                                                    <ul>
                                                        {job.frontmatter.skills.map((skill) => (
                                                            <li>
                                                                {skill}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div class="price-btn">
                                            <Link className="button" to={job.fields.slug}>
                                                Learn more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        )
    }
}

CareerRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}


export default function CareerRoll() {
    return (
        <StaticQuery
            query={graphql`
        query CareerRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "job-post" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  skills
                }
              }
            }
          }
        }
      `}
            render={(data, count) => <CareerRollTemplate data={data} count={count} />}
        />
    );
}
