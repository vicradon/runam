import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Image from "next/image";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <Box>
      <Flex>
        <Box>
          <Logo />
          <Text>Celebrating seamless dispatch delivery with Run Am.</Text>
        </Box>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Image
            src="/icons/social-icons/twitter.svg"
            alt="twitter"
            width="28"
            height="28"
          />
          <Image
            src="/icons/social-icons/facebook.svg"
            alt="facebook"
            width="24"
            height="24"
          />
          <Image
            src="/icons/social-icons/instagram.svg"
            alt="instagram"
            width="28"
            height="28"
          />
          <Image
            src="/icons/social-icons/linkedin.svg"
            alt="linkedin"
            width="28"
            height="23"
          />
        </Flex>

        <Flex flexDirection={"column"} rowGap={"10px"}>
          <Heading as="h4" size={"sm"} variant="h4">
            About
          </Heading>

          <Text>Company</Text>
          <Text>Contact</Text>
        </Flex>

        <Flex flexDirection={"column"} rowGap={"10px"}>
          <Heading as="h4" size={"sm"} variant="h4">
            Support
          </Heading>

          <Text>080-8123-2097</Text>
          <Text>sales@runam.com</Text>
          <Text>help@runam.com</Text>
        </Flex>

        <Flex flexDirection={"column"} rowGap={"10px"}>
          <Heading as="h4" size={"sm"} variant="h4">
            Legal
          </Heading>

          <Text>Terms of service</Text>
          <Text>Privacy policy</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
