import React, { Component } from 'react'
import Searcher from './searcher'
import BookmarkList from './bookmark-list'

export default props => {
  const { handleChange, bookmarks } = props
  return (
    <div className="bookmark-box">
      <Searcher handleChange={ handleChange } />
      <BookmarkList bookmarks={ bookmarks } />
    </div>
  )
}
