import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useCart, useCartAction } from "../providers/cartProvider";
import { Link } from "react-router-dom";
import Layout from "../layout/layout";
import rate from "../svg/rate.svg";
import trash from "../svg/trash.svg";


function Cart() {
  const { cart } = useCart();
  const dispatch = useCartAction();

  const handleInc = (cartItem: any) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const handleDec = (cartItem: any) => {
    dispatch({ type: "DEC_PRODUCT", payload: cartItem });
  };

  const handleRemove = (cartItem: any) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  return (
    <Layout>
      <Container maxW="container.xl" minH="80vh" mt="30px">
        <Text fontSize="40px" className="lyons">
          Cart Page
        </Text>
        <Flex
          display="flex"
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
            "row",
          ]}
        >
          <Flex flexDir="column" w="100%">
            {cart.length ? (
              cart.map((c: any) => {
                return (
                  <Flex w="100%" flexDir="column" key={c.id}>
                    <Flex
                      w={["100%", "100%", "100%", "70%", "70%"]}
                      mb="30px"
                      mt="20px"
                      justifyContent="space-between"
                    >
                      <Flex flexDir="row">
                        <Image
                          w="100px"
                          src={c.src}
                          rounded="md"
                          boxShadow="lg"
                        />
                        <Flex flexDir="column" ml="15px" position="relative">
                          <Text
                            w={["130px", "200px", "200px", "200px", "200px"]}
                            className="MontserratSemibold"
                          >
                            {c.name}
                          </Text>
                          <Text color="#A0AEC0">{c.writer}</Text>
                          <Flex
                            w="40px"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Box onClick={() => handleDec(c)} cursor="pointer">
                              <svg
                                width="8"
                                height="16"
                                viewBox="0 0 10 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 1L1.14142 8.85858C1.06332 8.93668 1.06332 9.06332 1.14142 9.14142L9 17"
                                  stroke={c.qty === 1 ? "#B1B1B1" : "#2C1810"}
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </Box>
                            <Text>{c.qty}</Text>
                            <Box onClick={() => handleInc(c)} cursor="pointer">
                              <svg
                                width="8"
                                height="16"
                                viewBox="0 0 10 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1L8.85858 8.85858C8.93668 8.93668 8.93668 9.06332 8.85858 9.14142L1 17"
                                  stroke="#2C1810"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </Box>
                          </Flex>
                          <Image
                            w="150px"
                            display={[
                              "none",
                              "block",
                              "block",
                              "block",
                              "block",
                            ]}
                            position="absolute"
                            bottom="0"
                            src={rate}
                          />
                        </Flex>
                      </Flex>
                      <Flex flexDir="column" justifyContent="space-between">
                        <Text className="lyons" color="#67717D" fontSize="20px">
                          $ {c.price * c.qty}
                        </Text>
                        <Image
                          cursor="pointer"
                          onClick={() => handleRemove(c)}
                          src={trash}
                        />
                      </Flex>
                    </Flex>
                    <Divider
                      w={["100%", "100%", "100%", "70%", "70%"]}
                      borderColor="#D4D4D4"
                    />
                  </Flex>
                );
              })
            ) : (
              <Flex
                w="100%"
                h="40vh"
                justifyContent="center"
                alignItems="center"
                flexDir="column"
              >
                <Text
                  textAlign="center"
                  fontSize="35px"
                  color="#2C1810"
                  className="MontserratSemibold"
                >
                  Your cart is empty
                </Text>
                <Text color="#a89988">Safely add a product to your cart</Text>
                <Link to="/">
                  <Button
                    w="200px"
                    h="33px"
                    mt="15px"
                    bg="none"
                    color="#2C1810"
                    border="1px"
                    borderColor="#2C1810"
                    rounded="3px"
                    zIndex="10"
                    _hover={{ bg: "#2C1810", color: "#fff" }}
                    _active={{}}
                    _focus={{}}
                  >
                    home
                  </Button>
                </Link>
              </Flex>
            )}
          </Flex>
          <CartSummary />
        </Flex>
      </Container>
    </Layout>
  );
}

export default Cart;

export function CartSummary() {
  const { cart, total } = useCart();

  const originalTotalPrice = cart.length
    ? cart.reduce((acc: any, curr: any) => acc + curr.qty * curr.price, 0)
    : 0;

  return (
    <Flex
      w={["100%", "100%", "100%", "360px", "360px"]}
      h="220px"
      mt="12px"
      border="1px"
      borderColor="#D4D4D4"
      rounded="md"
      alignItems="center"
      flexDir="column"
      position="relative"
      display={cart.length ? "flex" : "none"}
    >
      <Text fontSize="20px" mt="8px">
        order summary
      </Text>
      <Flex w="100%" mt="20px" alignItems="center" flexDir="column">
        <Flex w="90%" justifyContent="space-between" flexDir="row">
          <Text color="#67717D">Original Price :</Text>
          <Text color="#887167">$ {originalTotalPrice}</Text>
        </Flex>
        <Flex w="90%" mt="5px" justifyContent="space-between" flexDir="row">
          <Text color="#67717D">Cart Discount :</Text>
          <Text color="#887167">$ {originalTotalPrice - total}</Text>
        </Flex>
        <Flex w="90%" mt="5px" justifyContent="space-between" flexDir="row">
          <Text color="#67717D">Net Price :</Text>
          <Text color="#887167">$ {total}</Text>
        </Flex>
      </Flex>

      <Button
        w="90%"
        h="33px"
        position="absolute"
        bottom="2"
        bg="#2C1810"
        color="#fff"
        rounded="3px"
        _hover={{ bg: "#1a0e09" }}
        _active={{}}
        _focus={{}}
      >
        Checkout
      </Button>

    </Flex>
  );
}
