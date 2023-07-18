import React, { useState } from "react";
import {json, useNavigate} from 'react-router-dom'
import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import axios from "axios";
const initState = {
  email: "",
  password: "",
  name:"" 
};
export const Login = () => {
  const [user, setUser] = useState(initState);
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://uber-u41r.onrender.com/users/login`, user)
      .then((res) => {
        console.log(res.data.email);
        console.log(res.data.name);
        localStorage.setItem('username', JSON.stringify(res.data.email.split("@")[0]))
        alert("login successfull")
        navigate("/")
        window.location.reload(false);
        setUser(initState);

      })
      .catch((err) => {
        console.log(err);
        alert("invalid crediantials")
      });
      localStorage.setItem("email", JSON.stringify(user) );
  };

  const { email, password } = user;
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      
      <Box bg="white" p={8} rounded="md" shadow="md" maxWidth="400px" w="100%">
        <Heading as="h1" size="xl" mb={4}>
          <Center>Login</Center>
        </Heading>
        <Stack spacing={4}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Stack>
        <Flex justify="center" direction="column" gap="10px" mt="20px">
          <Button
            aria-label="Continue with Gmail"
            colorScheme="red"
            variant="outline"
            mr={2}
          >
            Continue with Gmail
          </Button>
          <Button
            aria-label="Register with Facebook"
            colorScheme="blue"
            variant="outline"
            mr={2}
          >
            Continue with Facebook
          </Button>
          <Button
            aria-label="Register with Twitter"
            colorScheme="teal"
            variant="outline"
          >
            Continue with Twitter
          </Button>
          <Text textAlign="center" fontSize="sm">
            Already logged in?{" "}
            <ChakraLink as={ReactRouterLink} to="/register">
             signup
            </ChakraLink>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

/*
import { Box, Button, Heading, Input, Stack, Center } from "@chakra-ui/react";
import axios from "axios";
const initState = {
  email: "",
  password: "",
};
 const [user, setUser] = useState(initState);
 const { email, password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/users/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        setUser(initState);
      })
      .catch((err) => {
        console.log(err);
      })

*/
