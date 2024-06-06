import React, { useState } from 'react';
import { Box, Button, Textarea } from '@chakra-ui/react';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <Box>
      <Textarea
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your code here..."
        size="md"
        height="400px"
        fontFamily="monospace"
        whiteSpace="pre"
        overflowX="auto"
        bg="gray.50"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        p={4}
      />
      <Button onClick={runCode} colorScheme="teal" mt={4}>
        Run Code
      </Button>
    </Box>
  );
};

export default CodeEditor;