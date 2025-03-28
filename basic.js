// 숫자 타입
var conunt = 0;
// 문자열 타입
var message = "Hello, TypeScript!";
// boolean 타입
var isValid = true;
// 배열 타입: 숫자배열
var numbers = [1, 2, 3, 4];
// 튜플 타입: 서로 다른 타입의 고정 길이 배열
var tuple = ["age", 30];
// 객체 타입: 인터페이스 없이 간단히 작성한 객체
var user = {
    name: "Park",
    age: 34
};
// 함수 예제: 매개변수와 리턴 값에 타입 지정
function add(a, b) {
    return a + b;
}
console.log("Add Result: ", add(2, 3));
