import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "./actions/shared";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Poll from "./components/Poll";
import Leaderboard from "./components/Leaderboard";
import PollCreation from "./components/PollCreation";
import Error404 from "./components/Error404";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/Dashboard/questions/:id"
            element={
              <RequireAuth>
                <Poll />
              </RequireAuth>
            }
          />
          <Route
            path="/Leaderboard"
            element={
              <RequireAuth>
                <Leaderboard />
              </RequireAuth>
            }
          />
          <Route
            path="/New"
            element={
              <RequireAuth>
                <PollCreation />
              </RequireAuth>
            }
          />
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Router>
  );
}
function RequireAuth({ children }) {
  const authed = useSelector((state) => state.authedUser);
  const loggedIn = !!authed;
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];

  return loggedIn ? children : <Navigate to={`/?redirectTo=${redirectUrl}`} />;
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});
export default connect(mapStateToProps)(App);
