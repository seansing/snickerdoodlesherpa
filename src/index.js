import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
/* import Amplify from "aws-amplify";
import config from "./aws-exports"; */
/* Amplify.configure(config); */

const theme = extendTheme({
  colors: {
    brand: {
      600: "#FFD68F",
      500: "#232039",
    },
    main: {
      600: "#232039",
      500: "#232039",
    },
    brandlight: {
      500: "#786DB2",
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
