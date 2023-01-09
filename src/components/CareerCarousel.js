import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Slider from 'react-slick'

class CareerCarouselTemplate extends React.Component {
    render() {
        const { data } = this.props
        const { edges: jobs } = data.allMarkdownRemark
        const settings = {
            dots: true,
            arrows: true,
            speed: 2000,
            slidesToShow: jobs.length>3?3:jobs.length,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: jobs.length>3?3:jobs.length,
                  }
                },
                {
                  breakpoint: 960,
                  settings: {
                    slidesToShow: jobs.length>2?2:jobs.length
                  }
                },
                {
                  breakpoint: 680,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
          };
          console.log(jobs)
        return (
               <div class="container">
                    <Slider {...settings}>
                        {jobs && jobs.map(({ node: job }) => (
                                <div class="p-3" >
                                    <div class="single-price-package bg-grey mb--30 "style={{"max-width": "380px", "margin": "0 auto"}}>
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
                    </Slider>
                  </div>
        )
    }
}

CareerCarousel.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}


export default function CareerCarousel() {
    return (
        <StaticQuery
            query={graphql`
        query CareerCarouselQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 10
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
            render={(data, count) => <CareerCarouselTemplate data={data} count={count} />}
        />
    );
}
