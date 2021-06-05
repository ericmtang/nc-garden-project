import React, { Component } from 'react';
import Home from './Home';
import Header from './Header/Header';
import BlogSummary from './Blog/BlogSummary';
import Blog from './Blog/Blog';
import BlogPost from './Blog/BlogPost';
import Classifieds from './Classifieds';
import Recipes from './Recipes';
import Store from './Store/Store';
import PlantDB from './PlantDB';
import StoreDetail from "./Store/StoreDetail";
import { HashRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addReview } from '../redux/ActionCreator';

const mapStateToProps = state => {
    return {
        storeReviewData: state.storeReviewData,
        classifiedsData: state.classifiedsData,
        blogData: state.blogData
    }
}

const mapDispatchToProps = {
    addReview: (star, title, text, name) => (addReview(star, title, text, name))
};

class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        const BlogWithId = ({match}) => {
            return (
                <BlogPost
                    post={this.props.blogData.filter(post => post.id === + match.params.blogId)[0]}
                />
            )
        }

        return (
            <div>
                <Header />
                    <HashRouter>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/blog" render={() => <BlogSummary blogData={this.props.blogData} />} />
                            <Route path="/blog/:blogId" component={BlogWithId} />
                            <Route path="/store/detail" render={(props) => <StoreDetail />} />
                            <Route path="/store" render={(props) => <Store />} />
                            <Route path="/classifieds" render={(props) => <Classifieds />} />
                            <Route path="/recipes" render={(props) => <Recipes />} />
                            <Route path="/plantdb" render={(props) => <PlantDB />} />
                            <Route path="/home" render={(props) => <Home />} />
                        </Switch>
                    </HashRouter>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));