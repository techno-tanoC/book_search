import React, { Component, PropTypes } from 'react'
import Bookmark from './bookmark'

export default function BookmarkList(props) {
  const bs = props.bookmarks
    .filter((mark) => { return mark.url != undefined })
    .map((mark) => {
      const { title, url, id } = mark
      return (
        <Bookmark key={id} title={title} url={url} />
      )
    })
  return (
    <div className="list">
      {bs}
    </div>
  )
}

Bookmark.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  }))
}
