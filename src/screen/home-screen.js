import React from "react";
import Layout from "../components/layout";
import { Box, Container, Stack, InputWrapper, Skeleton } from "../components/styled";



const HomePage = () => {
  return (
    <Layout>
      <Container size="xl" m="48px">
        <h1>Home</h1>
        <Stack spacing="50px" /**direction="column"*/>

          <Box
            width="100px"
            height="100px"
            border="1px solid"
            borderColor="red"
            borderRadius="16px"
            bg="green"
          ></Box>
          <Box
            width="100px"
            height="100px"
            border="1px solid"
            borderColor="red"
            borderRadius="16px"
            bg="green"
          ></Box>
          <Box
            width="100px"
            height="100px"
            border="1px solid"
            borderColor="red"
            borderRadius="16px"
            bg="green"
          ></Box>
          <Box
            width="100px"
            height="100px"
            border="1px solid"
            borderColor="red"
            borderRadius="16px"
            bg="green"
          ></Box>
        </Stack>
        <Box my="96px">
          <InputWrapper placeholder="text" />
        </Box>
        <Skeleton width="400px" height="400px" borderRadius="16px" variant="circle" />
      </Container>
    </Layout >
  );
};

export default HomePage;
