import { Box, Container, Heading, Text, Image, VStack, HStack, Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          About Hot Dog Shop
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/interior"
          alt="Hot Dog Shop Interior"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Welcome to Hot Dog Shop, a small but mighty hot dog joint where we serve a variety of delicious hot dogs made
          with the finest ingredients. Whether you love classic flavors or adventurous toppings, we have something for
          everyone!
        </Text>
        <Divider />
        <Heading as="h2" size="xl" textAlign="center">
          Our Story
        </Heading>
        <HStack spacing={6} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/founder"
            alt="Founder of Hot Dog Shop"
            borderRadius="md"
            boxSize="300px"
          />
          <Text fontSize="lg">
            Hot Dog Shop was founded with a simple mission: to bring people together over great food. Our journey began
            with a love for hot dogs and a passion for quality ingredients. Today, we continue to serve up mouthwatering
            creations that keep our customers coming back for more.
          </Text>
        </HStack>
        <Divider />
        <Heading as="h2" size="xl" textAlign="center">
          Our Hot Dogs
        </Heading>
        <VStack spacing={4}>
          <Image
            src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/gourmet-hotdog"
            alt="Gourmet Hot Dog"
            borderRadius="md"
          />
          <Text fontSize="lg" textAlign="center">
            From classic all-beef hot dogs to gourmet creations topped with unique ingredients, we take pride in every
            bite. Our menu is crafted to satisfy every craving, whether you like it simple or fully loaded.
          </Text>
        </VStack>
        <Divider />
        <Heading as="h2" size="xl" textAlign="center">
          Visit Us
        </Heading>
        <HStack spacing={6} align="center">
          <Text fontSize="lg">
            Come visit us and experience the best hot dogs in town! We are located in the heart of the city, ready to
            serve you fresh and delicious hot dogs every day.
          </Text>
          <Image
            src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/location"
            alt="Hot Dog Shop Location"
            borderRadius="md"
            boxSize="300px"
          />
        </HStack>
      </VStack>
    </Container>
  );
};

export default About;