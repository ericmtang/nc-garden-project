import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
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
            <div>
                <NavigationBar sticky user={this.state.user}/>
            </div>
        )
    }
}

export default Header;