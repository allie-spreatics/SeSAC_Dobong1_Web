import React from "react";

class RefClass1 extends React.Component {
  handleFocus = () => {
    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>버튼클릭시 input창에 focus 처리(callback 사용)</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

class RefClass2 extends React.Component {
  myInput = React.createRef();

  handleFocus = () => {
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <p>버튼 클릭시 input에 focus 처리(createRef()사용)</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
export { RefClass1, RefClass2 };
