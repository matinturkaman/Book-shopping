import { Flex, Image, Text } from "@chakra-ui/react";
import Layout from "../layout/layout";
import { useCart } from "../providers/cartProvider";

function Cart() {
  const { cart } = useCart();

  return (
    <Layout>
      <Flex>
        {cart.length ? (
          cart.map((c: any) => {
            return (
              <Flex key={c.id}>
                <Image w="100px" src={c.src} />
              </Flex>
            );
          })
        ) : (
          <Text>not found</Text>
        )}
      </Flex>
    </Layout>
  );
}

export default Cart;
