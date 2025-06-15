// any
// 특정 변수의 타입을 우리가 확실히 모를 때
// 타입 검사 생략 
let anyVar:any = 10;
anyVar = "hello";

// unkonwn
let unkonwnVar: unknown;

unkonwnVar = "";
unkonwnVar = 1;
unkonwnVar = () => {};

let num: number = 10;

if (typeof unkonwnVar === "number") {
  num = unkonwnVar;
}