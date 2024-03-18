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
      let res = await axios.get(`https://serverside-five.vercel.app/product/q?_id=${params?.id}`);
      setRecipeData(res.data.data[0]);
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
        borderRadius={20}
        width="30%"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        margin="auto"
        marginTop="2%"
        bg={'rgb(31,42,55)'}
        color={"white"}
      >
        <Text  >
          {params.id}
        </Text>
        <Image
          src={"https://picsum.photos/536/354"}
          alt={recipeData?.name}
          style={{ width: '350px' }}
         
        />
        <Text  >
          {recipeData?.name}
        </Text>
        {/* <Text >Type: {recipeData?.type}</Text> */}
        <Text  >
          Category: {recipeData?.cat?.toUpperCase()}
        </Text>
        <Text  >
          Price: {recipeData?.price}$
        </Text>
        
      </Box>
    ) : (
      <Spinner
      textAlign={"center"}
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
