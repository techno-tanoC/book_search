import React, { Component, PropTypes } from 'react'

export default class Bookmark extends Component {
  constructor(props) {
    super(props)
    this.open = this.open.bind(this)
  }

  open() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let tab = tabs[0]
      if(tab.url == "chrome://newtab/") {
        chrome.tabs.update({ url: this.props.url })
      } else {
        let index = tab.index + 1
        chrome.tabs.create({ url: this.props.url, index: index, active: true });
      }
    }.bind(this));
  }

  render() {
    let { title, url } = this.props
    let favicon = "http://www.google.com/s2/favicons?domain=" + url.split('/')[2];
    return (
      <div className="bookmark shadow" onClick={ this.open }>
        <div className="image">
          <img className="favicon" src={ favicon } />
        </div>
        <div className="container">
          <div className="title">{ title }</div>
          <div className="url">{ url }</div>
        </div>
      </div>
    );
  }
}

Bookmark.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}
