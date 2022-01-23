import { Button, Center, Container, Flex, Image, Text } from "@chakra-ui/react";
import { products } from "../data/data";
import rate from "../svg/rate.svg";
import { Link } from "react-router-dom";
import { useCart, useCartAction } from "../providers/cartProvider";
import { CheckInCart } from "../utils/checkInCart";
import { dataInterface } from "../utils/dataInterface";

function HomeBody(): JSX.Element {
  const dispatch = useCartAction();
  const { cart } = useCart();

  const addToCart = (p: dataInterface) => {
    dispatch({ type: "ADD_TO_CART", payload: p });
  };

  return (
    <Container mt="50px">
      <Center flexDir="column">
        <Text className="lyons" fontSize="40px">
          New Books
        </Text>
        <Text
          textAlign="center"
          w={{ xl: "600px", lg: "600px", md: "600px", sm: "400px" }}
          className="lyons"
          color="#B0B0B0"
        >
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
        </Text>
      </Center>
      <Center>
        <Flex
          minW={{
            xl: "900px",
            lg: "850px",
            md: "750px",
            sm: "200px",
            base: "180px",
          }}
          justifyContent={{
            xl: "space-between",
            lg: "space-between",
            md: "space-between",
            sm: "center",
          }}
          mt="50px"
          flexWrap="wrap"
        >
          {products.slice(products.length - 3).map((p) => {
            return (
              <Flex w="320px" key={p.id} flexDir="column">
                <Flex
                  w={{
                    xl: "max-content",
                    lg: "auto",
                    md: "auto",
                    sm: "auto",
                    base: "auto",
                  }}
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
                    <Image
                      w={{
                        xl: "180px",
                        lg: "180px",
                        md: "180px",
                        sm: "180px",
                        base: "130px",
                      }}
                      src={rate}
                    />
                    <Link to={{ pathname: `/book/${p.id}`, state: p }}>
                      <Flex flexDir="column">
                        <Text
                          zIndex="10"
                          w={{
                            xl: "65%",
                            lg: "65%",
                            md: "65%",
                            sm: "65%",
                            base: "85%",
                          }}
                          className="MontserratSemibold"
                        >
                          {p.name}
                        </Text>
                        <Text zIndex="10" color="#A0AEC0">
                          {p.writer}
                        </Text>
                      </Flex>
                    </Link>
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
                      onClick={() => addToCart(p)}
                    >
                      {CheckInCart(cart, p) ? "In Cart" : "Buy Now"}
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
            mt="25px"
          >
            <Text className="MontserratSemibold">Want to see more?</Text>
            <Text color="#A0AEC0">Explore more of trending books</Text>
            <Link to="/explore">
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
            </Link>
          </Flex>
        </Flex>
      </Center>
    </Container>
  );
}

export default HomeBody;
