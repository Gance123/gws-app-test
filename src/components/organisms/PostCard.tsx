import { Box, Flex, Text } from "@chakra-ui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  title: string;
  content: string;
  username: string;
  authorID: string;
  userID: string;
};

export const PostCard = (props: Props) => {
  const { title, content, username, authorID, userID } = props;
  const onClickDelte = async (id: string) => {
    await deleteDoc(doc(db, "post", id));
    window.location.href = "/home";
  };
  return (
    <Flex
      justify="center"
      alignItems="center"
      direction="column"
      gap="150px"
      minH="300px"
      w="300px"
      borderRadius="8px"
      bg="white"
      color="black"
      shadow="lg"
      m="10px"
      p="30px"
    >
      <Text textAlign="center" fontSize="1.2rem" wordBreak="break-word" fontFamily="Nico Moji">
        {title}
      </Text>
      <Text wordBreak="break-word">{content}</Text>
      <Flex justify="space-between" alignItems="center" gap="20px">
        <Text fontWeight="bold"> @{username}</Text>
        {authorID === auth.currentUser?.uid && (
          <PrimaryButton
            bg={"red"}
            color={"white"}
            onClick={() => onClickDelte(userID)}
            width={"60px"}
          >
            削除
          </PrimaryButton>
        )}
      </Flex>
    </Flex>
  );
};
