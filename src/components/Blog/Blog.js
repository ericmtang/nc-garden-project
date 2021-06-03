import React, { Component } from "react";
import BlogPost from './BlogPost';
import BlogSummary from './BlogSummary';
import { BLOGDATA } from '../../shared/blogData';

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blogData: BLOGDATA
    }
  }

  render () {
    return (
      <div className="card-deck">
        <BlogSummary blogData={this.state.blogData} />
      </div>
    )
  }
};

export default Blog;
