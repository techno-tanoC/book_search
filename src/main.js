var React = require('react');
var ReactDOM = require('react-dom');
var Searcher = require('./searcher');
var BookmarkList = require('./bookmark-list');

var bookmarks = [
  { title: "title1", url: "http://title1/", key: 1 },
  { title: "title2", url: "http://title2/", key: 2 }
];

var BookmarkBox = React.createClass({
  getInitialState: function() {
    return { bookmarks: [] };
  },

  queryBookmark: function(q) {
    chrome.runtime.sendMessage({type: "search", query: q}, function(marks) {
      var bs = marks.map(function(b) {
        return { title: b.title, url: b.url };
      });
      this.setState({ bookmarks: bs });
    }.bind(this));
  },

  onChange: function() {
    var q = this.refs.searcher.value;
    this.queryBookmark(q);
  },

  render: function() {
    return (
      <div className="box">
        <input type="text" autoFocus={ true } ref="searcher" onChange={ this.onChange } />
        <BookmarkList bookmarks={ this.state.bookmarks } />
      </div>
    );
  }
});

ReactDOM.render(<BookmarkBox />, document.getElementById("node"));
