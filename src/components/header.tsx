import books from "../svg/books.svg";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <Flex alignItems="center" textAlign="center" flexDir="column">
      <Text
        fontSize="70px"
        fontWeight="bold"
        className="lyons"
        mt="30px"
        color="#2C1810"
      >
        New & Trending
      </Text>
      <Text className="lyons" color="#91857E" fontSize="20px">
        Buy the new and trending books
      </Text>
      <Flex flexDir="row">
        <Link to="/explore">
          <Button
            w="120px"
            h="35px"
            rounded="100px"
            bg="#2C1810"
            mt="20px"
            color="#F8F3ED"
            fontWeight="normal"
            mr="5px"
            _hover={{
              bg: "#F8F3ED",
              color: "#2C1810",
              border: "1px",
              borderColor: "#2C1810",
            }}
            _focus={{}}
            _active={{}}
          >
            Explore
          </Button>
        </Link>
        <Button
          w="120px"
          h="35px"
          rounded="100px"
          bg="#F8F3ED"
          mt="20px"
          fontSize="16px"
          color="#2C1810"
          border="1px"
          borderColor="#2C1810"
          fontWeight="normal"
          ml="5px"
          _focus={{}}
          _active={{}}
        >
          Learn more
        </Button>
      </Flex>
      <Flex mt="30px">
        <Image src={books} />
      </Flex>
    </Flex>
  );
}

export default Header;
