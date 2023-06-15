import React from "react";
import { Box, Button, Heading, Input, Stack, Center } from "@chakra-ui/react";
export const Login = () => {
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
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button colorScheme="blue" size="lg" width="100%">
            Sign In
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

