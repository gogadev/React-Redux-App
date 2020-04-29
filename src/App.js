import React from "react";

import UserList from "./components/user-list/UserList";
import UserDetails from "./components/user-details/UserDetails";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <UserList />
      <UserDetails />
    </React.Fragment>
  );
};

export default App;
