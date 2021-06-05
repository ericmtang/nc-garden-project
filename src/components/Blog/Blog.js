import React, { Component } from "react";
import BlogPost from './BlogPost';
import BlogSummary from './BlogSummary';
import { BLOGDATA } from '../../shared/blogData';
import { BLOGCOMMENTS } from '../../shared/blogComments';

class Blog extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="card-deck">
        <BlogSummary blogData={this.state.blogData} comments={this.state.comments} />
      </div>
    )
  }
};

export default Blog;
