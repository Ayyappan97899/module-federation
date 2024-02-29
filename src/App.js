import React from "react"; // Must be imported for webpack to work
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppButton from "./components/Button";

function App() {
  return (
    <ChakraProvider>
      <div>app</div>
      <AppButton />
    </ChakraProvider>
  );
}

export default App;
