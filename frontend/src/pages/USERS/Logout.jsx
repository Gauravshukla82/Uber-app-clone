import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AuthContext";
export const Logout = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AppContext);
  const handleLogout = () => {
    axios
      .get("http://localhost:8000/users/logout")
      .then((res) => {
        setIsAuth(false);
        navigate("/login");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Button colorScheme="red" onClick={handleLogout}>
      Logout
    </Button>
  );
};
