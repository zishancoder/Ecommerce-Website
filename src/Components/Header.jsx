import { Badge, Box, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Spacer, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { BsFillCartFill } from "react-icons/bs";
import CartProductCard from "./CartProductCard";

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const drawerBtn = useRef();
  return (
    <Container maxWidth={"6xl"} p={"1rem"} color={"gray.700"}>
      <Flex>
        <Heading>Apna Bazzar</Heading>
        <Spacer />
        <Box position={"relative"}>
          <BsFillCartFill size={"2.5rem"} cursor={"pointer"} ref={drawerBtn} onClick={onOpen}/>
          <Badge
            pos={"absolute"}
            top={"0"}
            right={"0"}
            borderRadius={"50%"}
            fontSize={"0.8rem"}
            bgColor={"blue.500"}
            color={"white"}
          >
            5
          </Badge>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={drawerBtn}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart Items</DrawerHeader>
            <DrawerBody>
               <CartProductCard/>
               <CartProductCard/>
               <CartProductCard/>
               <CartProductCard/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Container>
  );
}

export default Header;
