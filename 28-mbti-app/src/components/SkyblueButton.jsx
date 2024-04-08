import Button from "./Button";

export default function SkyblueButton({ text, clickEvent }) {
  return (
    <Button
      clickEvent={clickEvent}
      text={text}
      mainColor="#c1e3ff"
      subColor={"#7cb8fd"}
      hoverColor={"#d7f6ff"}
    />
  );
}
