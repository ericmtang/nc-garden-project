import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Header/Avatar';
import './BlogSummary.css';
import {
    Card, CardImg,  CardTitle, CardText, CardBody, Row, CardFooter, CardDeck
} from 'reactstrap';

function RenderBlogPost({blogPost}) {

    let stringPara = blogPost.body[0];
    stringPara = stringPara.substr(0, 300) + "..."
    return (
        <Card key={blogPost.id} className="rounded summaryCard mt-5 mx-2">
            <Link to={`/blog/${blogPost.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardImg className="summaryImg" src={process.env.PUBLIC_URL + blogPost.img} alt={blogPost.alt} />
                <CardBody className="bodyPart">
                    <Row>
                        <CardTitle>
                            <h5>{blogPost.title}</h5>
                        </CardTitle>
                    </Row>
                    <Row className="">
                        <Avatar firstName={blogPost.author.firstName} lastName={blogPost.author.lastName} img={process.env.PUBLIC_URL + "/" + blogPost.author.img} />
                    </Row>
                    <CardText>
                        {stringPara}
                    </CardText>
                    <div className="container separator-line"></div>
                    <CardFooter className="blogFoot">
                        <span className="social1 mt-3">
                            <i className="fa fa-reply social reply"></i>
                            <i className="fa fa-comment-o social comment"></i>
                            <i className="fa fa-heart social heart"></i>
                            <i className="fa fa-share-alt social share"></i>
                        </span>
                    </CardFooter>
                </CardBody>
            </Link>
        </Card>
    )
}

const BlogSummary = ({blogData}) => {

    const post = blogData.map(post => {
        console.log(post.img);
        console.log(post.comments)
        return (
            <div key={post.id} className="lastResort">
                <RenderBlogPost blogPost={post} />
            </div>
        );
    })

    function RenderComments({blogComments, blogId}) {
        let comments = blogComments;
        if (comments !== undefined && comments.length > 0) {
            comments = comments.filter(comment => comment.postID == blogId)
            return (
                <div>
                    <h1>Comments</h1>
                    {comments.map(comment => {
                        return(
                            <div key={comment.id}>
                                <h1>{comment.text}</h1>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }


    const CardRow = ({aPost}) => {
        let i = 0;
        let j = 1;
        let k = 2;
        let RowWrapper = [];
        const postLength = aPost.length/3;

        for (let step=0; step < postLength; step++) {
            RowWrapper.push(
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-md-4">
                            {aPost[i]}
                        </div>
                        <div className="col col-md-4">
                            {aPost[j]}
                        </div>
                        <div className="col col-md-4">
                            {aPost[k]}
                        </div>
                    </div>
                </div>
            );
            i += 3;
            j += 3;
            k += 3;
        }
        
        return <React.Fragment>{RowWrapper}</React.Fragment>
    }

    return (
        <React.Fragment>
            <CardRow aPost={post} />
        </React.Fragment>
    )
}

export default BlogSummary;