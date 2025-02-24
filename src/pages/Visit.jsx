import { Box, Heading, Text, Image, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={6}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Visit Us
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/restaurant-exterior"
          alt="Hot Dog Shop Exterior"
          borderRadius="md"
          boxShadow="lg"
        />
        <Text fontSize="lg" textAlign="center" maxW="800px">
          Welcome to Hot Dog Shop! We serve a variety of delicious hot dogs in a cozy and friendly atmosphere. 
          Come visit us and enjoy the best hot dogs in town!
        </Text>

        <Box w="full" p={6} bg="gray.100" borderRadius="md" boxShadow="md">
          <VStack spacing={4} align="center">
            <Heading as="h2" size="lg">
              Location
            </Heading>
            <HStack>
              <Icon as={FaMapMarkerAlt} color="red.500" />
              <Text fontSize="md">123 Main Street, Hot Dog City, HD 45678</Text>
            </HStack>
            <Image
              src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/map-location"
              alt="Map Location"
              borderRadius="md"
              boxShadow="md"
            />
          </VStack>
        </Box>

        <Box w="full" p={6} bg="gray.100" borderRadius="md" boxShadow="md">
          <VStack spacing={4} align="center">
            <Heading as="h2" size="lg">
              Hours of Operation
            </Heading>
            <HStack>
              <Icon as={FaClock} color="blue.500" />
              <VStack align="start">
                <Text>Monday - Friday: 11:00 AM - 9:00 PM</Text>
                <Text>Saturday - Sunday: 12:00 PM - 10:00 PM</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>

        <Box w="full" p={6} bg="gray.100" borderRadius="md" boxShadow="md">
          <VStack spacing={4} align="center">
            <Heading as="h2" size="lg">
              Contact Us
            </Heading>
            <HStack>
              <Icon as={FaPhone} color="green.500" />
              <Text>(123) 456-7890</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} color="purple.500" />
              <Text>contact@hotdogshop.com</Text>
            </HStack>
          </VStack>
        </Box>

        <Image
          src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/hot-dog-platter"
          alt="Delicious Hot Dogs"
          borderRadius="md"
          boxShadow="lg"
        />

        <Link href="/" color="blue.500" fontSize="lg">
          Back to Home
        </Link>
      </VStack>
    </Box>
  );
};

export default Visit;