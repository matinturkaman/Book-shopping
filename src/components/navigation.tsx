import { Badge, Button, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../svg/logo.svg";
import cartSvg from "../svg/cart.svg";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../providers/cartProvider";

function Nav(): JSX.Element {
  const { cart } = useCart();

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
            <NavLink
              to={item.link}
              key={item.id}
              activeStyle={{ color: "#E35024" }}
            >
              <Text display={["none", "none", "block", "block"]}>
                {item.name}
              </Text>
            </NavLink>
          );
        })}
      </Flex>
      <Flex
        w={{ xl: "19%", lg: "auto", md: "auto", sm: "auto" }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Link to="/cart">
          <Flex position="relative">
            <Image src={cartSvg} />
            <Badge
              w="28px"
              h="18px"
              fontSize="11px"
              bg="#2C1810"
              border="1px"
              borderColor="#fff"
              color="#fff"
              rounded="full"
              textAlign="center"
              position="absolute"
              right="-2"
              top="0"
              display={cart.length === 0 ? "none" : "block"}
            >
              {cart.length}
            </Badge>
          </Flex>
        </Link>
        <Button
          display={["none", "none", "none", "none", "block"]}
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
          display={["none", "none", "none", "none", "block"]}
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
