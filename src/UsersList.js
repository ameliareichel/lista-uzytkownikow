import React, { Component } from "react";
import List from "./List";
import './UsersList.css';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    addUser = (event) => {
        event.preventDefault();

        let addedUser = {
            id: Date.now(),
            name: this._inputName.value
        }

        this.setState((state) => {
            return({
                users: state.users.concat(addedUser)
            });
        });

        this._inputName.value = '';
    }

    removeUser = (userId) => {
        this.setState((state) => {
            return({
                users: state.users.filter((user) => {
                    return(user.id !== userId);
                })
            });
        });
        console.log(`User with ID ${userId} has been removed from the users list.`);
    }

    render() {
        return (
            <div className="main-wrapper">
                <form className="input-fields" onSubmit={this.addUser}>
                    <input type="text" placeholder="Enter name" ref={(element) => {this._inputName = element;}} />
                    <button type="submit" className="add-user">Add user</button>
                </form>
                <div className="list">
                    <List list={this.state.users} removeMethod={this.removeUser} />
                </div>
            </div>
        );
    };
}

export default UsersList;