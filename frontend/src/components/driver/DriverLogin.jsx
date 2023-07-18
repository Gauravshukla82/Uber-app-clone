import { useState, useEffect } from "react";
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
import { Link, Navigate, useNavigate } from "react-router-dom";
const baseURL = "https://uber-u41r.onrender.com";
// import DriverDashboard from "./DriverDashboard";

const DriverLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [driverData, setDriverData] = useState(null); // State to store driver data
  const toast = useToast();
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch driver data when the component mounts
    fetchDriverData();
  }, []);

  const fetchDriverData = () => {
    // Fetch driver data from the server
    fetch(`${baseURL}/drivers/dashboard`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Pass the token in the authorization header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDriverData(data.driver);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "Failed to fetch driver data",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email,
      pass,
    };
    console.log(payload);
    fetch(`${baseURL}/drivers/login`, {
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
        navigate("/driverdashboard")
        toast({
          title: "Login Successful",
          description: "You have successfully logged in",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        fetchDriverData(); // Fetch driver data again after login
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
          Don't have an account? <Link to="/driver"><Button colorScheme="blue">Sign Up</Button></Link>
        </Text>
      </Box>
    </>
  );
};

export default DriverLogin;
