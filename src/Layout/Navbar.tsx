import { Box, Button, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import NextLink from "next/link";
import Logo from "./Logo";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <Flex
      justifyContent={"space-around"}
      alignItems={"center"}
      padding={"2rem 0"}
    >
      <Logo />

      <Flex display={{ base: "none", md: "flex" }} columnGap={"1rem"}>
        <Link as={NextLink} href="/">
          Home
        </Link>
        <Link as={NextLink} href="/about">
          About Us
        </Link>
        <Link as={NextLink} href="/contact">
          Contact Us
        </Link>
      </Flex>

      <Flex
        display={{ base: "none", md: "flex" }}
        columnGap={"1rem"}
        alignItems={"center"}
      >
        <Link as={NextLink} href="/login">
          Login
        </Link>
        <Button backgroundColor={"#4DA195"} colorScheme="brand">
          Open an account
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
