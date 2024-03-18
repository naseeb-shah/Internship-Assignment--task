import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../Redux/RecipeReducer/action";
import { RecipeCard } from "./RecipeCard";
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
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>}
      {isError && <h1>Error.....</h1>}
      <Flex  flexDirection={'row'} flexWrap={'wrap'} justify={'space-between'}>
        {recipe && recipe.map(({ id, category, image, ingredients, name, price, type }) =>
          <RecipeCard key={id} id={id} category={category} image={image} ingredients={ingredients} name={name} price={price} type={type} />
        )}
      </Flex>
    </div>
  );
};
