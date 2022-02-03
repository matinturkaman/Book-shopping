import { Container } from "@chakra-ui/react";
import BookProducts from "../components/BookProducts";
import PopularBooks from "../components/popularBooks";
import Layout from "../layout/layout";

function Explore(): JSX.Element {
  return (
    <Layout>
      <Container>
        <PopularBooks />
        <BookProducts />
      </Container>
    </Layout>
  );
}

export default Explore;
