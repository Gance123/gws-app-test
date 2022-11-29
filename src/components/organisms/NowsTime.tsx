import { Box, Text } from "@chakra-ui/react";
import React, { memo } from "react";

export const NowsTime = memo(() => {
  const getTime = Date.now();
  // console.log(getTime)
  const newGetTime = new Date(getTime).toLocaleDateString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Text
      color="white"
      fontSize="2rem"
      fontFamily="Nico Moji"
      textAlign="center"
      textShadow="1px 1px gray"
    >
      {newGetTime}
    </Text>
  );
});
