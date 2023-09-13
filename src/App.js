import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Poll from "./components/Poll";
import Leaderboard from "./components/Leaderboard";
import PollCreation from "./components/PollCreation";
function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  const { authedUser } = props;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dashboard/questions/:id" element={<Poll />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/New" element={<PollCreation />} />

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>
    </Router>
  );
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
