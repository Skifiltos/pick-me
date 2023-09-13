import React, { useState, useEffect } from "react";
import { Box, Button, Container, InputWrapper, Stack } from "./styled";
import { ReactComponent as SearchIcon } from "../images/search-media.svg";
import PhotoSection from "./Photo-Section";
import Paginator from "./Paginator";


const HomeBody = () => {
  return (
    <Container security="fullwidth" mt={["24px", "72px"]}>
      <Container mt="96px">
        <Stack justify="space-between" align="end">
          <h4>search your photos</h4>
          <p
            style={{
              color: "var(grey-700)",
            }}
          >
          </p>
        </Stack>

        <Box mt="24px">
          <Stack
            width="fit-content"
            bg="grey.900"
            borderRadius="100px"
            border="1px solid"
            px="18px"
            style={{
              overFlowX: "hidden"
            }}
          >
            <InputWrapper
              placeholder="cerca foto"
              border="none"
              pl="0px"
              value="React"
              onChange={() => {
                return;
              }}
            />

            <Button
              rightIcon={<SearchIcon />}
              isLoading={false}
              disabled={false}
              variant="text"
              iconColor="grey.700"
              bg="grey.900"
            />

          </Stack>
        </Box>
      </Container>
    </Container>
  );
};

export default HomeBody; 
