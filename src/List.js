import React from "react";
import './List.css';

const List = (props) => {

    let usersList = props.list;
    let usersListElement = usersList.map(user => <p key={user.id} className="list-user">{user.name} <span className="delete-user" onClick={() => {props.removeMethod(user.id);}}>X</span></p>
    );

    return (
        <div className="users-list">
            {usersListElement}
        </div>
    );
}

export default List;