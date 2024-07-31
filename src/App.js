import "./App.css";
import WebRoutes from "./config/web-routes";
import Store from "./config/redux/store";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#44337A",
      100: "#B794F4",
      500: "#B794F4", // you need this
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={Store}>
        <WebRoutes />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
