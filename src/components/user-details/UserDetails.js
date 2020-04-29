import React from "react";
import { connect } from "react-redux";

import icon from "../../assets/search.png";

import "./user-details.style.css";

const UserDetails = ({ user }) => {
  return (
    <div className="user-list">
      <h1 className="title">DETAIL LIST</h1>
      <div className="info">
        {!user ? (
          <div className="select">
            Please Select a user...
            <span>
              <img src={icon} alt="" />
            </span>
          </div>
        ) : (
          <div>
            <h2 className="subtitle">Profile</h2>
            <img src={user.thumbnail} alt="" />
            <h2 className="subtitle">Age</h2>
            <h3>{user.age}</h3>
            <h2 className="subtitle">Description</h2>
            <p align="justify">{user.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.activeUser,
  };
};

export default connect(mapStateToProps)(UserDetails);
