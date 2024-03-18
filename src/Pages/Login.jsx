import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const dispatch = useDispatch();
  const { isAuth, isLoading, isError } = useSelector((store) => store.authManager);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (isAuth) {
      if (state?.from) {
        navigate(state.from, { replace: true });
      } else {
        navigate('/');
      }
    }
  }, [isAuth, navigate]);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value
    });
  };
  const handleSubmit = () => {
    console.log('in log in')
    dispatch(login(loginCreds));
  };
  if (isError) {
    return (<Heading>Something went wrong</Heading>);
  };
  return (
    <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="rgb(31,42,55)"
    justifyContent="center"
    alignItems="center"
    color={'white'}
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Welcome</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input 
                type="email" name="email" onChange={hanldeChange}
                placeholder="email address" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                 
                 
                 name="password"
                 onChange={hanldeChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link>forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Stack>
        
      </Box>
    </Stack>
    <Box>
      <Link as={"a"} href="https://reqres.in/">
      Please log in using your Reqres credentials.

      </Link>
    </Box>
  </Flex>
  );
};

