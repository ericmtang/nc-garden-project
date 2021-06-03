import React from 'react';
import BlogPara from './BlogPara';
import Avatar from '../Header/Avatar';

const BlogPost = ({blogData}) => {

    const post = blogData.map(post => {
        console.log(post.img);
        return(
            <div key={post.id} className="container m-5">
                <div className="card">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + post.img} alt={post.alt} />
                    <div className="card-body">
                        <div className="card-title">
                            <div className="row">
                                {post.title}
                            </div>
                            <div className="row">
                                <Avatar firstName={post.author.firstName} lastName={post.author.lastName} img={process.env.PUBLIC_URL +"/" + post.author.img} right={true} />
                            </div>
                        </div>
                        <div className="card-text">
                            <BlogPara body={post.body} />
                        </div>
                    </div>
                </div>
            
                 
                
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