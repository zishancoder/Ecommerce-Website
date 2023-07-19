import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch} from "react-redux";

function ProductCard({ details }) {

  const toast = useToast();
  const dispatch = useDispatch();
  
  const addToCartHandler = (item) => {
    
    //Toast Code
    toast({
      title: "Added to Cart",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });

    //Add to cart code
    dispatch({
      type:"updateCart",
      payload:item
    })
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={details.images[0]}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{details.title}</Heading>
          <Text>{details.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            Price: ${details.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={()=>addToCartHandler(details)}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
