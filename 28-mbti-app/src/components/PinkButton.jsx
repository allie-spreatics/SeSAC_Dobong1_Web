import Button from "./Button";

export default function PinkButton({ text, clickEvent }) {
  return (
    <Button
      clickEvent={clickEvent}
      text={text}
      mainColor="##f9c4d2"
      subColor={"#b18597"}
      hoverColor={"#ffe9e9"}
    />
  );
}
