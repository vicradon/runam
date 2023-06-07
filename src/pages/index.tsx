import HomeLayout from "@/Layout/HomeLayout";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {}

function Index(props: Props) {
  const {} = props;

  const whyRunam = [
    {
      icon: "/icons/whyrunam/truck.svg",
      icon_size: [27, 36],
      title: "Fast Delivery",
      description: "Run Am is renowned for its exceptional speed in delivery.",
    },
    {
      icons: "/icons/whyrunam/padlock.svg",
      icon_size: [28, 34],
      title: "Security",
      description: "Run Am ensures there is confidentiality of packages.",
    },
    {
      icons: "/icons/whyrunam/shield.svg",
      icon_size: [38, 34],
      title: "Reliability",
      description: "You can rely on Run Am to handle your deliveries.",
    },
  ];

  const runamProgress = [
    {
      metric: "1k+",
      description: "Available Dispatch Rides",
    },
    {
      metric: "1M+",
      description: "Kilometers Covered",
    },
    {
      metric: "1k+",
      description: "Number of Delivery",
    },
    {
      metric: "2+",
      description: "Cities Operating",
    },
  ];

  return (
    <HomeLayout>
      <Container maxW={"container.xl"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          columnGap={"1rem"}
        >
          <Flex flexDirection={"column"} rowGap={"1rem"}>
            <Flex
              bgColor={"#EBFEFB"}
              rounded={"full"}
              p="10px 1rem"
              columnGap={"0.5rem"}
              width={"fit-content"}
            >
              <Image
                src="/icons/padlock.svg"
                alt="padlock"
                width="16"
                height="20"
              />
              <Text fontSize={"sm"}>
                No 1 Fast Rising Dispatch company in Nigeria
              </Text>
            </Flex>
            <Box>
              <Text fontSize={"2xl"}>
                Efficient Dispatch Delivery Solutions for Every Mile:
              </Text>
              <Text fontSize={"2xl"}>Run Am</Text>
            </Box>

            <Text mb={"1.5rem"}>
              Courier Services Redefined: Swift, Reliable, and Seamless Delivery
              Solutions
            </Text>

            <Flex columnGap={"1rem"} alignItems={"center"}>
              <Button size={"lg"} color={"white"} backgroundColor="brand">
                Place an Order
              </Button>
              <Button variant={"ghost"}>How RunAm works</Button>
            </Flex>
          </Flex>

          <Box>
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              width="500"
              height="500"
            />
          </Box>
        </Flex>

        <Box>
          <Box>
            <Heading>Why use Run AM?</Heading>
            <Text>
              Choose Run Am for Unparalleled Dispatch Delivery Excellence
            </Text>
          </Box>

          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            columnGap={"1.5rem"}
          >
            {whyRunam.map((item) => (
              <Flex
                key={item.title}
                alignItems={"flex-start"}
                columnGap={"1rem"}
              >
                <Image
                  src={item.icon || ""}
                  alt={item.title}
                  width={item.icon_size[0]}
                  height={item.icon_size[1]}
                />
                <Heading as="h4" size={"md"} variant="h4">
                  {item.title}
                </Heading>
                <Text>{item.description}</Text>
              </Flex>
            ))}
          </Flex>

          <Flex columnGap={"1rem"}>
            <Box>
              <Heading>
                We are RunAm.
                <br />
                We are bringing the Future of Dispatch to Your Doorstep.
              </Heading>

              <Text>
                At Run Am, our overarching goal is to establish a dispatch
                delivery experience that seamlessly serves Africans, driven by
                innovation, technology, and eco-friendly infrastructure.
              </Text>

              <Text>
                Through our powerful dispatch platform, we are committed to
                delivering a truly transformational experience to both vendors
                and customers. We are revolutionizing the dispatch industry,
                ensuring efficient and reliable deliveries every step of the
                way.
              </Text>

              <Link href="/about">Learn More</Link>
            </Box>

            <Image
              src="/images/we-are-runam.png"
              alt="we-are-runam"
              width="500"
              height="500"
            />
          </Flex>
        </Box>
      </Container>

      <Box paddingTop={"2rem"} bgColor={"brand.50"}>
        <Container maxW={"container.xl"}>
          <Heading mb={"1.5rem"} textAlign={"center"}>
            RunAm Progress Milestones
          </Heading>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            columnGap={"1.5rem"}
          >
            {runamProgress.map((item) => (
              <Box key={item.description} textAlign={"center"}>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  {item.metric}
                </Text>
                <Text>{item.description}</Text>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    </HomeLayout>
  );
}

export default Index;
