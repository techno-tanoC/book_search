import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Searcher from './searcher'
import BookmarkList from './bookmark-list'

class BookmarkBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.queryBookmark = this.queryBookmark.bind(this);
    this.state = { bookmarks: [] };
  }

  queryBookmark(q) {
    chrome.runtime.sendMessage({type: "search", query: q}, function(marks) {
      let bs = marks.map(function(b) {
        return { title: b.title, url: b.url };
      });
      this.setState({ bookmarks: bs });
    }.bind(this));
  }

  handleChange(e) {
    let q = e.target.value;
    this.queryBookmark(q);
  }

  render() {
    return (
      <div className="box">
        <Searcher handleChange={ this.handleChange } />
        <BookmarkList bookmarks={ this.state.bookmarks } />
      </div>
    );
  }
}

ReactDOM.render(<BookmarkBox />, document.getElementById("node"));
