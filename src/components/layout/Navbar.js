import React, { Component } from 'react';

export class Navbar extends  Component {

    //setting default props
    static defaultProps = {
        title:'Github Finder',
        icon:'fab fa-github'
    };

    render() {
        return(
            <nav className="navbar bg-primary">
                <h1>
                    {/*using props*/}
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </nav>
        )
    }
}
export default Navbar;