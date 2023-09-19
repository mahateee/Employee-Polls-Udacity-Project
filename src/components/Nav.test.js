import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import Nav from "./Nav";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { handleInitialData } from "../actions/shared";

describe("PollCreation", () => {
  it("should render the component", () => {
    store.dispatch(setAuthedUser({ id: "sarahedo" }));
    // store.dispatch(handleInitialData());

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
    const Dashboard = screen.getByText(/Dashboard/i);
    const newLink = screen.getByText(/New/i);
    const leaderboardLink = screen.getByText(/Leaderboard/i);
    const userInfo = screen.getByTestId("user-info");

    expect(Dashboard).toBeInTheDocument();
    expect(newLink).toBeInTheDocument();
    expect(leaderboardLink).toBeInTheDocument();
    expect(userInfo).toHaveTextContent("sarahedo");
  });
});
