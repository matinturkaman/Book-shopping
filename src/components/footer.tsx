import { Button, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import library from "../svg/library.svg";

function Footer() {
  const footerItems = [
    {
      head: "Social",
      one: "Linkedin",
      two: "Github",
      three: "Instagram",
      four: "Dribbble",
      id: 1,
    },
    {
      head: "Company",
      one: "About us",
      two: "Contact us",
      three: "Buy book",
      four: "New books",
      id: 2,
    },
    {
      head: "Resources",
      one: "Why book?",
      two: "Buy book",
      three: "Giudes",
      four: "Blog",
      id: 3,
    },
  ];

  return (
    <Flex
      w="100%"
      h="555px"
      bg="#372F2D"
      mt="30px"
      position="relative"
      flexDir="row"
      justifyContent="space-between"
    >
      <Flex flexDir="column">
        <Image w="330px" src={library} position="absolute" top="0" />
        <Flex
          position="absolute"
          bottom="2"
          left="2"
          className="MontserratNormal"
        >
          <Text color="#fff">© {new Date().getFullYear()} created by</Text>
          <Link href="https://github.com/matinturkaman" isExternal>
            <Text color="#FF693D" ml="5px" className="MontserratSemibold">
              Matin Turkaman
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Flex w="55%" pt="25px" flexDir="column" fontWeight="medium">
        <Text color="#FF693D">NEW</Text>
        <Text
          w="350px"
          color="#fff"
          fontSize="44px"
          className="MontserratSemibold"
        >
          Request a new book
        </Text>
        <Flex position="relative" w="380px">
          <Input
            w="full"
            h="50px"
            bg="#fff"
            rounded="full"
            mt="18px"
            placeholder="you@company.com"
            _active={{}}
            _focus={{}}
          />
          <Button
            w="80px"
            h="51px"
            position="absolute"
            right="0"
            bottom="0"
            zIndex="10"
            bg="#E35024"
            color="#fff"
            style={{ borderRadius: "0px 100px 100px 0px" }}
            _hover={{ bg: "#b13a16" }}
            _active={{}}
            _focus={{}}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 5L20 12L13 19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </Flex>
        <Flex mt="30px">
          {footerItems.map((item) => {
            return (
              <Flex
                key={item.id}
                flexDir="column"
                alignItems="flex-start"
              >
                <Text
                  color="#fff"
                  ml="25px"
                  mb="10px"
                  className="MontserratSemibold"
                  fontSize="22px"
                >
                  {item.head}
                </Text>
                <Text
                  color="#ffffff9e"
                  ml="25px"
                  mb="10px"
                  className="MontserratNormal"
                  fontSize="18px"
                >
                  {item.one}
                </Text>
                <Text
                  color="#ffffff9e"
                  ml="25px"
                  mb="10px"
                  className="MontserratNormal"
                  fontSize="18px"
                >
                  {item.two}
                </Text>
                <Text
                  color="#ffffff9e"
                  ml="25px"
                  mb="10px"
                  className="MontserratNormal"
                  fontSize="18px"
                >
                  {item.three}
                </Text>
                <Text
                  color="#ffffff9e"
                  ml="25px"
                  mb="10px"
                  className="MontserratNormal"
                  fontSize="18px"
                >
                  {item.four}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
