import { useNavigate } from "react-router-dom";
import {
  Card,
  useToast,
  CardHeader,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const RecipeCard = ({ id, image, name, category, type, price }) => {
  const { isAuth } = useSelector((store) => store.authManager);
  const toast = useToast()
  const navigate = useNavigate();
  const validUser = () => {
    if(isAuth){
     navigate(`/recipe/${id}`)
    }else{
      toast({
        title: 'Please Log In',
        position:'top',
        description: "This button should also only be accessible to authenticated users.",
        status: 'warning',
        duration: 9000,
        isClosable: true,
       
      })
    }
    return
  };
  return (
    <Card
      maxW="sm"
      textAlign={"center"}
      mb={30}
      color={"white"}
      bg={"rgb(31,42,55)"}
    >
      <CardBody>
        <Image
          src={"https://picsum.photos/536/354"}
          alt={name}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name.slice(0, 20)}</Heading>
          <Text>{category?.toUpperCase()}</Text>
          <Text></Text>
          <Text color="blue.600" fontSize="2xl">
            {price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing={3} textAlign={"center"} w={"80%"} ml={"13%"}>
          <Button variant="solid" colorScheme="blue" onClick={validUser}>
            Check Details
          </Button>
          <Button variant="outline" colorScheme="blue" onClick={validUser}>
            Add to Deals
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
