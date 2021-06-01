import React, { Component } from 'react';
import Home from './Home';
import Header from './Header/Header';
import Blog from './Blog/Blog';
import Classifieds from './Classifieds';
import Recipes from './Recipes';
import Store from './Store/Store';
import PlantDB from './PlantDB';
import StoreDetail from "./Store/StoreDetail";
import { HashRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addReview, postAd } from '../redux/ActionCreator';

const mapStateToProps = state => {
    return {
        storeReviewData: state.storeReviewData,
        classifiedsData: state.classifiedsData,
    }
}

const mapDispatchToProps = {
    addReview: (star, title, text, name) => (addReview(star, title, text, name)),
    postAd: (user, title, price, description, category) => (postAd(user, title, price, description, category))
};

class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                    <HashRouter>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/blog" render={(props) => <Blog />} />
                            <Route path="/store/detail" render={(props) => <StoreDetail />} />
                            <Route path="/store" render={(props) => <Store />} />
                            <Route path="/classifieds" render={(props) => <Classifieds postAd={this.props.postAd} classifiedsData={this.props.classifiedsData}/>} />
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