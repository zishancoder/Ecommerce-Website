import {Button, Container, Menu, MenuButton,MenuItem, MenuList} from "@chakra-ui/react";
import {BsFilter} from 'react-icons/bs';

function Filters() {
  return (
    <Container maxW={"6xl"} p={"1rem"}>
        <Menu>
            <MenuButton>
                <Button leftIcon={<BsFilter/>} variant={'ghost'}>Sort By</Button>
            </MenuButton>
            <MenuList>
                <MenuItem>Price High to Low</MenuItem>
                <MenuItem>Price Low to High</MenuItem>
            </MenuList>
        </Menu>
    </Container>
  );
}

export default Filters;
