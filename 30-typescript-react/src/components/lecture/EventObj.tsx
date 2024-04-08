export default function EventObj() {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    console.log(e.target);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    console.log(e.target.value);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    console.log(e.code);
    console.log(e.key);
    // console.log(e.keyCode); //dcrated
    if (e.key === "Enter") {
      console.log("enter가 눌렸네요!!!!!!!!!!");
    }
  };
  return (
    <div style={{ background: "#ffffaa33" }}>
      <h4>event 객체 타입</h4>
      <div onClick={(e) => console.log(e.target)}>onClick</div>
      <div onClick={handleClick}>onClick!</div>
      <div>
        <span>onChange</span>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <span>onKeyDown</span>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
}
