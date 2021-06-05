import React from 'react';
import BlogPara from './BlogPara';
import Avatar from '../Header/Avatar';
import {
    Card, CardImg, CardTitle, CardText, CardBody, Row, CardFooter
} from 'reactstrap';
import "./BlogSummary.css"

function BlogPost({ post }) {

    return (
        <div className="container">
        <Card className="rounded summaryCard mt-5 mx-2">
            <CardImg className="largePic" src={process.env.PUBLIC_URL + post.img} alt={post.alt} />
            <CardBody>
                <Row>
                    <CardTitle>
                        <h1>{post.title}</h1>
                    </CardTitle>
                </Row>
                <Row className="mx-1">
                    <Avatar firstName={post.author.firstName} lastName={post.author.lastName} img={process.env.PUBLIC_URL + "/" + post.author.img} right={true} />
                </Row>
                <CardText>
                    <BlogPara body={post.body} />
                </CardText>
                <div className="container separator-line"></div>
                <CardFooter className="blogFoot">
                    <span className="social1">
                        <i className="fa fa-reply reply social"></i>
                        <i className="fa fa-comment-o comment social"></i>
                        <i className="fa fa-heart heart social"></i>
                        <i className="fa fa-share-alt share social"></i>
                    </span>
                </CardFooter>

            </CardBody>
        </Card>
        </div>
    );
}

// function BlogPost({post}) {
//     <div className="container">
//         <RenderPost post={post} />
//     </div>
// }

export default BlogPost;