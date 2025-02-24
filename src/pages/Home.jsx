import React from "react";
import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="red.500" color="white" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Hot Dog Shop
          </Heading>
          <Text fontSize="xl" mb={6}>
            Serving a variety of delicious hot dogs with the freshest ingredients.
          </Text>
          <Button as={Link} to="/menu" colorScheme="yellow" size="lg">
            View Menu
          </Button>
        </Container>
      </Box>

      {/* Featured Image */}
      <Box>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/delicious-hot-dog"
          alt="Delicious Hot Dog"
          width="100%"
          height="500px"
          objectFit="cover"
        />
      </Box>

      {/* About Section */}
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/hot-dog-preparation"
            alt="Hot Dog Preparation"
            borderRadius="md"
          />
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text fontSize="lg">
              At Hot Dog Shop, we take pride in serving the best hot dogs in town. Our menu features a variety of
              flavors, from classic to gourmet, ensuring there's something for everyone.
            </Text>
            <Button as={Link} to="/about" colorScheme="red">
              Learn More
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Menu Preview */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Our Popular Hot Dogs
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <VStack bg="white" p={5} borderRadius="md" boxShadow="md">
              <Image
                src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/classic-hot-dog"
                alt="Classic Hot Dog"
                borderRadius="md"
              />
              <Text fontSize="lg" fontWeight="bold">
                Classic Hot Dog
              </Text>
            </VStack>
            <VStack bg="white" p={5} borderRadius="md" boxShadow="md">
              <Image
                src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/chili-cheese-hot-dog"
                alt="Chili Cheese Hot Dog"
                borderRadius="md"
              />
              <Text fontSize="lg" fontWeight="bold">
                Chili Cheese Hot Dog
              </Text>
            </VStack>
            <VStack bg="white" p={5} borderRadius="md" boxShadow="md">
              <Image
                src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/gourmet-hot-dog"
                alt="Gourmet Hot Dog"
                borderRadius="md"
              />
              <Text fontSize="lg" fontWeight="bold">
                Gourmet Hot Dog
              </Text>
            </VStack>
          </SimpleGrid>
          <Box textAlign="center" mt={10}>
            <Button as={Link} to="/menu" colorScheme="red" size="lg">
              View Full Menu
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.lg" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Visit Us Today!
        </Heading>
        <Text fontSize="lg" mb={6}>
          Stop by and enjoy the best hot dogs in town. We can't wait to serve you!
        </Text>
        <Button as={Link} to="/contact" colorScheme="yellow" size="lg">
          Get Directions
        </Button>
      </Container>

      {/* Footer */}
      <Box bg="red.600" color="white" py={6} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Hot Dog Shop. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Home;