import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
  return (
  <AboutPageTemplate
    title={data.title}
    heading={data.heading}
    subheading={data.subheading}
    description={data.description}
    about={data.about || {}}
    values={data.values || {}}
    team={data.team || {}}
  />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
