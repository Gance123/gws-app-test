import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  isAuth: string | null;
};

export const Note = (props: Props) => {
  const { isAuth } = props;
  //ログインしないと記事投稿できないようにする
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [navigate, isAuth]);

  return <div>Note</div>;
};
