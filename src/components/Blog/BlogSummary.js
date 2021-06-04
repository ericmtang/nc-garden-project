import React from 'react';
import BlogPara from './BlogPara';
import Avatar from '../Header/Avatar';
import './BlogSummary.css';
import {
    Card, Col, Button, CardImg, CardDeck, CardTitle, CardText, CardGroup, CardColumns, CardSubtitle, CardBody, Row
} from 'reactstrap';

//TODO: Translate into react cards

const BlogSummary = ({ blogData }) => {

    const post = blogData.map(post => {
        console.log(post.img);
        let stringPara = post.body[0];
        stringPara = stringPara.substr(0, 300) + "...";
        return (
            <Card key={post.id} className="rounded summaryCard mt-5 mx-2">
                <CardImg className="summaryImg" src={process.env.PUBLIC_URL + post.img} alt={post.alt} />
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
                        {stringPara}
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
                </CardBody>
            </Card>
        );
    })

    // Built in Reactstrap does not play well with CardGroups
    // Wrote this to compensate

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
                        <div className="col-md-4">
                            {aPost[i]}
                        </div>
                        <div className="col-md-4">
                            {aPost[j]}
                        </div>
                        <div className="col-md-4">
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
            <CardRow aPost = {post} />
        </React.Fragment>
    )
}

export default BlogSummary;