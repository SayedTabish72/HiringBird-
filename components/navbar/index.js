import jwt_decode from "jwt-decode";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOutsideClick from "../../hooks/useOutsideClick";
import { logout } from "../../redux/actions/auth";
import Notifications from "./Notifications";
import {
  Avatar,
  DropdownSelect,
  HamBurger,
  Icons,
  Img,
  Left,
  Menus,
  Option,
  Options,
  OptionTitle,
  Right,
  SBtn,
  SigninOptions,
  SLink,
  Wrapper,
} from "./styles/Navbar.styled";

const Navbar = () => {
  const [user1, setUser1] = useState(null);
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.isAuthenticated);
  const handleClose = () => {
    setShow(!show);
  };
  useOutsideClick(dropdownRef, () => {
    if (showDropdown) setShowDropdown(false);
  });
  const handleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  const handleSigninClose = () => {
    setShowSignin(!showSignin);
  };
  const handleSignupClose = () => {
    setShowSignup(!showSignup);
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      // eslint-disable-next-line no-undef
      const payload = jwt_decode(access_token);
      if (Date.now() >= payload.exp * 1000) {
        localStorage.removeItem("access_token");
        setUser1(null);
      } else {
        setUser1(payload);
      }
    }
  }, []);

  return (
    <Wrapper>
      <Left>
        <Link href="/">
          <img src="/footer/hb-logo.svg" alt="" />
        </Link>
      </Left>
      <HamBurger show={showDropdown}>
        <div
          className="icon"
          onClick={() => {
            setShowDropdown(true);
          }}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className="dropdown" ref={dropdownRef}>
          <ul>
            <li>
              <Link href="/user/profile">My Profile</Link>
            </li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Saved Internships</li>
            <li className="special">Log out</li>
          </ul>
        </div>
      </HamBurger>
      {user ? (
        <Right>
          <SLink href="#about-us">About Us</SLink>
          <SLink href="#contact-us">Contact Us</SLink>
          <Link href="/internship/home">
            <SBtn>Find Interships</SBtn>
          </Link>
          <Icons>
            <svg
              className="icon"
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8217 16.8333C24.8217 17.5111 24.5525 18.1611 24.0732 18.6404C23.594 19.1196 22.9439 19.3889 22.2662 19.3889H6.93283L1.82172 24.5V4.05556C1.82172 3.37778 2.09096 2.72776 2.57022 2.2485C3.04948 1.76925 3.6995 1.5 4.37727 1.5H22.2662C22.9439 1.5 23.594 1.76925 24.0732 2.2485C24.5525 2.72776 24.8217 3.37778 24.8217 4.05556V16.8333Z"
                stroke="#404366"
                strokeWidth="2.44444"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              className="icon"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleNotifications}
            >
              <path
                d="M22.8647 18.9858C22.3745 17.4978 22.124 15.9413 22.1226 14.3746V10.5035C22.1583 8.05056 21.2829 5.6716 19.6658 3.82684C18.0543 1.97916 15.8177 0.791147 13.3845 0.490461C12.0398 0.350961 10.672 0.490461 9.37384 0.930273C8.07572 1.34684 6.89384 2.0424 5.89797 2.97046C4.89712 3.87459 4.09941 4.98069 3.55747 6.21577C3.01283 7.45038 2.72856 8.78401 2.7224 10.1334V14.3959C2.71956 15.9561 2.46909 17.5061 1.98034 18.9878L0.821716 22.4152L1.74978 23.6901H8.54072C8.54072 24.7092 8.95728 25.7051 9.67609 26.4258C10.393 27.1427 11.3908 27.5612 12.4118 27.5612C13.431 27.5612 14.4268 27.1446 15.1457 26.4258C15.8645 25.707 16.283 24.7092 16.283 23.6901H23.0739L24 22.4152L22.8647 18.9858V18.9858ZM13.7778 25.0831C13.5995 25.265 13.3871 25.4098 13.1526 25.5092C12.9182 25.6086 12.6665 25.6607 12.4118 25.6625C12.1568 25.6607 11.9045 25.6084 11.6698 25.5087C11.435 25.4089 11.2223 25.2636 11.044 25.0812C10.8618 24.9031 10.7166 24.6907 10.6169 24.4563C10.5171 24.2219 10.4647 23.97 10.4627 23.7153H14.3358C14.3439 23.9695 14.2985 24.2226 14.2028 24.4582C14.107 24.6938 13.9629 24.9067 13.7797 25.0831H13.7778ZM3.09247 21.77L3.81128 19.6116C4.37182 17.9302 4.66154 16.1703 4.66959 14.3978V10.1334C4.66959 9.04259 4.90209 7.97696 5.3419 7.0024C5.78172 6.00652 6.40753 5.12496 7.21934 4.40615C8.03115 3.66602 8.98247 3.10802 10.0016 2.78446C11.044 2.43571 12.1328 2.31946 13.1985 2.43571C15.1515 2.69252 16.9421 3.65782 18.2302 5.14821C19.5186 6.64046 20.2112 8.55555 20.1754 10.5267V14.4211C20.1754 16.1823 20.4544 17.9435 21.0337 19.6349L21.7525 21.7913H3.0944V21.7681L3.09247 21.77Z"
                fill="#404366"
              />
            </svg>

            {/****************** User Dropdown started  ********************/}
            <DropdownSelect>
              {!show ? (
                " "
              ) : (
                <Options>
                  <OptionTitle onClick={() => handleClose()}>
                    <span
                      style={{ color: show ? "#404366" : "#C9CBE2" }}
                      className="option-title"
                    >
                      MY ACCOUNT
                    </span>
                    {show && <Img className="up-show" src="/up-arrow.svg" />}
                  </OptionTitle>
                  <Option>
                    <label>My Profile</label>
                  </Option>
                  <Option>
                    <label>Applied Internships</label>
                  </Option>
                  <Option>
                    <label>Saved Internships</label>
                  </Option>
                  <Option
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    <label>Log out</label>
                  </Option>
                </Options>
              )}
              {showNotifications ? (
                <Notifications
                  options={[
                    { value: "12 Jobs Posted for UX designer", time: "45m" },
                    {
                      value: "LonelyWhale is looking for Graphic Designers",
                      time: "45m",
                    },
                    {
                      value: "LonelyWhale is looking for Graphic Designers",
                      time: "45m",
                    },
                    { value: "One24 is looking for UI Designers", time: "45m" },
                  ]}
                />
              ) : (
                " "
              )}
            </DropdownSelect>
            {/****************** User Dropdown ended  ********************/}

            <Avatar className="icon" onClick={() => handleClose()}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 13C10.5376 13 13 10.5376 13 7.5C13 4.46243 10.5376 2 7.5 2C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13Z"
                  stroke="#C9CBE2"
                  strokeWidth="2.17391"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="26"
                height="12"
                viewBox="0 0 26 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 10V7.33333C24 5.91885 23.4205 4.56229 22.3891 3.5621C21.3576 2.5619 19.9587 2 18.5 2H7.5C6.04131 2 4.64236 2.5619 3.61091 3.5621C2.57946 4.56229 2 5.91885 2 7.33333V10"
                  stroke="#C9CBE2"
                  strokeWidth="2.17391"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Avatar>
          </Icons>
        </Right>
      ) : (
        <Menus>
          <DropdownSelect>
            {/****************** Signup Dropdown started  ********************/}

            {!showSignup ? (
              " "
            ) : (
              <>
                <SigninOptions>
                  <OptionTitle onClick={() => handleSignupClose()}>
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        lineHeight: "22px",
                        textTransform: "uppercase",
                        color: "#404366",
                      }}
                      className="option-title"
                    >
                      Sign Up
                    </span>
                  </OptionTitle>
                  <Option style={{ marginBottom: "15px" }}>
                    <Img
                      style={{ width: "28px", height: "32px" }}
                      src="/student1.svg"
                    />
                    <Link href="/signup">
                      <label
                        style={{
                          textAlign: "center",
                          flex: "1",
                        }}
                      >
                        Student
                      </label>
                    </Link>
                  </Option>
                  <Option style={{ marginBottom: "10px" }}>
                    <Img
                      style={{ width: "28px", height: "26px" }}
                      src="/recruiter.svg"
                    />
                    <label
                      style={{
                        textAlign: "center",
                        flex: "1",
                      }}
                    >
                      Recruiter
                    </label>
                  </Option>
                </SigninOptions>
              </>
            )}
          </DropdownSelect>
          <DropdownSelect>
            {/****************** Signin Dropdown started  ********************/}

            {!showSignin ? (
              " "
            ) : (
              <>
                <SigninOptions>
                  <OptionTitle onClick={() => handleSigninClose()}>
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        lineHeight: "22px",
                        textTransform: "uppercase",
                        color: "#404366",
                      }}
                      className="option-title"
                    >
                      Sign In
                    </span>
                  </OptionTitle>
                  <Option style={{ marginBottom: "15px" }}>
                    <Img
                      style={{ width: "28px", height: "32px" }}
                      src="/student1.svg"
                    />
                    <Link href="/signin">
                      <label
                        style={{
                          textAlign: "center",
                          flex: "1",
                        }}
                      >
                        Student
                      </label>
                    </Link>
                  </Option>
                  <Option style={{ marginBottom: "10px" }}>
                    <Img
                      style={{ width: "28px", height: "26px" }}
                      src="/recruiter.svg"
                    />
                    <label
                      style={{
                        textAlign: "center",
                        flex: "1",
                      }}
                    >
                      Recruiter
                    </label>
                  </Option>
                </SigninOptions>
              </>
            )}
          </DropdownSelect>

          <a href="#">Post an Internship</a>
          <Link href="/internship/home">Find Internships</Link>
          {/* <Link href="/signin"> */}
          <button className="secondary_btn" onClick={handleSigninClose}>
            Sign In
          </button>
          {/* </Link> */}
          {/* <Link href="/signup"> */}
          <button className="primary_btn" onClick={handleSignupClose}>
            Sign Up
          </button>
          {/* </Link> */}
        </Menus>
      )}
    </Wrapper>
  );
};

export default Navbar;
