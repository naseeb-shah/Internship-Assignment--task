import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react"; // Import Chakra UI components
import { logout } from "../Redux/AuthReducer/action";

export const Navbar = () => {
  const { isAuth } = useSelector(store => store.authManager);
  const dispatch = useDispatch();

  return (
    <Flex borderBottom="1px solid gray"  bg={"rgb(31,42,55)"} color={'white'} padding="10px 20px" boxShadow="2px 2px 2px gray" alignItems="center" justifyContent="space-between">
      <Heading as="h2" size="md" className="logo">Sai App</Heading>
    <Box w={100} ml={20}>    
      <Link  to={"/"}>Home</Link></Box>
      <Box w={100} > 
      {!isAuth && ( <Link to={"/login"}>Login</Link>)}
      </Box> 
      
      <Spacer />
      {isAuth && (
        <Button  onClick={() => dispatch(logout())} size="sm">LOGOUT</Button>
      )}
    </Flex>
  );
};
