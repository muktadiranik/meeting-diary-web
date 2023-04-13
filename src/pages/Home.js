import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Home = () => {
  const { error, token } = useSelector((state) => state.authReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/departments", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [token, navigate, error]);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Home;
