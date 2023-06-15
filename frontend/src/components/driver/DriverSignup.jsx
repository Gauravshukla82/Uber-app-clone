import { useState } from "react";
import DriverPageFooter from "./DriverPageFooter";
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
  background,
  HStack,
  Image,
  Center,
} from "@chakra-ui/react";
import { color } from "framer-motion";

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
      const response = await axios.post(
        "http://localhost:8000/drivers/register",
        {
          name,
          email,
          pass: password,
          contact,
          location,
          vehicle,
          vehicleType,
          availability,
        }
      );

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
      <Center fontSize={50} bg="grey" mt="5" color="black">
        Driver Registration
      </Center>
      <HStack margin={30} gap={20}>
        <Box>
          <Image src="https://images.ctfassets.net/q8mvene1wzq4/2U9CYHaJUPoUS5s00qjNh8/5bdbdacc2ad1ddd640896a2ab89339fb/dvr_hero_pp.jpg?w=1000&q=60&fm=webp" />
        </Box>
        <Box margin="auto" width={"50%"}>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={4}
            bg={"gray.200"}
            p={"15px"}
            borderRadius={"5%"}
          >
            <FormControl marginBottom="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                borderColor={"black"}
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor={"black"}
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderColor={"black"}
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Contact</FormLabel>
              <Input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                borderColor={"black"}
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                borderColor={"black"}
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Vehicle</FormLabel>
              <Input
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                borderColor={"black"}
              />
            </FormControl>

            <FormControl marginBottom="4">
              <FormLabel>Vehicle Type</FormLabel>
              <Input
                type="text"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                borderColor={"black"}
              />
            </FormControl>

            <FormControl marginBottom="4">
              <Checkbox
                isChecked={availability}
                onChange={(e) => setAvailability(e.target.checked)}
                borderColor={"black"}
              >
                Available for service
              </Checkbox>
            </FormControl>
          </Grid>
          <Button colorScheme="teal" onClick={handleSignup}>
            Sign up
          </Button>
          <h4>
            Already Have Account ?<Button colorScheme="teal">Login</Button>
          </h4>
        </Box>
      </HStack>
      <DriverPageFooter />
    </>
  );
};

export default DriverSignup;
