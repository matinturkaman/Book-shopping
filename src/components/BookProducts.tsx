import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { products } from "../data/data";
import rate from "../svg/rate.svg";
import { Link } from "react-router-dom";
import { useCart, useCartAction } from "../providers/cartProvider";
import { CheckInCart } from "../utils/checkInCart";
import { dataInterface } from "../utils/dataInterface";

function BookProducts() {
  const dispatch = useCartAction();
  const { cart } = useCart();

  const addToCart = (p: dataInterface) => {
    dispatch({ type: "ADD_TO_CART", payload: p });
  };

  return (
    <Center flexDir="column">
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
                <Flex ml="20px" flexDir="column" justifyContent="space-between">
                  <Image w="180px" src={rate} />
                  <Link to={{ pathname: `/book/${p.id}`, state: p }}>
                    <Flex flexDir="column">
                      <Text zIndex="10" w="65%" className="MontserratSemibold">
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
