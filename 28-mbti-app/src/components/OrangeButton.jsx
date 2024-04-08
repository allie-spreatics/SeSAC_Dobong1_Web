import Button from "./Button";

export default function OrangeButton({ text, clickEvent }) {
  return (
    <Button
      clickEvent={clickEvent}
      text={text}
      mainColor="#fae243"
      subColor="#fa9f1a"
      hoverColor="#faf000"
    />
  );
}
