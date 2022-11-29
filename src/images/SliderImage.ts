import { useNavigate } from "react-router-dom";

export type SliderImageType = {
  id: number;
  title: string;
  url: string;
  nav: string;
};

export const SliderImage = [
  {
    id: 1,
    title: "HOMEへ移動",
    url: "/src/images/arazin.jpg",
    nav: "/home",
  },
  {
    id: 2,
    title: "記事投稿をする",
    url: "/src/images/anayuki.jpg",
    nav: "/post",
  },
  {
    id: 3,
    title: "ノートを書く",
    url: "/src/images/kity.jpg",
    nav: "/note",
  },
];
