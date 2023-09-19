import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import PollCreation from "./PollCreation";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { handleInitialData } from "../actions/shared";
describe("PollCreation", () => {
  it("should render the component", () => {
    store.dispatch(setAuthedUser({ id: "sarahedo" }));
    store.dispatch(handleInitialData());
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollCreation />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });
  it("should display all elements", () => {
    store.dispatch(setAuthedUser({ id: "sarahedo" }));
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollCreation />
        </BrowserRouter>
      </Provider>
    );
    const inputOne = screen.getByTestId("firstOption");
    const inputTwo = screen.getByTestId("secondOption");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(inputOne, { target: { value: "first value" } });
    fireEvent.change(inputTwo, { target: { value: "second value" } });
    expect(inputOne.value).toBe("first value");
    expect(inputTwo.value).toBe("second value");
  });
  it("will display an error if the firstOption & secondOption is not provided.", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollCreation />
        </BrowserRouter>
      </Provider>
    );

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(screen.getByTestId("error-header")).toBeInTheDocument();
    expect(screen.queryByTestId("success-header")).not.toBeInTheDocument();
  });
  it("will display a success message if the firstOption & secondOption are provided.", () => {
    store.dispatch(setAuthedUser({ id: "sarahedo" }));
    store.dispatch(setAuthedUser({ id: "sarahedo" }));
    store.dispatch(handleInitialData());
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollCreation />
        </BrowserRouter>
      </Provider>
    );
    const inputOne = screen.getByTestId("firstOption");
    const inputTwo = screen.getByTestId("secondOption");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(inputOne, { target: { value: "first value" } });
    fireEvent.change(inputTwo, { target: { value: "second value" } });
    fireEvent.click(submitButton);
    expect(screen.getByTestId("success-header")).toBeInTheDocument();
    expect(screen.queryByTestId("error-header")).not.toBeInTheDocument();
  });
});
