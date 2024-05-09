import { useState } from "react";
import { Container, VStack, Heading, Select, Button, Image, FormControl, FormLabel, Box, Text, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const [color, setColor] = useState("green");
  const [glitter, setGlitter] = useState("none");
  const [scent, setScent] = useState("none");
  const toast = useToast();

  const handleOrder = () => {
    toast({
      title: "Order placed!",
      description: "We've received your slime order.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const slimeImage = `https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzbGltZSUyMCUyNCU3QmNvbG9yJTdEJTIwJTI0JTdCZ2xpdHRlciU3RCUyMCUyNCU3QnNjZW50JTdEfGVufDB8fHx8MTcxNTI4NzU4Nnww&ixlib=rb-4.0.3&q=80&w=1080`;

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={5}>
        <Heading>Customize Your Slime</Heading>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <FormControl id="color">
            <FormLabel>Color</FormLabel>
            <Select placeholder="Select color" value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="purple">Purple</option>
            </Select>
          </FormControl>
          <FormControl id="glitter" mt={4}>
            <FormLabel>Glitter</FormLabel>
            <Select placeholder="Select glitter" value={glitter} onChange={(e) => setGlitter(e.target.value)}>
              <option value="none">None</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="rainbow">Rainbow</option>
            </Select>
          </FormControl>
          <FormControl id="scent" mt={4}>
            <FormLabel>Scent</FormLabel>
            <Select placeholder="Select scent" value={scent} onChange={(e) => setScent(e.target.value)}>
              <option value="none">None</option>
              <option value="strawberry">Strawberry</option>
              <option value="vanilla">Vanilla</option>
              <option value="chocolate">Chocolate</option>
            </Select>
          </FormControl>
        </Box>
        <Image src={slimeImage} alt="Custom Slime Preview" boxSize="200px" objectFit="cover" />
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" onClick={handleOrder}>
          Order Slime
        </Button>
        <Text fontSize="sm">Preview shown is a representation and may not be exact.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
