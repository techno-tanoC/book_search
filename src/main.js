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

  recent: function() {
    chrome.runtime.sendMessage({type: "search", query: "qiita"}, function(marks) {
      var recents = marks.map(function(b) {
        return { title: b.title, url: b.url };
      });
      this.setState({ bookmarks: recents });
    }.bind(this));
  },

  componentDidMount: function() {
    this.recent();
  },

  render: function() {
    return (
      <div className="box">
        <Searcher />
        <BookmarkList bookmarks={this.state.bookmarks} />
      </div>
    );
  }
});

ReactDOM.render(<BookmarkBox />, document.getElementById("node"));
