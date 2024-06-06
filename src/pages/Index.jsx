import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          CodeLearn
        </Heading>
        <Flex gap={4}>
          <Button as={Link} to="/" variant="link" color="white">
            Home
          </Button>
          <Button as={Link} to="/courses" variant="link" color="white">
            Courses
          </Button>
          <Button as={Link} to="/about" variant="link" color="white">
            About
          </Button>
          <Button as={Link} to="/contact" variant="link" color="white">
            Contact
          </Button>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box
        as="section"
        bgImage="url('/images/hero-background.jpg')"
        bgSize="cover"
        bgPosition="center"
        color="white"
        textAlign="center"
        py={20}
      >
        <Container maxW="container.md">
          <Heading as="h2" size="2xl" mb={4}>
            Learn to Code, Build Your Future
          </Heading>
          <Text fontSize="xl" mb={6}>
            Join our community and start your journey to becoming a coding expert.
          </Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Featured Courses Section */}
      <Box as="section" py={20} bg="gray.100">
        <Container maxW="container.md">
          <Heading as="h3" size="xl" mb={6} textAlign="center">
            Featured Courses
          </Heading>
          <Stack direction={["column", "row"]} spacing={8} justify="center">
            <Box bg="white" p={6} shadow="md" borderRadius="md">
              <Heading as="h4" size="md" mb={4}>
                Web Development
              </Heading>
              <Text mb={4}>Learn HTML, CSS, and JavaScript to build modern web applications.</Text>
              <Button colorScheme="teal">Enroll Now</Button>
            </Box>
            <Box bg="white" p={6} shadow="md" borderRadius="md">
              <Heading as="h4" size="md" mb={4}>
                Data Science
              </Heading>
              <Text mb={4}>Master Python and data analysis to uncover insights from data.</Text>
              <Button colorScheme="teal">Enroll Now</Button>
            </Box>
            <Box bg="white" p={6} shadow="md" borderRadius="md">
              <Heading as="h4" size="md" mb={4}>
                Machine Learning
              </Heading>
              <Text mb={4}>Dive into machine learning algorithms and build intelligent systems.</Text>
              <Button colorScheme="teal">Enroll Now</Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box as="section" py={20}>
        <Container maxW="container.md">
          <Heading as="h3" size="xl" mb={6} textAlign="center">
            What Our Students Say
          </Heading>
          <Stack direction={["column", "row"]} spacing={8} justify="center">
            <Box bg="gray.50" p={6} shadow="md" borderRadius="md">
              <Text mb={4}>
                "CodeLearn has transformed my career. The courses are well-structured and easy to follow."
              </Text>
              <Text fontWeight="bold">- Jane Doe</Text>
            </Box>
            <Box bg="gray.50" p={6} shadow="md" borderRadius="md">
              <Text mb={4}>
                "The community support is amazing. I was able to get help whenever I needed it."
              </Text>
              <Text fontWeight="bold">- John Smith</Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" py={20} bg="gray.100">
        <Container maxW="container.md">
          <Heading as="h3" size="xl" mb={6} textAlign="center">
            About CodeLearn
          </Heading>
          <Text fontSize="lg" textAlign="center">
            CodeLearn is an online learning platform dedicated to teaching coding skills to individuals of all levels. Our mission is to make coding accessible and enjoyable for everyone.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;