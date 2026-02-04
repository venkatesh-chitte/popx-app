import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Flex,
} from '@chakra-ui/react';

export default function LoginPage({ onNavigate, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (isFormValid) {
      // Pass email and password to parent
      onLogin(email, password);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        bg="white"
        p={10}
        borderRadius="xl"
        boxShadow="sm"
        border="1px"
        borderColor="gray.100"
        w="450px"
      >
        <Heading size="lg" mb={2} fontWeight="semibold" color="gray.800">
          Signin to your
          <br />
          PopX account
        </Heading>
        <Text color="gray.400" mb={8} fontSize="sm">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </Text>
        <VStack spacing={5} w="full" align="stretch">
          <FormControl>
            <FormLabel color="brand.500" fontSize="sm" fontWeight="medium" mb={2}>
              Email Address
            </FormLabel>
            <Input
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              borderColor="gray.200"
              _placeholder={{ color: 'gray.300' }}
              _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="brand.500" fontSize="sm" fontWeight="medium" mb={2}>
              Password
            </FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              borderColor="gray.200"
              _placeholder={{ color: 'gray.300' }}
              _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
            />
          </FormControl>
          <Button
            bg={isFormValid ? 'brand.500' : 'gray.300'}
            color="white"
            w="full"
            size="lg"
            mt={2}
            borderRadius="md"
            fontWeight="medium"
            onClick={handleLogin}
            isDisabled={!isFormValid}
            _hover={isFormValid ? { bg: '#6D28D9' } : {}}
            cursor={isFormValid ? 'pointer' : 'not-allowed'}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}