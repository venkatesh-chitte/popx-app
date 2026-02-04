import React from 'react';
import { Box, Heading, Text, Button, VStack, Flex } from '@chakra-ui/react';

export default function LandingPage({ onNavigate }) {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        bg="white"
        p={10}
        borderRadius="xl"
        boxShadow="sm"
        border="1px"
        borderColor="gray.100"
        textAlign="center"
        w="400px"
      >
        <Heading size="lg" mb={3} fontWeight="semibold" color="gray.800">
          Welcome to PopX
        </Heading>
        <Text color="gray.400" mb={8} fontSize="sm">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </Text>
        <VStack spacing={3} w="full">
          <Button
            bg="brand.500"
            color="white"
            w="full"
            size="lg"
            borderRadius="md"
            fontWeight="medium"
            _hover={{ bg: '#6D28D9' }}
            onClick={() => onNavigate('signup')}
          >
            Create Account
          </Button>
          <Button
            bg="brand.300"
            color="white"
            w="full"
            size="lg"
            borderRadius="md"
            fontWeight="medium"
            _hover={{ bg: 'brand.400' }}
            onClick={() => onNavigate('login')}
          >
            Already Registered? Login
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}