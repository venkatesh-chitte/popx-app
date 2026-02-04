import {
    Box,
    Text,
    Button,
    VStack,
    HStack,
    Avatar,
    Flex,
    Badge,
  } from '@chakra-ui/react';
  
  export default function ProfilePage({ onNavigate, userData }) {
    // Default values if no user data
    const displayName = userData?.name || 'Guest User';
    const displayEmail = userData?.email || 'guest@example.com';
    const userSource = userData?.source || 'unknown';
  
    return (
      <Flex minH="100vh" align="center" justify="center" bg="gray.50">
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          boxShadow="sm"
          border="1px"
          borderColor="gray.100"
          w="450px"
        >
          <HStack justify="space-between" align="center" mb={6}>
            <Text fontSize="md" fontWeight="medium" color="gray.600">
              Account Settings
            </Text>
            <Badge colorScheme={userSource === 'signup' ? 'green' : 'blue'}>
              {userSource === 'signup' ? 'New Account' : 'Logged In'}
            </Badge>
          </HStack>
  
          <VStack spacing={6} align="start" w="full">
            <HStack spacing={4} w="full" align="start">
              <Box position="relative">
                <Avatar
                  size="xl"
                  src={`https://i.pravatar.cc/150?u=${displayEmail}`}
                  name={displayName}
                />
                <Box
                  position="absolute"
                  bottom="0"
                  right="0"
                  bg="brand.500"
                  w="24px"
                  h="24px"
                  borderRadius="full"
                  border="3px solid white"
                />
              </Box>
              <Box>
                <Text fontWeight="semibold" fontSize="md" color="gray.800">
                  {displayName}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {displayEmail}
                </Text>
              </Box>
            </HStack>
  
            {/* Show additional info if from signup */}
            {userData?.source === 'signup' && (
              <VStack spacing={3} align="start" w="full" pl={2}>
                {userData.phone && (
                  <HStack>
                    <Text fontSize="sm" fontWeight="medium" color="gray.600">
                      Phone:
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {userData.phone}
                    </Text>
                  </HStack>
                )}
                {userData.company && (
                  <HStack>
                    <Text fontSize="sm" fontWeight="medium" color="gray.600">
                      Company:
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {userData.company}
                    </Text>
                  </HStack>
                )}
                {userData.isAgency && (
                  <HStack>
                    <Text fontSize="sm" fontWeight="medium" color="gray.600">
                      Agency:
                    </Text>
                    <Badge colorScheme={userData.isAgency === 'yes' ? 'purple' : 'gray'}>
                      {userData.isAgency === 'yes' ? 'Yes' : 'No'}
                    </Badge>
                  </HStack>
                )}
              </VStack>
            )}
  
            <Text color="gray.600" fontSize="sm" lineHeight="1.8">
              {userData?.source === 'signup'
                ? `Welcome to PopX, ${displayName}! Your account has been successfully created. You can now access all features and manage your profile.`
                : `Welcome back, ${displayName}! You have successfully logged in to your PopX account.`}
            </Text>
          </VStack>
  
          <Button
            variant="outline"
            colorScheme="purple"
            borderColor="brand.500"
            color="brand.500"
            size="sm"
            mt={8}
            onClick={() => onNavigate('landing')}
            fontWeight="medium"
          >
            Back to Home
          </Button>
        </Box>
      </Flex>
    );
  }