var data = [
  {author: "Pete Hunt", text: "This is `one` [comment](https://github.com)"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
  handleCommentSubmit: function(comment) {
    var currentState = this.state;
    currentState.data.push(comment);
    this.setState(currentState);
  },
  getInitialState: function() {
    return{data: this.props.data};
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
