import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./style/globalStyle";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import UserContextProvider from "./contexts/user-context";
import CustomSteps from "./style/stepsStyles";



const theme = extendTheme({
  components: {
    Steps: CustomSteps,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <UserContextProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </UserContextProvider>
  </>
);
