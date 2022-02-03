/* eslint-disable no-undef */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Signin from "./Signin";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import mockRouter from "next-router-mock";
import { renderHook } from "@testing-library/react-hooks";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// actions
const signin = (payload) => ({
  type: "LOGIN",
  payload,
});

// mock next router
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("sign in", () => {
  let store;
  beforeAll(() => {
    const initialState = {};
    store = mockStore(initialState);
  });

  beforeEach(() => {
    mockRouter.setCurrentUrl("/signin");
  });

  it("should render signin page", () => {
    render(
      <Provider store={store}>
        <Signin />
      </Provider>
    );
    expect(
      screen.getByRole("heading", { name: "Sign In" })
    ).toBeInTheDocument();
  });

  it("inputs takes values correctly", () => {
    render(
      <Provider store={store}>
        <Signin />
      </Provider>
    );

    userEvent.type(screen.getByTestId("email"), "hiringbird@gmail.com");
    userEvent.type(screen.getByTestId("password"), "hiringbird123");

    expect(screen.getByTestId("email").value).toBe("hiringbird@gmail.com");
    expect(screen.getByTestId("password").value).toBe("hiringbird123");
  });

  it("submit form", () => {
    render(
      <Provider store={store}>
        <Signin />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));

    // Dispatch the action
    store.dispatch(
      signin({
        email: "hiringbird@gmail.com",
        password: "123456",
      })
    );

    // Check if the action was dispatched
    const actions = store.getActions();
    expect(actions[0].type).toBe("LOGIN");

    const { result } = renderHook(() => useRouter());

    act(() => {
      result.current.push("/");
    });
    expect(result.current).toMatchObject({ asPath: "/" });
  });
});
