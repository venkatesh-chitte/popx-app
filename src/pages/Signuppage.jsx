import { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  HStack,
  Radio,
  RadioGroup,
  Text,
  Flex,
} from '@chakra-ui/react';

export default function SignupPage({ onNavigate, onSignup }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' }); // clear error while typing
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (validate()) {
      onSignup(formData);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50" py={10}>
      <Box
        bg="white"
        p={10}
        borderRadius="xl"
        boxShadow="sm"
        border="1px"
        borderColor="gray.100"
        w="450px"
      >
        <Heading size="lg" mb={8} fontWeight="semibold" color="gray.800">
          Create your
          <br />
          PopX account
        </Heading>

        <VStack spacing={5} w="full" align="stretch">
          <FormControl isInvalid={errors.fullName}>
            <FormLabel color="brand.500" fontSize="sm">
              Full Name*
            </FormLabel>
            <Input
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
            />
            <FormErrorMessage>{errors.fullName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.phoneNumber}>
            <FormLabel color="brand.500" fontSize="sm">
              Phone number*
            </FormLabel>
            <Input
              placeholder="9876543210"
              value={formData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
            <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel color="brand.500" fontSize="sm">
              Email address*
            </FormLabel>
            <Input
              placeholder="mail@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel color="brand.500" fontSize="sm">
              Password*
            </FormLabel>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.companyName}>
            <FormLabel color="brand.500" fontSize="sm">
              Company name*
            </FormLabel>
            <Input
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
            />
            <FormErrorMessage>{errors.companyName}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel color="gray.600" fontSize="sm">
              Are you an Agency?*
            </FormLabel>
            <RadioGroup
              value={formData.isAgency}
              onChange={(value) => handleChange('isAgency', value)}
            >
              <HStack spacing={8}>
                <Radio value="yes" colorScheme="purple">Yes</Radio>
                <Radio value="no" colorScheme="purple">No</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <Button
            bg="brand.500"
            color="white"
            w="full"
            size="lg"
            mt={6}
            _hover={{ bg: '#6D28D9' }}
            onClick={handleSignup}
          >
            Create Account
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}
