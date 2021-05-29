import React, { Component } from "react";
import BlogPost from './BlogPost';
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
      <BlogPost blogData={this.state.blogData} />
    )
  }
};

export default Blog;
