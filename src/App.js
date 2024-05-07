import "./App.css";
import WebRoutes from "./config/web-routes";
import Store from "./config/redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

function App() {
  return (
    <ChakraProvider>
      <Provider store={Store}>
        <WebRoutes />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
