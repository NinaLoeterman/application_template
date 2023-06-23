'use client'
import { Button as ChakraButton, SystemStyleObject } from "@chakra-ui/react";

interface IButton {
  children: string;
  onClick: () => void;
  styles?: SystemStyleObject;
}

export const Button = ({ children, onClick, styles }: IButton) => (
  <ChakraButton onClick={onClick} sx={styles}>
    {children}
  </ChakraButton>
);
