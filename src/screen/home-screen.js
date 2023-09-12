import React from "react";
import Layout from "../components/layout";
import { Box, Container, Stack, InputWrapper, Skeleton, Button } from "../components/styled";



const HomePage = () => {
  return (
    <Layout>
      <Container size="xl" m="48px">
        <Stack ml="50px">
          <h1>Home</h1>
        </Stack>
        <Stack spacing="50px" ml="50px" /**direction="column"*/>

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

        <Box my="96px" mx="50px">
          <InputWrapper placeholder="text" />
        </Box>

        <Skeleton
          width="300px"
          height="300px"
          borderRadius="16px"
          variant="circle"
        />
        <Stack spacing="24px" mt="96px" align="center">
          <Button variant={"contained"} size="xl">Contained</Button>
          <Button variant={"outlined"} size="md">Outlined</Button>
          <Button variant={"text"} size="sm">Text</Button>
          <Button variant={"disabled"} size="xl" >Disabled</Button>
        </Stack>
      </Container>
    </Layout >
  );
};

export default HomePage;
