import { Box, Heading, Text, Link, VStack, HStack, IconButton, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Box maxW="800px" mx="auto" p={5}>
      <Heading as="h1" mb={4} textAlign="center">Contact Us</Heading>
      
      <VStack spacing={4} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" size="md">Our Location</Heading>
          <Text>123 Hot Dog Lane, Food City, FC 12345</Text>
          <Box mt={2}>
            <img src="http://stock.calucid.com/fetch/calucid/hot-dog-shop/map" alt="Map Location" width="100%" />
          </Box>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md">Follow Us</Heading>
          <HStack justify="center" spacing={4} mt={2}>
            <Link href="https://facebook.com/hotdogshop" isExternal>
              <IconButton icon={<FaFacebook />} aria-label="Facebook" />
            </Link>
            <Link href="https://instagram.com/hotdogshop" isExternal>
              <IconButton icon={<FaInstagram />} aria-label="Instagram" />
            </Link>
            <Link href="https://twitter.com/hotdogshop" isExternal>
              <IconButton icon={<FaTwitter />} aria-label="Twitter" />
            </Link>
          </HStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md">Email Us</Heading>
          <Text>contact@hotdogshop.com</Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" textAlign="center">Contact Form</Heading>
          <VStack spacing={4} mt={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="red" width="full">Send Message</Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Contact;