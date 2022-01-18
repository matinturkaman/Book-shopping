import { Button, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../svg/logo.svg";
import cart from "../svg/cart.svg";
import { Link } from "react-router-dom";

function Nav(): JSX.Element {
  const navItem = [
    { name: "explore", link: "/explore", id: 1 },
    { name: "location", link: "/location", id: 2 },
    { name: "about", link: "/about", id: 3 },
  ];

  return (
    <Flex p="15" justifyContent="space-between" alignItems="center">
      <Link to="/">
        <Image src={logo} />
      </Link>
      <Flex w="180px" justifyContent="space-between" fontWeight="medium">
        {navItem.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              <Text>{item.name}</Text>
            </Link>
          );
        })}
      </Flex>
      <Flex w="19%" justifyContent="space-around" alignItems="center">
        <Image src={cart} />
        <Button
          w="100px"
          h="35px"
          rounded="100px"
          bg="#2C1810"
          color="#F8F3ED"
          fontWeight="normal"
          _hover={{
            bg: "#F8F3ED",
            color: "#2C1810",
            border: "1px",
            borderColor: "#2C1810",
          }}
          _focus={{}}
          _active={{}}
        >
          Sign up
        </Button>
        <Button
          w="60px"
          h="35px"
          rounded="100px"
          bg="#F8F3ED"
          color="#2C1810"
          fontWeight="normal"
          _hover={{}}
          _focus={{}}
          _active={{}}
        >
          login
        </Button>
      </Flex>
    </Flex>
  );
}

export default Nav;
