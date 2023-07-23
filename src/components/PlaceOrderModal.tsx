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
  Flex,
} from "@chakra-ui/react";
import React from "react";

const PlaceOrderModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
}) => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Place Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent="center" alignItems="center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSceqCf1AN4aDm3YxFYt13QX8biIRHglBIoiiY2uBzKnvFZyBA/viewform?embedded=true"
              width="100%"
              height="915"
            >
              Loading…
            </iframe>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PlaceOrderModal;
