import { Component } from "react";

class ClassState extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       banana: "바나나",
  //     };
  //   }

  state = {
    banana: "바나나",
  };
  render() {
    const { banana } = this.state;
    return (
      <div>
        <div
          style={{
            color: "yellow",
            backgroundColor: "#000",
            fontWeight: "700",
          }}
        >
          {banana}
        </div>
        <button
          onClick={() => {
            this.setState({ banana: "banana" });
          }}
        >
          영어로 변경!
        </button>
      </div>
    );
  }
}

export default ClassState;
