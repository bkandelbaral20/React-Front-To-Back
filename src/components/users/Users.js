import React, { Component } from 'react'
import UserItem from "./UserItem";

class Users extends Component {
    //hardcoding the users
    state = {
        users:[
            {
                id: '1',
                login: 'mojombo',
                // avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                // html_url: 'https://github.com/mojombo'
            },
            {
                id: '2',
                login: 'bkandebaral20',
                // avatar_url: '<img style="height:auto;" alt="" width="260" height="260" ' +
                //     'class="avatar avatar-user width-full border bg-white" ' +
                //     'src="https://avatars2.githubusercontent.com/u/65179112?s=460&amp;u=b39ead0a987576025026628d2226e2da16f9fb80&amp;v=4">',
                // html_url: 'https://github.com/bkandelbaral20'
            }
            // {
            //     id: '3',
            //     login: 'mojombo',
            //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            //     html_url: 'https://github.com/mojombo'
            // }
        ]
    };
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    //we used id as unique keys to each user
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

//this is the styling for each user
const userStyle= {
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default Users