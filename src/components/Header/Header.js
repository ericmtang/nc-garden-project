import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Jumbo from './Jumbo';
import avatarImg from './img/avatar.jpg';
import { USERS } from '../../shared/users';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                firstName: "Roz",
                lastName: "A",
                img: avatarImg
            }
        }

    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar user={this.state.user}/>
                <Jumbo user={this.state.user} />
            </React.Fragment>
        )
    }
}

export default Header;