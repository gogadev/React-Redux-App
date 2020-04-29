import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUser } from "../../redux/actions";

import userImg from "../../assets/users.png";

import "./user-list.style.css";

class UserList extends Component {
  render() {
    const { users, selectUser } = this.props;

    return (
      <div className="user-list">
        <h1 className="title">USER LIST</h1>
        <img className="img" src={userImg} alt="" />
        <div className="list">
          {users &&
            users.map((user) => {
              return (
                <div key={user.id} onClick={() => selectUser(user)}>
                  {user.first} {user.last}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectUser: (user) => {
      dispatch(selectUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
