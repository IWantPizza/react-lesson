var Avatar = React.createClass({
  getDefaultProps: function() {
    return {
      path: 'https://www.gravatar.com/avatar/71eaded18d7cbdeb159648e04806d403'
    };
  },

  render: function() {
    return (
      <div>
        <a href={this.props.path}>
          <img src={this.props.path} />
        </a>
      </div>
    );
  }
});

React.render(<Avatar />, document.body)
