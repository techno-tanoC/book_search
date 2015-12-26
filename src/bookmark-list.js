var React = require('react');
var Bookmark = require('./bookmark');

module.exports = React.createClass({
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
