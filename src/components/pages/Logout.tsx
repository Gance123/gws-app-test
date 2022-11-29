import { Dispatch, memo, SetStateAction, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

type Props = {
  setIsAuth: Dispatch<SetStateAction<string | null>>;
};
export const Logout = memo((props: Props) => {
  const { setIsAuth } = props;
  const navigate = useNavigate();
  const onClickWithGoogle = () => {
    signOut(auth).then((result) => {
      localStorage.clear();
      setIsAuth("false");
      navigate("/");
    });
  };

  return (
    <Flex justify="center" alignItems="center" h="80vh">
      <PrimaryButton bg={"red"} color={"white"} onClick={onClickWithGoogle}>
        ログアウト
      </PrimaryButton>
    </Flex>
  );
});
