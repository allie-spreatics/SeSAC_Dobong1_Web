// 강의때 사용한 interface
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface GTodo<T> {
  id: number;
  text: T;
  done: boolean;
}

// 맛집 실습(?)에서 사용한 interface
export interface MatzipForm {
  imgSrc: string;
  title: string;
  desc: string;
  idx: number;
}
