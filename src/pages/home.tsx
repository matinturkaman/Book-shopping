import { Container } from "@chakra-ui/react";
import Layout from "../layout/layout";
import Header from "../components/header";
import HomeBody from "../components/homeBody";

function Home(): JSX.Element {
  return (
    <Layout>
      <Container>
        <Header />
        <HomeBody />
      </Container>
    </Layout>
  );
}

export default Home;

