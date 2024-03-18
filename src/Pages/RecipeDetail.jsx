import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Image, Text, Spinner } from "@chakra-ui/react";

export const RecipeDetail = () => {
  const params = useParams();
  const [recipeData, setRecipeData] = useState();

  useEffect(() => {
    getRecipe();
  }, []);
  const getRecipe = async () => {
    try {
      let res = await axios.get(`https://blog-database-p9we.vercel.app/recipe/${params?.id}`);
      setRecipeData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box textAlign={"center"}>
    {recipeData ? (
      <Box
        borderWidth="1px"
        borderColor="beige"
        padding="10px 20px"
        width="30%"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        margin="auto"
        marginTop="2%"
        bg={'rgb(31,42,55)'}
        color={"white"}
      >
        <Heading as="h1" className="recipe-id">
          {params.id}
        </Heading>
        <Image
          src={recipeData?.image}
          alt={recipeData?.name}
          style={{ width: '350px' }}
         
        />
        <Heading as="h3" >
          {recipeData?.name}
        </Heading>
        <Text >Type: {recipeData?.type}</Text>
        <Heading as="h2" >
          Category: {recipeData?.category}
        </Heading>
        <Heading as="h3" >
          Price: {recipeData?.price}$
        </Heading>
        <Box >
          <Heading as="h3">Ingredients:-</Heading>
          {recipeData?.ingredients?.map((ele, index) => (
            <Text key={index}>- {ele} -</Text>
          ))}
        </Box>
      </Box>
    ) : (
      <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    )}
  </Box>
  );
};
