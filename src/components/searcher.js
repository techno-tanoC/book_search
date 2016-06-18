import React, { PropTypes } from 'react'

export default function Searcher(props) {
  return (
    <div className="seach">
      <input type="text" autoFocus={ true } onChange={ props.handleChange } />
    </div>
  )
}

Searcher.propTypes = {
  handleChange: PropTypes.func
}
