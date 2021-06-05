import React from 'react';
import BlogPara from './BlogPara';
import Avatar from '../Header/Avatar';
import {
    Card, Col, Button, CardImg, CardDeck, CardTitle, CardText, CardGroup, CardColumns, CardSubtitle, CardBody, Row
} from 'reactstrap';

function BlogPost({ post }) {

    return (
        <div className="container">
        <Card className="rounded summaryCard mt-5 mx-2">
            <CardImg className="largePic" src={process.env.PUBLIC_URL + post.img} alt={post.alt} />
            <CardBody>
                <Row>
                    <CardTitle>
                        <h5>{post.title}</h5>
                    </CardTitle>
                </Row>
                <Row className="mx-1">
                    <Avatar firstName={post.author.firstName} lastName={post.author.lastName} img={process.env.PUBLIC_URL + "/" + post.author.img} right={true} />
                </Row>
                <CardText>
                    <BlogPara body={post.body} />
                </CardText>
                <div className="container separator-line"></div>
                <Row>
                    <span className="social1">
                        <i className="fa fa-reply social"></i>
                        <i className="fa fa-comment-o social"></i>
                        <i className="fa fa-heart social"></i>
                        <i className="fa fa-share-alt social"></i>
                    </span>
                </Row>
                <Row>

                </Row>

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