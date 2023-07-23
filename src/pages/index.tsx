/* eslint-disable react/no-unescaped-entities */
import PlaceOrderModal from "@/components/PlaceOrderModal";
import HomeLayout from "@/Layout/HomeLayout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Image as ChakraImage,
} from "@chakra-ui/react";
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
      description: "RunAm is renowned for its exceptional speed in delivery.",
    },
    {
      icon: "/icons/whyrunam/padlock.svg",
      icon_size: [28, 34],
      title: "Security",
      description: "RunAm ensures there is confidentiality of packages.",
    },
    {
      icon: "/icons/whyrunam/shield.svg",
      icon_size: [38, 34],
      title: "Reliability",
      description: "You can rely on RunAm to handle your deliveries.",
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

  const placeOrderActionPoints = [
    "Create an Account",
    "Enter Pickup and Drop-off Locations",
    "Select Service Type",
    "Specify Package Details",
    "Get Price Quote and Confirm",
    "Track Your Dispatch Ride",
    "Delivery Confirmation and Payment",
  ];

  const faqs = [
    {
      question: "What is RunAm about?",
      answer:
        "RunAm is a leading dispatch delivery service that specializes in providing efficient and reliable delivery solutions. We connect individuals and businesses with a network of professional drivers to ensure seamless transportation of packages, documents, and goods.",
    },
    {
      question: "How can I track my dispatch ride?",
      answer: "",
    },
    {
      question: "What types of packages can I send with RunAm?",
      answer: "",
    },
    {
      question: "How does RunAm ensure the safety and security of my packages?",
      answer: "",
    },
    {
      question: "What are the available payment options for RunAm services?",
      answer: "",
    },
  ];

  return (
    <HomeLayout>
      <Container maxW={"container.xl"}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          justifyItems={"self-end"}
          gridGap={"1rem"}
          my={{ base: "2rem", md: "8rem" }}
        >
          <Flex flexDirection={"column"} rowGap={"1rem"}>
            <Flex
              display={{ base: "none", md: "flex" }}
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
              <Text fontSize={"4xl"} fontWeight={"bold"}>
                Efficient Dispatch Delivery Solutions for Every Mile:
              </Text>
              <Text fontSize={"4xl"} fontWeight={"bold"} color={"#4DA195"}>
                RunAm
              </Text>
            </Box>

            <Text mb={"1.5rem"}>
              Courier Services Redefined: Swift, Reliable, and Seamless Delivery
              Solutions
            </Text>

            <Flex
              columnGap={"1rem"}
              alignItems={"center"}
              rowGap={"1rem"}
              justifyContent={{ base: "space-between", sm: "left" }}
            >
              <PlaceOrderModal />
              <Button
                display={"flex"}
                alignItems={"center"}
                columnGap={"0.5rem"}
                variant={"ghost"}
                size={{ base: "sm", md: "lg" }}
              >
                <ChakraImage
                  src="/icons/play.svg"
                  alt="Play"
                  width={{ base: "14px", md: "36px" }}
                  height={"35px"}
                />
                <Text>How RunAm works</Text>
              </Button>
            </Flex>
          </Flex>

          <Box display={{ base: "none", md: "block" }}>
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              width="500"
              height="500"
            />
          </Box>
        </Grid>

        <Box>
          <Box textAlign={"center"} mb={"2rem"}>
            <Heading>Why use RunAM?</Heading>
            <Text>
              Choose RunAm for Unparalleled Dispatch Delivery Excellence
            </Text>
          </Box>

          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            columnGap={"1.5rem"}
            mb={"8rem"}
            flexWrap={"wrap"}
            rowGap={"2rem"}
          >
            {whyRunam.map((item) => (
              <Flex
                key={item.title}
                alignItems={"flex-start"}
                columnGap={"1rem"}
                width={"350px"}
              >
                <Box
                  backgroundColor={"#DEF3F0"}
                  padding={"1rem"}
                  rounded={"lg"}
                >
                  <Image
                    src={item.icon || ""}
                    alt={item.title}
                    width={item.icon_size[0]}
                    height={item.icon_size[1]}
                  />
                </Box>

                <Box>
                  <Heading as="h4" size={"md"} variant="h4">
                    {item.title}
                  </Heading>
                  <Text>{item.description}</Text>
                </Box>
              </Flex>
            ))}
          </Flex>

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gridGap={"1rem"}
            justifyItems={"self-end"}
          >
            <Box>
              <Box mb={"2rem"}>
                <Heading>
                  We are RunAm.
                  <br />
                  We are bringing the Future of Dispatch to Your Doorstep.
                </Heading>
              </Box>

              <Text mb={"1rem"}>
                At RunAm, our overarching goal is to establish a dispatch
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
          </Grid>
        </Box>
      </Container>
      <Box marginY={"8rem"} paddingY={"5rem"} bgColor={"#DEF3F0"}>
        <Container maxW={"container.xl"}>
          <Heading color="#1F403C" mb={"1.5rem"} textAlign={"center"}>
            RunAm Progress Milestones
          </Heading>
          <Flex
            justifyContent={{ base: "center", md: "space-between" }}
            alignItems={"center"}
            columnGap={"1.5rem"}
            flexWrap={"wrap"}
          >
            {runamProgress.map((item) => (
              <Box key={item.description} textAlign={"center"}>
                <Text
                  color={"#2E615A"}
                  fontSize={"60px"}
                  lineHeight={"95.21px"}
                  fontWeight={"bold"}
                >
                  {item.metric}
                </Text>
                <Text color={"#4DA195"}>{item.description}</Text>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>

      <Box mb={"8rem"}>
        <Container maxW={"container.xl"}>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            justifyContent={"space-between"}
          >
            <Image
              src="/images/woman-pressing-tablet.png"
              alt="Woman pressing tablet"
              width={538}
              height={579}
            />

            <Flex
              flexDirection={"column"}
              rowGap={"2rem"}
              columnGap={"1rem"}
              alignItems={"start"}
            >
              <Heading size={"lg"}>
                Do you want your goods delivered and you don't know how?
              </Heading>
              {placeOrderActionPoints.map((item) => (
                <Flex key={item} columnGap={"1rem"}>
                  <Image
                    src="/icons/checkmark.svg"
                    alt="checkmark"
                    width={26}
                    height={26}
                  />
                  <Text>{item}</Text>
                </Flex>
              ))}

              <Button size={"lg"} backgroundColor={"#4DA195"} color={"white"}>
                Place an Order
              </Button>
            </Flex>
          </Grid>
        </Container>
      </Box>
      <Box mb={"8rem"}>
        <Container maxW={"container.xl"}>
          <Box mb={"4rem"}>
            <Heading textAlign={"center"}>Frequently Asked Questions</Heading>
            <Text textAlign={"center"}>
              Here are some answered Frequently Asked Questions.
            </Text>
          </Box>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
            <Box>
              <Heading size={"xl"}>
                Some Questions that might be bothering you
              </Heading>
              <Text>We answered questions so you don’t have to ask them.</Text>
            </Box>

            <Box>
              <Accordion allowToggle>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question}>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton
                            _expanded={{
                              bg: "#DEF3F0",
                            }}
                            _hover={{
                              bg: "#DEF3F0",
                            }}
                          >
                            <Box as="span" flex="1" textAlign="left">
                              <Text fontWeight={"bold"} fontSize={"xl"}>
                                {faq.question}
                              </Text>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          backgroundColor={isExpanded ? "#DEF3F0" : ""}
                          pb={4}
                        >
                          {faq.answer}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box
        paddingY={"6rem"}
        bgColor={"#3D8177"}
        style={{
          backgroundImage:
            "url('/images/bg-elem-1.png'),url('/images/bg-elem-2.png')",
          backgroundRepeat: "no-repeat,no-repeat",
          backgroundPosition: "left bottom,top right",
        }}
      >
        <Container maxW={"container.xl"}>
          <Text
            fontSize={"4xl"}
            color={"white"}
            textAlign={"center"}
            mb={"2rem"}
            fontWeight={"bold"}
          >
            Are you ready for a world of Dispatch <br /> Adventure with RunAm?
          </Text>

          <Flex
            columnGap={"2rem"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button bgColor={"white"} color={"#4DA195"} colorScheme="brand">
              Place an Order
            </Button>
            <Button bgColor={"white"} color={"#4DA195"} colorScheme="brand">
              Become a Rider
            </Button>
          </Flex>
        </Container>
      </Box>
    </HomeLayout>
  );
}

export default Index;
