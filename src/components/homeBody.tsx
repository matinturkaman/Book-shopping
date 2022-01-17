import { Button, Center, Container, Flex, Image, Text } from "@chakra-ui/react";
import { products } from "../data/data";
import rate from "../svg/rate.svg";

function HomeBody(): JSX.Element {
  return (
    <Container mt="50px">
      <Center flexDir="column">
        <Text className="lyons" fontSize="40px">
          New Books
        </Text>
        <Text textAlign="center" w="600px" className="lyons" color="#B0B0B0">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
        </Text>
      </Center>
      <Center>
        <Flex
          minW="900px"
          mt="50px"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {products.map((p) => {
            return (
              <Flex w="320px" key={p.id} flexDir="column">
                <Flex
                  w="max-content"
                  flexDir="row"
                  justifyContent="space-between"
                  mt="50px"
                >
                  <Image
                    src={p.src}
                    w="120px"
                    h="180px"
                    boxShadow="2xl"
                    rounded="md"
                  />
                  <Flex
                    ml="20px"
                    flexDir="column"
                    justifyContent="space-between"
                  >
                    <Image w="180px" src={rate} />
                    <Flex flexDir="column">
                      <Text zIndex="10" w="65%" className="MontserratSemibold">
                        {p.name}
                      </Text>
                      <Text zIndex="10" color="#A0AEC0">
                        {p.writer}
                      </Text>
                    </Flex>
                    <Button
                      w="125px"
                      h="35px"
                      border="1px"
                      borderColor="#2C1810"
                      color="#2C1810"
                      bg="none"
                      rounded="full"
                      className="MontserratSemibold"
                      fontSize="14px"
                      _hover={{ bg: "#2C1810", color: "#F8F3ED" }}
                      _active={{}}
                      _focus={{}}
                    >
                      Buy Now
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
          <Flex
            w="320px"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Text className="MontserratSemibold">Want to see more?</Text>
            <Text color="#A0AEC0">Explore more of trending books</Text>
            <Button
              w="114px"
              h="32px"
              mt="15px"
              bg="#2C1810"
              color="#F8F3ED"
              fontWeight="normal"
              _hover={{
                color: "#2C1810",
                bg: "#F8F3ED",
                border: "1px",
                borderColor: "#2C1810",
              }}
              _active={{}}
              _focus={{}}
            >
              View more
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Container>
  );
}

export default HomeBody;
