export default function Result(props) {
  const { fruit, background, color, content } = props.data;
  return (
    <div>
      <img src={`/${fruit}.jpg`} alt="과일 사진" width={100} height={100} />
      <div
        style={{
          backgroundColor: background,
          color,
          padding: "10px",
          margin: "10px",
        }}
      >
        {content}
      </div>
    </div>
  );
}
