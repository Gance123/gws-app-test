import { Dispatch, memo, SetStateAction, useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  setIsAuth: Dispatch<SetStateAction<string | null>>;
};
export const Login = memo((props: Props) => {
  const { setIsAuth } = props;
  const navigate = useNavigate();
  const onClickSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth("true");
      navigate("/home");
    });
  };

  

  return (
    <>
      <Box bg="blue.200" h="100vh">
        <Image src="/src/images/pocha.png" w="100%" h="150px" />
        <Box bg="blackAlpha.800" h="45vh" w="45vh" m="0 auto" borderRadius="50%">
          <Flex
            w="100%"
            h="100%"
            justify="center"
            borderRadius="50%"
            alignItems="center"
            direction="column-reverse"
            gap="0"
            shadow="0px 0px 15px 0px white"
            m="70px auto"
            className="swashIn"
            bg="blue.300"
          >
            <Box bg="black" borderRadius="6px" shadow="0px 3px 1px 0px black">
              <Box className="boingInUp">
                <PrimaryButton
                  bg={"teal.400"}
                  color={"white"}
                  onClick={onClickSignIn}
                  width={"230px"}
                >
                  Googleでログイン
                </PrimaryButton>
              </Box>
            </Box>

            <Box h="235px" w="220px">
              <Image
                src="/src/images/stitch.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
});
