/* eslint-disable no-undef */
import Signup from "./Signup";
import { act, fireEvent, render, screen } from "@testing-library/react";
import reducer from "../../../../redux/reducers/auth";
// import { render } from "../../../../utils/test-utils";
import mockRouter from "next-router-mock";
import { useRouter } from "next/router";
import { renderHook } from "@testing-library/react-hooks";

// mock next router
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("sign up", () => {
  // runs before each test
  beforeEach(() => {
    mockRouter.setCurrentUrl("/signup");
  });

  it("should render signup page", () => {
    render(<Signup />);
    expect(
      screen.getByRole("heading", { name: "Sign Up" })
    ).toBeInTheDocument();
  });

  // testing the authreducer
  it("should return the initial state", () => {
    const initialState = { errors: [], isAuthenticated: false, user: null };
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it("should handle signup submit", () => {
    const initialState = { errors: [], isAuthenticated: false, user: null };
    const action = {
      type: "LOGIN",
      payload: {
        email: "hiringbird@gmail.com",
        password: "123456",
      },
    };

    render(<Signup />);

    act(() => {
      fireEvent.change(screen.getByPlaceholderText("John"), {
        target: { value: "John" },
      });
      fireEvent.change(screen.getByPlaceholderText("Doe"), {
        target: { value: "Doe" },
      });
      fireEvent.change(screen.getByPlaceholderText("Johndoe@gmail.com"), {
        target: { value: "johndoe@gmail.com" },
      });

      fireEvent.change(screen.getByPlaceholderText("7007409205"), {
        target: { value: "7007409205" },
      });

      fireEvent.change(screen.getByPlaceholderText("abrakadabra"), {
        target: { value: "abrakadabra" },
      });

      fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));
    });

    expect(reducer(initialState, action)).toEqual({
      errors: [],
      isAuthenticated: true,
      user: {
        email: "hiringbird@gmail.com",
        password: "123456",
      },
    });

    const { result } = renderHook(() => useRouter());

    act(() => {
      result.current.push("/signin");
    });
    expect(result.current).toMatchObject({ asPath: "/signin" });
  });
});
