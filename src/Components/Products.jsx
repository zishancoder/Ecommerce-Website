import {Container, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function Products() {
  const {products} = useSelector(state=>state.products);
  
  return (
    <Container maxW={"6xl"}  p={'1rem'}>
      <SimpleGrid minChildWidth='250px' spacing={5}>
        {
          products.map((data,idx)=>(<ProductCard details={data} key={data.id}/>))
        }
      </SimpleGrid>
    </Container>
  );
}

export default Products;
