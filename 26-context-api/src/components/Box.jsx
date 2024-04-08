import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Box() {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <>
      <h4>ThemeContext 값 가져오기</h4>
      <p>themecontext: {context}</p>
    </>
  );
}
