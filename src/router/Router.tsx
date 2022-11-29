import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Logout } from "../components/pages/Logout";
import { Note } from "../components/pages/Note";
import { Post } from "../components/pages/Post";

type Props = {
  isAuth: string | null;
  setIsAuth: Dispatch<SetStateAction<string | null>>;
};

export const Router = (props: Props) => {
  const { setIsAuth, isAuth } = props;
  return (
    <Routes>
      <Route path="/" element={<Login setIsAuth={setIsAuth} />}></Route>
      <Route path="/home" element={<Home isAuth={isAuth} />}></Route>
      <Route path="/post" element={<Post isAuth={isAuth} />}></Route>
      <Route path="/note" element={<Note isAuth={isAuth} />}></Route>
      <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />}></Route>
    </Routes>
  );
};
