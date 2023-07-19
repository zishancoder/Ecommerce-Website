import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

function CartProductCard({imgUrl,title,desc,price,id}) {
  const {products} = useSelector(state=>state.cartProducts)
  const dispatch = useDispatch();
  const toast = useToast();

  const removeFromCart=(id)=>{

     //Toast Code
     toast({
      title: "Removed From Cart",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });

    let temp = [...products];
    temp=temp.filter((item,idx)=>item.id!==id);
    dispatch({
      type:'removeFromCart',
      payload:temp
    })
  }

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imgUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>
            {desc}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            Price: ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="outline" colorScheme="blue" onClick={()=>removeFromCart(id)}>
            Remove
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CartProductCard;
