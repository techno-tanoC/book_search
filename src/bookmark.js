var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="bookmark box box-shadow">
        <div className="title">{this.props.title}</div>
        <div className="url">{this.props.url}</div>
      </div>
    );
  }
});
