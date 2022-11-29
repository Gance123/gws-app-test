import { useEffect, useState } from "react";
import { Box, Flex, Image, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

import { SwiperSlider } from "../organisms/Swiper";
import { SliderImage } from "../../images/SliderImage";
import { NowsTime } from "../organisms/NowsTime";
import { PostCard } from "../organisms/PostCard";

type Props = {
  isAuth: string;
};

export const Home = (props: Props) => {
  const [postLists, setPostLists] = useState<Array<any>>([]);
  const { isAuth } = props;
  //ログインしないと記事投稿できないようにする
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "post"));
      // data
      console.log(data);
      // 肝心なdata
      console.log(data.docs);
      // 肝心なデータ群を広げる
      console.log(data.docs.map((doc) => ({ ...doc.data() })));
      // 肝心なデータ群の中にdoc.id（削除するものを特定する）を付け加えたい
      console.log(data.docs.map((doc) => doc.id));
      // 広げたデータの中にプロパティを追加してdoc.idを付け加える
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    if (!isAuth) {
      navigate("/");
    }
    getPosts();
  }, [isAuth, navigate]);

  return (
    <>
      <Box>
        <Flex w="100%" justify="center" alignItems="center">
          <Box
            h="30vh"
            w="100vw"
            shadow="0px 0px white"
            overflow="hidden"
            position="relative"
            p="5px"
            mb="50px"
          >
            <Image
              src="/src/images/princess.jpg"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              boxShadow="0px 0px 5px white"
              bg="rgba(255,255,255, .5)"
              borderRadius="50px"
            >
              <NowsTime />
            </Box>
          </Box>
        </Flex>

        <SwiperSlider images={SliderImage} />

        <Text className="header__post"> 何してるーーー？？</Text>

        <Wrap justify="center" p={{ base: 4, md: 10 }}>
          {postLists.map((post) => {
            return (
              <WrapItem key={post.id}>
                <PostCard
                  title={post.title}
                  content={post.content}
                  username={post.author?.username}
                  authorID={post.author?.id}
                  userID={post.id}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </>
  );
};
