import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { products } from "../data/data";
import { Link } from "react-router-dom";
import { useCart, useCartAction } from "../providers/cartProvider";
import { CheckInCart } from "../utils/checkInCart";
import { dataInterface } from "../utils/dataInterface";
import rate from "../svg/rate.svg";

function BookProducts() {
  const dispatch = useCartAction();
  const { cart } = useCart();

  const addToCart = (p: dataInterface) => {
    dispatch({ type: "ADD_TO_CART", payload: p });
  };

  return (
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
        mt="30px"
        mb="30px"
        flexWrap="wrap"
      >
        {products.map((p) => {
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
                <Flex ml="20px" flexDir="column" justifyContent="space-between">
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
      </Flex>
    </Center>
  );
}

export default BookProducts;
