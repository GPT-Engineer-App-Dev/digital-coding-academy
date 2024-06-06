import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const courses = [
  { id: 1, title: "Web Development", description: "Learn HTML, CSS, and JavaScript to build modern web applications." },
  { id: 2, title: "Data Science", description: "Master Python and data analysis to uncover insights from data." },
  { id: 3, title: "Machine Learning", description: "Dive into machine learning algorithms and build intelligent systems." },
];

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    setEnrolled(true);
  };

  if (!course) {
    return (
      <Container maxW="container.md" py={20}>
        <Heading as="h3" size="xl" textAlign="center">
          Course not found
        </Heading>
      </Container>
    );
  }

  return (
    <Box as="section" py={20} bg="gray.100">
      <Container maxW="container.md">
        <Heading as="h3" size="xl" mb={6} textAlign="center">
          {course.title}
        </Heading>
        <Text fontSize="lg" mb={6}>
          {course.description}
        </Text>
        {enrolled ? (
          <Text fontSize="lg" color="green.500">
            You are enrolled in this course!
          </Text>
        ) : (
          <Button colorScheme="teal" onClick={handleEnroll}>
            Enroll Now
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default CourseDetails;