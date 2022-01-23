import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";

function PopularBooks() {
  const popularTrendBooks = [
    {
      src: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
      name: "Head Book",
      writer: "Mark Manson",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod. Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.",
      background: "#543E34",
      id: 1,
    },
    {
      src: "https://pictures.abebooks.com/isbn/9780545582889-fr.jpg",
      name: "Head Book",
      writer: "j. k. rowling",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod. Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.",
      background: "#4C3454",
      id: 2,
    },
    {
      src: "https://img.kitapyurdu.com/v1/getImage/fn:11301258/wh:true/wi:800",
      name: "Head Book",
      writer: "Mark Manson",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod. Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.",
      background: "#5F2F2F",
      id: 3,
    },
  ];

  return (
    <Center flexDir="column">
      <Text
        fontWeight="medium"
        fontSize="45px"
        className="lyons"
        mt="40px"
        color="#2C1810"
        display={{
          xl: "flex",
          lg: "flex",
          md: "none",
          sm: "none",
          base: "none",
        }}
      >
        Popular books
      </Text>
      <Text
        fontWeight="medium"
        fontSize="45px"
        className="lyons"
        mt="40px"
        color="#2C1810"
        display={{
          xl: "none",
          lg: "none",
          md: "flex",
          sm: "flex",
          base: "flex",
        }}
      >
        New books
      </Text>
      <Flex
        w="95vw"
        justifyContent="space-evenly"
        mt="50px"
        flexDir="row"
        display={{
          xl: "flex",
          lg: "flex",
          md: "none",
          sm: "none",
          base: "none",
        }}
      >
        {popularTrendBooks.map((p) => {
          return (
            <Flex
              w="375px"
              h="192px"
              bg={p.background}
              rounded="md"
              boxShadow="xl"
              key={p.id}
              flexDir="row"
              alignItems="center"
              mt="30px"
            >
              <Image
                src={p.src}
                h="212px"
                w="150px"
                objectFit="cover"
                style={{ transform: "rotate(-3.53deg)" }}
                rounded="md"
              />
              <Flex
                flexDir="column"
                ml="10px"
                textAlign="center"
                alignItems="center"
              >
                <Text color="#FFFFFF">{p.name}</Text>
                <Text w="200px" fontSize="10px" color="#D2D2D2">
                  {p.desc}
                </Text>
                <Text fontSize="10px" color="#D2D2D2">
                  {p.writer}
                </Text>
                <Button
                  w="90px"
                  h="28px"
                  className="MontserratNormal"
                  fontSize="10px"
                  bg="none"
                  color="#fff"
                  border="1px"
                  borderColor="#fff"
                  rounded="3px"
                  mt="15px"
                  _hover={{ bg: "#fff", color: "#2C1810" }}
                  _focus={{}}
                  _active={{}}
                >
                  Buy Now
                </Button>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Center>
  );
}

export default PopularBooks;
