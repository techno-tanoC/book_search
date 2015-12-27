var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="seach">
        <input type="text" autoFocus={ true } value={ this.props.query } onChange={ this.props.changeText } />
      </div>
    );
  }
});
