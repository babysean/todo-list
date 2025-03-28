// 숫자 타입
let conunt: number = 0;

// 문자열 타입
let message: string = "Hello, TypeScript!";

// boolean 타입
let isValid: boolean = true;

// 배열 타입: 숫자배열
let numbers: number[] = [1, 2, 3, 4];

// 튜플 타입: 서로 다른 타입의 고정 길이 배열
let tuple: [string, number] = ["age", 30];

// 객체 타입: 인터페이스 없이 간단히 작성한 객체
let user: { name: string, age: number } = {
  name: "Park",
  age: 34
};

// 함수 예제: 매개변수와 리턴 값에 타입 지정
function add(a: number, b: number): number {
  return a + b;
}

console.log("Add Result: ", add(2, 3));