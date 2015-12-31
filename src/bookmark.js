import React, { Component, PropTypes } from 'react'

export default class Bookmark extends Component {
  constructor(props) {
    super(props)
    this.openTab = this.openTab.bind(this)
  }

  openTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tab) {
      let index = tab[0].index + 1
      chrome.tabs.create({ url: this.props.url, index: index, active: true });
    }.bind(this));
  }

  render() {
    return (
      <div className="bookmark shadow" onClick={ this.openTab }>
        <div>
          <div className="title">{ this.props.title }</div>
          <div className="url">{ this.props.url }</div>
        </div>
      </div>
    );
  }
}

Bookmark.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}
