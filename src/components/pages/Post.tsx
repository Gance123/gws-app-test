import { ChangeEvent, memo, useEffect, useState } from "react";
import { Box, Flex, Image, Input, Text, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";

type Props = {
  isAuth: string | null;
};

export const Post = (props: Props) => {
  const { isAuth } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [navigate, isAuth]);

  const [title, setTilte] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTilte(e.target.value);
  };
  const onChangeSetPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onClickPost = async () => {
    await addDoc(collection(db, "post"), {
      title: title,
      content: content,
      author: {
        username: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    navigate("/home");
  };

  return (
    <>
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        h="60vh"
        w="100%"
      >
        <Flex
          direction="column"
          gap="20px"
          bg="white"
          p="10"
          shadow="0px 0px 10px -4px"
          borderRadius="10px"
          w="80%"
          minH="50%"
        >
          <Box>
            <Text
              as="h1"
              fontSize="30px"
              fontWeight="bold"
              fontFamily="Nico Moji"
            >
              投稿する
            </Text>
          </Box>
          <Box>
            <Text>タイトル</Text>
            <Input
              type="text"
              placeholder="タイトルを記入"
              bg="white"
              onChange={onChangeSetTitle}
            />
          </Box>
          <Box>
            <Text>投稿</Text>
            <Textarea
              placeholder="内容を記入"
              bg="white"
              h="5rem"
              onChange={onChangeSetPostText}
            />
          </Box>
          <Box margin="auto">
            <PrimaryButton
              bg={"pink.200"}
              color={"white"}
              onClick={onClickPost}
              width={"230px"}
            >
              投稿する
            </PrimaryButton>
          </Box>
        </Flex>
      </Flex>
      <Box
        h="200px"
        w="200px"
        position="absolute"
        top="80%"
        right="5"
        className="peech"
      >
        <Image src="/src/images/peech.png" />
        <div className="three-ball">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Box>
    </>
  );
};
