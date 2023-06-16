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
} from "@chakra-ui/react";

const DriverLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    // Simulating a successful login
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: `Logged in as ${email}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Reset form fields
      setEmail("");
      setPassword("");
    }, 1000);
  };

  return (
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            bg="white"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Sign In
        </Button>
      </form>
      <Text mt={4}>
        Don't have an account? <a href="/signup">Sign Up</a>
      </Text>
    </Box>
  );
};

export default DriverLogin;
