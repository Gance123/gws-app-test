import React from "react";
import { atom } from "recoil";

const localstrageAuth = localStorage.getItem("isAuth");
export const userState = atom({
  key: "userState",
  default: { isAuth: localstrageAuth },
});
