import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { removeAuthTokenAction } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.authReducer);

  const navigator = useNavigate();

  useEffect(() => {
    if (!token) {
      navigator("/", { replace: true });
    }
  }, [dispatch, token, navigator]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (localStorage.getItem("refreshToken")) {
        axios
          .post(`${process.env.REACT_APP_API_URL}/token/refresh/`, {
            refresh: localStorage.getItem("refreshToken"),
          })
          .then((data) => {
            if (data.data.access) {
              localStorage.setItem("accessToken", data.data.access);
            } else {
              localStorage.clear();
              window.location.herf = "/";
            }
          })
          .catch((error) => {
            localStorage.clear();
            window.location.href = "/";
          });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <Navbar bg="light" expand="xxl">
      <Container fluid>
        <LinkContainer to={token ? "/departments" : "/"}>
          <Navbar.Brand>Meeting Diary</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {token ? (
              <Nav.Link
                onClick={() => {
                  dispatch(removeAuthTokenAction());
                }}>
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link href="/">Sign In</Nav.Link>
            )}
          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
