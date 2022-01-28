import {
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useCart, useCartAction } from "../providers/cartProvider";
import Layout from "../layout/layout";
import rate from "../svg/rate.svg";
import box from "../svg/box.svg";
import like from "../svg/like.svg";
import { CheckInCart } from "../utils/checkInCart";

function ProductDetail({ location }: { location: any }): JSX.Element {
  const dispatch = useCartAction();
  const { cart } = useCart();

  const addToCart = (p: any) => {
    dispatch({ type: "ADD_TO_CART", payload: p });
  };

  return (
    <Layout>
      <Container
        maxW="container.xl"
        mt="30px"
        mb="30px"
        display="flex"
        flexDir={{
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          base: "column",
        }}
      >
        <Flex flex={3} justifyContent="center">
          <Flex flexDir="column">
            <Text
              w={{
                xl: "450px",
                lg: "450px",
                md: "450px",
                sm: "450px",
                base: "300px",
              }}
              fontSize="25px"
              fontWeight="bold"
              className="MontserratSemibold"
            >
              {location.state.name}
            </Text>
            <Image w="180px" mt="15px" src={rate} />
            <Center h="500px">
              <Image w="250px" src={location.state.src} rounded="md" />
            </Center>
          </Flex>
        </Flex>
        <Flex flex={1} justifyContent="center">
          <Flex
            flexDir="column"
            alignItems={{
              xl: "normal",
              lg: "normal",
              sm: "center",
              base: "center",
            }}
            textAlign={{
              xl: "unset",
              lg: "unset",
              md: "unset",
              sm: "center",
              base: "center",
            }}
          >
            <Text
              w={{
                xl: "300px",
                lg: "300px",
                md: "300px",
                sm: "300px",
                base: "250px",
              }}
              fontSize="25px"
              fontWeight="bold"
              className="MontserratSemibold"
            >
              {location.state.name}
            </Text>
            <Text
              w="300px"
              className="MontserratNormal"
              color="#797A7B"
              mt="20px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Flex alignItems="center" flexDir="row" mt="20px">
              <Image w="25px" src={box} mr="4px" />
              <Text className="MontserratSemibold">Ships:</Text>
            </Flex>
            <Flex flexDir="column" ml="20px">
              <Text color="#616161" fontSize="15px">
                3–4 weeks
              </Text>
              <Text color="#616161" fontSize="15px">
                Free Shipping
              </Text>
              <Text color="#0070F3" fontSize="15px">
                Get delivery dates
              </Text>
            </Flex>
            <Divider borderColor="#dacfc8" mt="20px" />
            <Flex mt="20px" flexDir="column">
              <Text
                fontSize="15px"
                className="MontserratSemibold"
                color="#8D827D"
              >
                Price
              </Text>
              <Text
                fontSize="20px"
                className="MontserratSemibold"
                color="#2C1810"
              >
                $ {` `} {location.state.offPrice}
              </Text>
              <Text
                fontSize="14px"
                className="MontserratSemibold"
                color="#8D827D"
                textDecorationLine="line-through"
              >
                $ {` `} {location.state.price}
              </Text>
              <Flex justifyContent="space-between" flexDir="row">
                <Button
                  w={["230px", "230px", "250px", "250px"]}
                  h="50px"
                  rounded="md"
                  mt="20px"
                  bg="#2C1810"
                  color="#fff"
                  _hover={{
                    bg: "#F8F3ED",
                    border: "1px",
                    borderColor: "#2C1810",
                    color: "#2C1810",
                  }}
                  onClick={() => addToCart(location.state)}
                  _focus={{}}
                  _active={{}}
                >
                  {CheckInCart(cart, location.state) ? "In Cart" : "Buy Now"}
                </Button>
                <Button
                  w="60px"
                  h="50px"
                  rounded="md"
                  bg="none"
                  border="1px"
                  borderColor="#D7C2B9"
                  mt="20px"
                  ml="8px"
                >
                  <Image src={like} />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}

export default ProductDetail;
