import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

const PlaceOrderModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Button
        size={{ base: "sm", md: "lg" }}
        backgroundColor="#4DA195"
        colorScheme="brand"
        onClick={onOpen}
      >
        Place an Order
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Place Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSceqCf1AN4aDm3YxFYt13QX8biIRHglBIoiiY2uBzKnvFZyBA/viewform?embedded=true"
              width="auto"
              height="915"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlaceOrderModal;
