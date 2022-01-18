import { Container } from "@chakra-ui/layout";
import Nav from "../components/navigation";

const Layout = ({ children }) => {
  return (
    <Container maxW="1919px" minH="100vh" p="0" bg="#F8F3ED">
      <Nav />
      {children}
    </Container>
  );
};

export default Layout;
