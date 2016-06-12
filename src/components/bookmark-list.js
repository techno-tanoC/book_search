import React, { Component, PropTypes } from 'react'
import Bookmark from './bookmark'

export default class BookmarkList extends Component {
  render() {
    let bs =this.props.bookmarks
      .filter(function(mark) { return mark.url != undefined })
      .map(function(mark) {
        const { title, url, id } = mark
        return (
          <Bookmark key={id} title={title} url={url} />
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
