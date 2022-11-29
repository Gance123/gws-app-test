import "./style/style.scss";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "swiper/css/bundle";

import { Navbar } from "./components/organisms/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/theme/theme";
import { useState } from "react";
import { Router } from "./router/Router";
import { RecoilRoot, RecoilState, useRecoilState } from "recoil";

import { userState } from "./store/userState";

export default function App() {
  const localstrageAuth = localStorage.getItem("isAuth");
  const [isAuth, setIsAuth] = useState<string | null>(localstrageAuth);

  

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          {isAuth === "true" && <Navbar />}
          <Router setIsAuth={setIsAuth} isAuth={isAuth} />
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  );
}
