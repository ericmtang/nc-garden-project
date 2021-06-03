import React from 'react';
import BlogPara from './BlogPara';
import Avatar from '../Header/Avatar';
import './BlogSummary.css';

//TODO: Translate into react cards

const BlogSummary = ({ blogData }) => {

    const post = blogData.map(post => {
        console.log(post.img);
        let stringPara = post.body[0];
        stringPara = stringPara.substr(0, 300) + "...";
        return (
            <div key={post.id} className="container">
                <div className="card rounded summaryCard mt-5">
                    <img className="card-img-top summaryImg" src={process.env.PUBLIC_URL + post.img} alt={post.alt} />
                    <div className="">
                        <div className="card-body">
                            <div>
                                <div className="row">
                                    <h5 className="card-title">{post.title}</h5>
                                </div>
                                <div className="row">
                                    <Avatar firstName={post.author.firstName} lastName={post.author.lastName} img={process.env.PUBLIC_URL + "/" + post.author.img} right={true} />
                                </div>
                            </div>
                            <div className="card-text">
                                {stringPara}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className="card-group">
            {post}
        </div>
    )
}

export default BlogSummary;