import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Layout from "../layout/layout";
import { useCart, useCartAction } from "../providers/cartProvider";
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
      <Container maxW="container.xl" mt="30px">
        <Text fontSize="40px" className="lyons">
          Cart Page
        </Text>
        {cart.length ? (
          cart.map((c: any) => {
            return (
              <>
                <Flex
                  w="80%"
                  key={c.id}
                  mb="30px"
                  mt="20px"
                  justifyContent="space-between"
                >
                  <Flex flexDir="row">
                    <Image w="100px" src={c.src} rounded="md" boxShadow="lg" />
                    <Flex flexDir="column" ml="15px" position="relative">
                      <Text w="200px" className="MontserratSemibold">
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
                              stroke-width="1.5"
                              stroke-linecap="round"
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
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </Box>
                      </Flex>
                      <Image
                        position="absolute"
                        bottom="0"
                        w="150px"
                        src={rate}
                      />
                    </Flex>
                  </Flex>
                  <Flex flexDir="column" justifyContent="space-between">
                    <Text className="lyons" color="#67717D" fontSize="20px">
                      $ {c.price}
                    </Text>
                    <Image
                      cursor="pointer"
                      onClick={() => handleRemove(c)}
                      src={trash}
                    />
                  </Flex>
                </Flex>
                <Divider w="80%" borderColor="#D4D4D4" />
              </>
            );
          })
        ) : (
          <Text>not found</Text>
        )}
      </Container>
    </Layout>
  );
}

export default Cart;
