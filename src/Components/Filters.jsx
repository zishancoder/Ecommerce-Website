import {Button, Container, Menu, MenuButton,MenuItem, MenuList} from "@chakra-ui/react";
import {BsFilter} from 'react-icons/bs';
import {useDispatch, useSelector} from "react-redux";

function Filters() {
  
  const {products} = useSelector(state=>state.products)
  const dispatch = useDispatch();

  //Sorting Functions
  const descending = () =>{
    let temp = [...products];
    temp.sort((a,b)=>b.price - a.price);
    dispatch({
      type:"getProducts",
      payload:temp,
    })
  }

  const ascending = () =>{
    let temp = [...products];
    temp.sort((a,b)=>a.price - b.price);
    dispatch({
      type:"getProducts",
      payload:temp,
    })
  }

  return (
    <Container maxW={"6xl"} p={"1rem"}>
        <Menu>
            <MenuButton>
                <Button leftIcon={<BsFilter/>} variant={'ghost'}>Sort By</Button>
            </MenuButton>
            <MenuList>
                <MenuItem onClick={descending}>Price High to Low</MenuItem>
                <MenuItem onClick={ascending}>Price Low to High</MenuItem>
            </MenuList>
        </Menu>
    </Container>
  );
}

export default Filters;
