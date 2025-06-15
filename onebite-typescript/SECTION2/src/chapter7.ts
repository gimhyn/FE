// void
// void -> 공허 : 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2() : void { //반환값 null / undefined 쓰면 그걸 return 해야함
  // 아무것도 return 하고 싶지 않을 때 void
  console.log("hello");
}

let a: void;
a = undefined;

// never
// 존재하지 않는, 불가능한 타입

function func3(): never {
  while (true) {

  }
}

function func5(): never {
  throw new Error();
}