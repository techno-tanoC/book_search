var React = require('react');
var ReactDOM = require('react-dom');

var bookmarks = [
  { title: "title1", url: "http://title1/", key: 1 },
  { title: "title2", url: "http://title2/", key: 2 }
];

var Bookmark = React.createClass({
  render: function() {
    return (
      <div className="bookmark box box-shadow">
        <div className="title">{this.props.title}</div>
        <div className="url">{this.props.url}</div>
      </div>
    );
  }
});

var BookmarkList = React.createClass({
  render: function() {
    var bs = this.props.bookmarks.map(function(mark) {
      return (
        <Bookmark title={mark.title} url={mark.url} key={mark.key} />
      );
    });
    return (
      <div className="list">
        {bs}
      </div>
    );
  }
});

var Searcher = React.createClass({
  render: function() {
    return (
      <div className="seach">
        <input type="text" autoFocus={true} />
      </div>
    );
  }
});

var BookmarkBox = React.createClass({
  getInitialState: function() {
    return { bookmarks: [] };
  },

  recent: function() {
    chrome.runtime.sendMessage({type: "recent"}, function(marks) {
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
