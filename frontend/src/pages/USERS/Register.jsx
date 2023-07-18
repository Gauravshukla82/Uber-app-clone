import React, { useState } from "react";
import { useNavigate} from 'react-router-dom'
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
// import { Link as ChakraLink } from "@chakra-ui/react";
import axios from "axios";
const initState = {
  name: "",
  email: "",
  password: "",
};
export const Register = () => {
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
      .post(`https://uber-u41r.onrender.com/users/register`, user)
      .then((res) => {
        console.log(res);
        setUser(initState);
        alert("successfully registered")
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
        alert("already user is registered")
      });
  };

  const { name, email, password } = user;
  return (
    <Flex minHeight="100vh" align="center" justify="center" bg="gray.100">
      <Box bg="white" p={8} rounded="md" shadow="md" maxWidth="400px" w="100%">
        <Heading as="h1" size="xl" mb={8} textAlign={"center"}>
          Register
        </Heading>
        <Stack spacing={4}>
          <FormControl isRequired>
            <Input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            onClick={handleSubmit}
            colorScheme="blue"
            size="lg"
            width="100%"
          >
            Register
          </Button>
          <Text textAlign="center" fontSize="sm">
            Already logged in?{" "}
            <ReactRouterLink to="/login">
              log in
            </ReactRouterLink>
           
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};
