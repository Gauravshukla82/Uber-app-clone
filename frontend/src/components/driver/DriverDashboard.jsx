import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
} from "@chakra-ui/react";

const DriverDashboard = () => {
  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
    // Fetch driver data from the backend
    fetch("http://localhost:8000/driverpage", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDriverData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (driverId) => {
    // Find the driver data to edit based on the driverId
    const driverToEdit = driverData.find((driver) => driver._id === driverId);
    // Implement the edit functionality
    // Set the edited driver data back to the state
    setDriverData((prevDriverData) =>
      prevDriverData.map((driver) => {
        if (driver._id === driverId) {
          return { ...driver, ...driverToEdit };
        }
        return driver;
      })
    );
  };

  const handleSave = (driverId) => {
    // Find the driver data to save based on the driverId
    const driverToSave = driverData.find((driver) => driver._id === driverId);
    // Implement the save functionality
    // Update the driver data on the backend
    fetch(`http://localhost:8000/driverpage/${driverId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(driverToSave),
    })
      .then((res) => res.json())
      .then((updatedDriver) => {
        // Update the driver data in the state with the saved changes
        setDriverData((prevDriverData) =>
          prevDriverData.map((driver) => {
            if (driver._id === driverId) {
              return updatedDriver;
            }
            return driver;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box maxW="md" mx="auto" p={4}>
      <Heading size="lg" mb={4}>
        Driver Dashboard
      </Heading>
      {driverData.length > 0 ? (
        driverData.map((driver) => (
          <Box key={driver._id} mb={6}>
            <Text fontWeight="bold">Bio:</Text>
            <Text>{driver.bio}</Text>
            <Text fontWeight="bold" mt={4}>
              Profile Picture:
            </Text>
            <Image src={driver.profilePicture} />
            {driver.socialMediaLinks && (
              <>
                <Text fontWeight="bold" mt={4}>
                  Social Media Links:
                </Text>
                <Text>
                  Facebook:{" "}
                  <a href={driver.socialMediaLinks.facebook}>
                    {driver.socialMediaLinks.facebook}
                  </a>
                </Text>
                <Text>
                  Twitter:{" "}
                  <a href={driver.socialMediaLinks.twitter}>
                    {driver.socialMediaLinks.twitter}
                  </a>
                </Text>
                <Text>
                  Instagram:{" "}
                  <a href={driver.socialMediaLinks.instagram}>
                    {driver.socialMediaLinks.instagram}
                  </a>
                </Text>
              </>
            )}
            {driver.paymentSettings && (
              <>
                <Text fontWeight="bold" mt={4}>
                  Payment Settings:
                </Text>
                <Text>
                  Payment Method: {driver.paymentSettings.paymentMethod}
                </Text>
                <Text>
                  Account Number: {driver.paymentSettings.accountNumber}
                </Text>
              </>
            )}
            <Button
              colorScheme="blue"
              size="sm"
              onClick={() => handleEdit(driver._id)}
              mt={4}
            >
              Edit Account Details
            </Button>
            <Button
              colorScheme="green"
              size="sm"
              onClick={() => handleSave(driver._id)}
              mt={2}
            >
              Save Account Details
            </Button>
          </Box>
        ))
      ) : (
        <Text>Loading driver data...</Text>
      )}
    </Box>
  );
};

export default DriverDashboard;
