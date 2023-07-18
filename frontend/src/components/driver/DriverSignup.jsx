import { useState } from "react";
import DriverPageFooter from "./DriverPageFooter";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Checkbox,
  Grid,
  useToast,
  HStack,
  Image,
  Center,
  Text,
  Spacer
} from "@chakra-ui/react";
const baseURL = "https://uber-u41r.onrender.com";

const DriverSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [availability, setAvailability] = useState(false);
  const toast = useToast();
  const handleSignup = async () => {
    // Perform signup logic here
    // You can use the state values to send a signup request to the backend
    // Example: axios.post('/api/driver/register', { name, email, password, contact, location, vehicle, vehicleType, availability })
    try {
      const response = await axios.post(`${baseURL}/drivers/register`, {
        name,
        email,
        pass: password,
        contact,
        location,
        vehicle,
        vehicleType,
        availability,
      });

      if (response.status === 200) {
        console.log("Driver has been registered");
        toast({
          title: "Success",
          description: "Driver has been registered",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        // Perform any additional actions after successful signup
      } else {
        console.log("Error: Failed to register driver");
        toast({
          title: "Error",
          description: "Failed to register driver",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log("Error: Failed to register driver", error);
      toast({
        title: "Error",
        description: "Failed to register driver",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      // Handle the error case
    }
  };

  return (
    <>
      <Center fontSize={45} mt="2" color="#212529" fontWeight={"bold"}>
        Apply to drive with Savari{" "}
        <Image
          w="100px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg0iyKahA50q4EIeuUd6KxtfaynHmUpS-Qg&usqp=CAU"
        />
      </Center>
      <HStack margin="5px" gap={20}>
        <Box>
          <Image src="https://images.ctfassets.net/q8mvene1wzq4/2U9CYHaJUPoUS5s00qjNh8/5bdbdacc2ad1ddd640896a2ab89339fb/dvr_hero_pp.jpg?w=1000&q=60&fm=webp" />
        </Box>
        <Box margin="auto" width={"50%"}>
          <Center fontSize={35} mt="5" color="#212529" fontWeight={"bold"}>
            Register Yourself
          </Center>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={4}
            color={"white"}
            bg={"#212529"}
            p={"15px"}
            borderRadius={"10px"}
          >
            <FormControl marginBottom="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                borderColor={"black"}
                bg="grey"
                placeholder="Enter Name"
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor={"black"}
                bg="grey"
                placeholder="Enter Email"
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderColor={"black"}
                bg="grey"
                placeholder="Enter password"
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Contact</FormLabel>
              <Input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                borderColor={"black"}
                bg="grey"
                placeholder="Enter contact details"
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                borderColor={"black"}
                bg="grey"
                placeholder="Enter Your Location"
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Vehicle</FormLabel>
              <Input
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                borderColor={"black"}
                bg="grey"
                placeholder="Enter Vehicle Name"
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Vehicle Type</FormLabel>
              <Input
                type="text"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                borderColor={"black"}
                bg="grey"
                placeholder="Enter Vehicle Type like sudan,mini"
              />
            </FormControl>

            <FormControl marginBottom="4">
              <Checkbox
                isChecked={availability}
                onChange={(e) => setAvailability(e.target.checked)}
                borderColor={"white"}
                bg="grey"
                mt={12}
              >
                Available for service
              </Checkbox>
            </FormControl>
          </Grid>
          <HStack display="flex" justifyContent="space-evenly" >
            <Button bg="#000" color={"white"} onClick={handleSignup}>
              Sign Up
            </Button>
            <Text mt="4">
              Already Have Account ? 
              <Link to="/driverlogin">
              
                <Button ml="4" color="white" bg="#000">
                  Sign In
                </Button>
              </Link>
            </Text>
          </HStack>
        </Box>
      </HStack>
      <DriverPageFooter />
    </>
  );
};

export default DriverSignup;
