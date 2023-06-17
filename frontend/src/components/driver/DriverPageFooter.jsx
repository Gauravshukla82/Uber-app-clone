import { Box, Flex, Text, Link } from "@chakra-ui/react";

const DriverPageFooter = () => {
  return (
    <Box bg="gray.200" py={4}>
      <Flex justify="center" align="center">
        <Text fontSize="sm" mr={2} mt={3}>
          &copy; 2023 Your Company. All rights reserved.
        </Text>
        <Link fontSize="sm" color="blue.500" href="/terms">
          Terms of Service |
        </Link>

        <Link fontSize="sm" color="blue.500" href="/privacy">
          Privacy Policy
        </Link>
      </Flex>
    </Box>
  );
};

export default DriverPageFooter;
