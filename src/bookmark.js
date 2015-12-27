var React = require('react');

module.exports = React.createClass({
  openTab: function() {
    chrome.tabs.query({active: true }, function(tab) {
      var index = tab[0].index + 1
      chrome.tabs.create({ url: this.props.url, index: index, active: true });
    }.bind(this));
  },

  render: function() {
    return (
      <div className="bookmark shadow" onClick={ this.openTab }>
        <div>
          <div className="title">{ this.props.title }</div>
          <div className="url">{ this.props.url }</div>
        </div>
      </div>
    );
  }
});
