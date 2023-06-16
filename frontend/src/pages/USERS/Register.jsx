import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, SmallAddIcon } from "@chakra-ui/icons";

export const Register = () => {
  return (
    <Flex minHeight="100vh" align="center" justify="center" bg="gray.100">
      <Box bg="white" p={8} rounded="md" shadow="md" maxWidth="400px" w="100%">
        <Heading as="h1" size="xl" mb={8} textAlign={"center"}>
          Register
        </Heading>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <Input type="text" placeholder="Enter your name" />
          </FormControl>
          <FormControl id="email" isRequired>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="blue" size="lg" width="100%">
            Register
          </Button>
        </Stack>
        <Center my={4}>Or register with:</Center>
        <Flex justify="center" direction="column" gap="10px">
          <Button
            aria-label="Continue with Gmail"
            icon={<EmailIcon />}
            colorScheme="red"
            variant="outline"
            mr={2}
          >
            Continue with Gmail
          </Button>
          <Button
            aria-label="Register with Facebook"
            icon={<LockIcon />}
            colorScheme="blue"
            variant="outline"
            mr={2}
          >
            Continue with Facebook
          </Button>
          <Button
            aria-label="Register with Twitter"
            icon={<SmallAddIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Continue with Twitter
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
