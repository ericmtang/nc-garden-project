import React from 'react';
import BlogPara from './BlogPara';
import Avatar from '../Header/Avatar';

const BlogPost = ({blogData}) => {

    const post = blogData.map(post => {
        console.log(post.img);
        return(
            <div>
                <img src={process.env.PUBLIC_URL + post.img} alt={post.alt} />
                <h1>{post.title}</h1>
                <Avatar firstName={post.author.firstName} lastName={post.author.lastName} img={process.env.PUBLIC_URL + post.author.img} right={true} /> 
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