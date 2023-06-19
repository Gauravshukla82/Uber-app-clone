import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  useToast,
  Center,
  Image,
} from "@chakra-ui/react";

const DriverLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email,
      pass,
    };
    console.log(payload);
    fetch("http://localhost:8000/drivers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to log in");
        }
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        toast({
          title: "Login Successful",
          description: "You have successfully logged in",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "Failed to log in",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });

    setEmail("");
    setPass("");
  };

  return (
    <>
      <Center fontSize={45} mt="2" color="#212529" fontWeight={"bold"}>
        Quick start to Login
        <Image
          w="100px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg0iyKahA50q4EIeuUd6KxtfaynHmUpS-Qg&usqp=CAU"
        />
      </Center>

      <Box maxW="md" mx="auto" p={4}>
        <Heading size="lg" mb={4}>
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="white"
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              bg="white"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Sign In
          </Button>
        </form>
        <Text mt={4}>
          Don't have an account? <a href="/driver">Sign Up</a>
        </Text>
      </Box>
    </>
  );
};

export default DriverLogin;
