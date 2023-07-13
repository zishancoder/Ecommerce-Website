import {Container, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <Container maxW={"6xl"}  p={'1rem'}>
      <SimpleGrid minChildWidth='250px' spacing={5}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </SimpleGrid>
    </Container>
  );
}

export default Products;
