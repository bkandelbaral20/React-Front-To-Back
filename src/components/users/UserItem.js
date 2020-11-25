import React, {Component} from 'react';

class UserItem extends Component {
    //components state with constructor

    // constructor() {
    //     super();
    //     this.state = {
    //         id: 'id',
    //         login: 'mojombo',
    //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url: 'https://github.com/mojombo'
    //     }

    // components state without constructor, it will display the same information
        state = {
            id: 'id',
            login: 'mojombo',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        }

    render() {
        return (
            <div className="card text-center">
                <img
                    src={this.state.avatar_url}
                    alt="" className="round-img"
                    style={{width: '60px'}}/>

                <h3>{this.state.login}</h3>

                <div>
                    <a href={this.state.html_url} className='btn btn-dark btn-sm my-1'>Click me for more details</a>
                </div>

            </div>
        );
    }
}

export default UserItem;