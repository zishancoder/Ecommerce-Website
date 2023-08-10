import {
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import CartProductCard from "./CartProductCard";
import { useSelector } from "react-redux";


function calculateTotalPrice(products=[]){
    let sum = 0;
    for(let i=0;i<products.length;i++){
      sum+=products[i].price;
    }
    return sum;
}


function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBtn = useRef();
  const [totalPrice,setTotalPrice] = useState(250);
  const { products } = useSelector((state) => state.cartProducts);
  useEffect(()=>{
    setTotalPrice(calculateTotalPrice(products));
  },[products]);
  return (
    <Container maxWidth={"6xl"} p={"1rem"} color={"gray.700"}>
      <Flex>
        <Heading>Apna Bazzar</Heading>
        <Spacer />
        <Box position={"relative"}>
          <BsFillCartFill
            size={"2.5rem"}
            cursor={"pointer"}
            ref={drawerBtn}
            onClick={onOpen}
          />
          <Badge
            pos={"absolute"}
            top={"0"}
            right={"0"}
            borderRadius={"50%"}
            fontSize={"0.8rem"}
            bgColor={"blue.500"}
            color={"white"}
          >
            {products.length>0 && products.length}
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
              { 
                products.length > 0 
                &&
                products.map((product, idx) => (
                  <CartProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    desc={product.description}
                    imgUrl={product.thumbnail}
                    price={product.price}
                  />
                ))

              }
            </DrawerBody>
            <DrawerFooter>
              <HStack>
                <Text>Total Price: ${totalPrice}</Text>
                <Spacer/>
                <Button colorScheme={'telegram'}>Check Out</Button>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Container>
  );
}

export default Header;
