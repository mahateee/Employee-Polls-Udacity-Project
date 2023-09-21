import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import Login from "./Login";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
describe("Login", () => {
  it("should render the component", () => {
    // store.dispatch(setAuthedUser("sarahedo"));

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });
  it("will have all expected fields", () => {
    // store.dispatch(setAuthedUser("sarahedo"));

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    var username = screen.getByTestId("username-input");
    var password = screen.getByTestId("password-input");
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    var submitButton = screen.getByText("Sign in");
    expect(submitButton).toBeInTheDocument();
  });
  it("should display all elements", () => {
    // store.dispatch(setAuthedUser("sarahedo"));

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    var username = screen.getByTestId("username-input");
    var password = screen.getByTestId("password-input");

    fireEvent.change(username, { target: { value: "sarahedo" } });
    fireEvent.change(password, { target: { value: "password123" } });
    expect(username.value).toBe("sarahedo");
    expect(password.value).toBe("password123");
  });
});
