import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

function HomeLayout(props: Props) {
  const { children } = props;

  return (
    <Box>
      <Navbar />

      {children}

      <Footer />
    </Box>
  );
}

export default HomeLayout;
