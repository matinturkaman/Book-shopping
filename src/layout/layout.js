import { Container } from "@chakra-ui/layout";
import Footer from "../components/footer";
import Nav from "../components/navigation";

const Layout = ({ children }) => {
  return (
    <Container maxW="1919px" minH="100vh" p="0" bg="#F8F3ED">
      <Nav />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
