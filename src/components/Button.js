import { Button } from "@chakra-ui/react";
import React from "react";

const AppButton = ({ text, colorScheme }) => {
  return <Button colorScheme={colorScheme || "blue"}>{text || Button}</Button>;
};

export default AppButton;
