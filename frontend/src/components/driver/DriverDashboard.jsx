import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  useToast,
  Center,
  Image,
  Flex,
  Grid,
  VStack,
  Button,
  Spacer,
} from "@chakra-ui/react";

import DriverPageFooter from "./DriverPageFooter";
const baseURL = "https://uber-u41r.onrender.com";

const DriverDashboard = () => {
  const [driverData, setDriverData] = useState(null); // State to store driver data
  const [accept, setAccept] = useState(false);
  const [reject, setReject] = useState(false);
  const toast = useToast();
  const userData = JSON.parse(localStorage.getItem("userDetails"));

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

  const handleAccept = () => {
    setAccept(!accept);
    toast({
      title: "User Waiting",
      description: "The user is waiting at the location.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  const handleReject = () => {
    setReject(!reject);
    localStorage.removeItem("userDetails");
    toast({
      title: "Ride Request Rejected",
      description: "Some Amount will be deducted from your earnings.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <Center fontSize={45} mt="2" color="#212529" fontWeight={"bold"}>
        {driverData ? (
          <>
            <Text>
              Welcome <span>{driverData.name}</span> To Your Dashboard
            </Text>
            <Image
              w="100px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg0iyKahA50q4EIeuUd6KxtfaynHmUpS-Qg&usqp=CAU"
            />
          </>
        ) : (
          <h4>Login</h4>
        )}
      </Center>
      <Box margin="auto" width="100%" display={{ md: "flex" }} gap={15} m={6}>
        <Box
          p={4}
          color="white"
          bg="#212529"
          flex="25%"
          minW={{ md: "400px" }}
          display={{ md: "flex" }}
          flexDirection={{ md: "column" }}
          textAlign={"center"}
        >
          <Heading size="lg" mb={4}>
            Driver Information
          </Heading>
          {driverData ? (
            <VStack align="left" spacing={2}>
              <Heading fontWeight="bold" size="md">
                {driverData.name}
              </Heading>
              <Text>Email Address: {driverData.email}</Text>
              <Text>Mobile Number: {driverData.contact}</Text>
              <Text>Vehicle: {driverData.vehicle}</Text>
              <Text>Vehicle Type: {driverData.vehicleType}</Text>
              <Text>
                Availability:{" "}
                {driverData.availability ? (
                  <Text color="green">Available</Text>
                ) : (
                  <Text color="red">Not Available</Text>
                )}
              </Text>
              <Text>Overall Rating: {driverData.ratings}</Text>
            </VStack>
          ) : (
            <Text>No driver data available</Text>
          )}
        </Box>
        <Box
          flex="65%"
          backgroundImage={
            "https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png"
          }
        >
          <Heading bg="green.200" size="md" textAlign={"center"}>
            {driverData ? (
              <span>Your Trips are here</span>
            ) : (
              <span>No Trips available</span>
            )}
          </Heading>
          {reject ? null : (
            <Box
              textAlign={"center"}
              justifyContent={"center"}
              bg="white"
              width={"30%"}
              m="5% 35%"
              fontWeight={"bold"}
              gap={6}
              p={7}
            >
              <Text>Name : {userData?.userName}</Text>
              <Text>Email : {userData?.userEmail}</Text>
              <Text bg="white">Origin Location : {userData?.origin}</Text>{" "}
              <Text>Destination Location : {userData?.destination}</Text>
              <Text>
                Fare : {Math.ceil(userData?.distanceNumber * userData?.mul)}
              </Text>
              <Button colorScheme="green" onClick={handleAccept} mr={5}>
                {accept ? "User is waiting" : "Accept"}
              </Button>
              {accept ? null : (
                <Button colorScheme="red" onClick={handleReject}>
                  Reject
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Box>
      <Heading textAlign={"center"}>
        There's an Savari ride for everyone
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr", // 1 column on small screens
          sm: "repeat(2, 1fr)", // 2 columns on medium screens
          md: "repeat(3, 1fr)", // 3 columns on large screens
        }}
        gap={6}
        m={6}
      >
        <Box>
          <Image src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-budget.svg" />
          <Heading size="md">For any budget</Heading>
          <Heading size="sm">
            From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a
            ride in your budget at your convenience any time.
          </Heading>
        </Box>
        <Box>
          <Image src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-distance.svg" />
          <Heading size="md">For any distance</Heading>
          <Heading size="sm">
            Book rides within the city with Daily, or take a trip to your
            favourite destinations outside the city with Outstation.
          </Heading>
        </Box>
        <Box>
          <Image src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-duration.svg" />
          <Heading size="md">For any duration</Heading>
          <Heading size="sm">
            Easily plan a day out without having to worry about conveyance with
            an hour-based package from Rental.
          </Heading>
        </Box>
      </Grid>
      <Box m={6}>
        <Heading mb={4} color="blue.400" textAlign={"center"}>
          Make every day payday
        </Heading>
        <Image
          borderRadius={5}
          src="https://images.ctfassets.net/q8mvene1wzq4/14j1VooOckKD3p29hMHlaz/55206618a33b79c121968f9e8eb68ab8/dvr_pgr_pp.jpg"
        />
        <Heading mt={5}>We have your back</Heading>
        <Text mt={5} mb={5}>
          When you drive with Lyft, you're part of a community that prioritizes
          safety on the road. We have tools in the app for you to get help
          easily, if you ever need it. And we’re looking out for your well-being
          before, during, and after every ride.
        </Text>
      </Box>
      <DriverPageFooter />
    </>
  );
};

export default DriverDashboard;
