import React from "react";
import Layout from "../components/layout";
import { Box, Container } from "../components/styled";



const HomePage = () => {
  return (
    <Layout>
      <Container size="xl" m="48px">
        <h1>Home</h1>
        <Box
          width="400px"
          height="239px"
          border="1px solid"
          borderColor="red"
          borderRadius="16px"
          bg="green"
        ></Box>
      </Container>
    </Layout >
  );
};

export default HomePage;
