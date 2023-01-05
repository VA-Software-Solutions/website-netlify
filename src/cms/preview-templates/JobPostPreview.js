import React from 'react'
import PropTypes from 'prop-types'
import  Moment  from 'moment'
import { JobPostTemplate } from '../../templates/job-post'

const JobPostPreview = ({ entry, widgetFor }) => {
  const skills = entry.getIn(['data', 'skills'])
  const date = entry.getIn(['data', 'date']);
  var dateString = Moment(date).format("MMMM DD, YYYY");
  return (

    <JobPostTemplate
      content={widgetFor('body')}
      date={dateString}
      skills={skills && skills.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

JobPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default JobPostPreview
