import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faPen,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <Box
      bg="pink.300"
      h="112px"
      shadow="inset 0px 0px 6px 5px white"
      opacity=".8"
    >
      <Flex
        fontSize=".8rem"
        color="white"
        w="100%"
        h="100%"
        justify="space-around"
        alignItems="center"
      >
        <Box>
          <Link to="/home">
            <Flex
              justify="center"
              alignItems="center"
              gap="5px"
              bg="whiteAlpha.600"
              h="100px"
              w="100px"
              borderRadius="50%"
              transition="all .4s"
              _hover={{ shadow: "0px 0px 10px white" }}
            >
              <FontAwesomeIcon icon={faHouse} />
              <Text textShadow="0px 0px black">ホーム</Text>
            </Flex>
          </Link>
        </Box>
        <Box>
          <Link to="/post">
            <Flex
              justify="center"
              alignItems="center"
              gap="5px"
              bg="whiteAlpha.600"
              h="100px"
              w="100px"
              borderRadius="50%"
              transition="all .4s"
              _hover={{ shadow: "0px 0px 10px white" }}
            >
              <FontAwesomeIcon icon={faFilePen} />
              <Text>投稿記事</Text>
            </Flex>
          </Link>
        </Box>
        <Box>
          <Link to="/note">
            <Flex
              justify="center"
              alignItems="center"
              gap="5px"
              bg="whiteAlpha.600"
              h="100px"
              w="100px"
              borderRadius="50%"
              transition="all .4s"
              _hover={{ shadow: "0px 0px 10px white" }}
            >
              <FontAwesomeIcon icon={faPen} />
              <Text>ノート</Text>
            </Flex>
          </Link>
        </Box>

        <Box>
          <Link to="/logout">
            <Flex
              justify="center"
              alignItems="center"
              gap="5px"
              bg="whiteAlpha.600"
              h="100px"
              w="100px"
              borderRadius="50%"
              transition="all .4s"
              _hover={{ shadow: "0px 0px 10px white" }}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <Text>ログアウト</Text>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
