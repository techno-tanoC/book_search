import React, { Component, PropTypes } from 'react'
import Bookmark from './bookmark'

export default class BookmarkList extends Component {
  render() {
    let bs = this.props.bookmarks.map(function(mark) {
      const { title, url } = mark
      return (
        <Bookmark title={title} url={url} />
      );
    });
    return (
      <div className="list">
        {bs}
      </div>
    );
  }
}

Bookmark.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  }))
}
