import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../Redux/ProductReducer/action";
import { RecipeCard } from "./ProductCard";
import { Flex, Spinner } from '@chakra-ui/react'

export const RecipeList = () => {
  const { recipe, isLoading, isError } = useSelector(store => store.recipeManager);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <div style={{ padding: '10px', width: '100%' }}>
      {isLoading && <Spinner
      textAlign={"center"}
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>}
      {isError && <h1>Error.....</h1>}
      <Flex  flexDirection={'row'} flexWrap={'wrap'} justify={'space-between'}>
        {recipe && recipe.map(({ _id, cat, img, name, price}) =>
          <RecipeCard key={_id} id={_id} category={cat} image={img}  name={name} price={price}  />
        )}
      </Flex>
    </div>
  );
};
