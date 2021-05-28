import React from 'react';
import BlogPara from './BlogPara';

const BlogPost = ({blogData}) => {

    const post = blogData.map(post => {

        return(
            <div>
                <img src={post.img} alt={post.alt} />
                <h1>{post.title}</h1>
                <BlogPara body={post.body} />
            </div>
        );
    })

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    )
}

export default BlogPost;