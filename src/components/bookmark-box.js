import React, { Component } from 'react'
import { connect } from 'react-redux'

import {queryBookmark} from '../actions'
import Searcher from './searcher'
import BookmarkList from './bookmark-list'

class BookmarkBox extends Component {
  constructor(props) {
    super(props);
    // this.queryBookmark("q");
  }

  render() {
    const { handleChange, bookmarks } = this.props
    return (
      <div className="bookmark-box">
        <Searcher handleChange={ handleChange } />
        <BookmarkList bookmarks={ bookmarks } />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      dispatch(queryBookmark(e.target.value)) }
  }
}

export const App = connect(
  state => state,
  mapDispatchToProps
)(BookmarkBox)
