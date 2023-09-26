import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "./actions/shared";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import {
  HashRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Poll from "./components/Poll";
import Leaderboard from "./components/Leaderboard";
import PollCreation from "./components/PollCreation";
import Error404 from "./components/Error404";
import Nav from "./components/Nav";

function App() {
  // useEffect(() => {
  //   props.dispatch(handleInitialData());
  // }, [props.dispatch]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  // const { authedUser } = props;
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
          <Route
            path="/404"
            element={
              <RequireAuth>
                <Error404 />
              </RequireAuth>
            }
          />

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>
    </Router>
  );
}
function RequireAuth({ props, children, loggedIn }) {
  // const authed = useSelector((state) => state.authedUser);
  // const location = useLocation();
  // const navigate = useNavigate();
  // return authed === null ? (
  //   <Navigate to="/" replace state={{ path: location.pathname }} />
  // ) : (
  //   // navigate("/")
  //   children
  // );
  const authed = useSelector((state) => state.authedUser);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (authed === null) {
      navigate("/", { replace: true, state: { path: location.pathname } });
    }
  }, [authed, navigate, location]);

  return authed === null ? null : children;
}
const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});
export default connect(mapStateToProps)(App);
