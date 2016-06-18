import React, { Component, PropTypes } from 'react'

export default class Searcher extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.handleChange(e)
  }

  render() {
    return (
      <div className="seach">
        <input type="text" autoFocus={ true } onChange={ this.onChange } />
      </div>
    )
  }
}

Searcher.propTypes = {
  handleChange: PropTypes.func
}
