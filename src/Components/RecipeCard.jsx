import { useNavigate } from "react-router-dom";
import { Card, CardHeader,Button,ButtonGroup, CardBody, CardFooter,Image,Text,Stack,Heading,Divider } from '@chakra-ui/react'
export const RecipeCard = ({ id, image, name, category, type, price }) => {
  const navigate = useNavigate();
  return (
    <Card maxW='sm' textAlign={'center'} mb={30} color={"white"} bg={'rgb(31,42,55)'}>
    <CardBody>
      <Image
        src={image}
        alt={name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
         {category}
        </Text>
        <Text>
         {"Type: "+ type}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
         {price}
        </Text>
      </Stack>
    </CardBody>
  <ButtonGroup alignSelf={"center"}>
      <Button variant='solid' colorScheme='blue' onClick={() => navigate(`/recipe/${id}`)}>
      View Ingredients
      </Button>
      </ButtonGroup>
  
  </Card>
  );
};
