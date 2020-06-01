import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CreateEmployer from './Components/CreateEmployer/CreateEmployer';
import CreateBranch from './Components/CreateBranch/CreateBranch';
import CreateUser from './Components/CreateUser/CreateUser';
import EmployerList from './Components/EmployerList/EmployerList';
import BranchList from './Components/BranchList/BranchList';
import UserList from './Components/UserList/UserList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Container>
          <Switch>
            <Route path="/create-employer">
              <CreateEmployer />
            </Route>
            <Route path="/create-branch">
              <CreateBranch />
            </Route>
            <Route path="/create-user">
              <CreateUser />
            </Route>
            <Route path="/employer-list">
              <EmployerList />
            </Route>
            <Route path="/branch-list">
              <BranchList />
            </Route>
            <Route path="/user-list">
              <UserList />
            </Route>
          </Switch>
        </Container>
      </Router >
    </div >
  );
}

export default App;
