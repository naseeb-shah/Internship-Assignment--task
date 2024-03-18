import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider,extendTheme } from "@chakra-ui/react";


 const customTheme= extendTheme({
  styles:{
    global:{
      body:{
        bg:'gray.200'
      }
    }
  }
 })

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
      <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
