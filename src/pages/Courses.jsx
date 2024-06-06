import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "Web Development", description: "Learn HTML, CSS, and JavaScript to build modern web applications." },
  { id: 2, title: "Data Science", description: "Master Python and data analysis to uncover insights from data." },
  { id: 3, title: "Machine Learning", description: "Dive into machine learning algorithms and build intelligent systems." },
];

const Courses = () => {
  return (
    <Box as="section" py={20} bg="gray.100">
      <Container maxW="container.md">
        <Heading as="h3" size="xl" mb={6} textAlign="center">
          Available Courses
        </Heading>
        <Stack direction="column" spacing={8}>
          {courses.map((course) => (
            <Box key={course.id} bg="white" p={6} shadow="md" borderRadius="md">
              <Heading as="h4" size="md" mb={4}>
                {course.title}
              </Heading>
              <Text mb={4}>{course.description}</Text>
              <Button as={Link} to={`/courses/${course.id}`} colorScheme="teal">
                View Details
              </Button>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Courses;