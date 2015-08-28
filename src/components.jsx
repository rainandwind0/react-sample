var CommentList = React.createClass({
  render: function() {
    var commentNodes= this.props.data.map(function(comment) {
        return (
          <Comment author={comment.author}>
            {comment.text}
          </Comment>
        );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if(!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value='';
    React.findDOMNode(this.refs.text).value='';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <br />
        <input type="text" placeholder="Your Name" ref="author" />
        <br />
        <label>Post Text:</label>
        <br />
        <textarea type="text" placeholder="Say something..." ref="text"></textarea>
        <br />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});
