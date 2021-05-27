import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import avatarImg from './img/avatar.jpg';

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
            <>
                <NavigationBar user={this.state.user}/>
            </>
        )
    }
}

export default Header;