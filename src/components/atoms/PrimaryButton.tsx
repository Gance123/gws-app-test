import { Box, Button } from "@chakra-ui/react";
import React, { memo, ReactNode } from "react";

type Props = {
  bg: string;
  color: string;
  onClick: () => void;
  children: ReactNode;
  width: string
};
export const PrimaryButton = memo((props: Props) => {
  const { bg, color, onClick, children, width } = props;
  return (
      <Button bg={bg} color={color} onClick={onClick} width={width}>
        {children}
      </Button>
  );
});
