var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 완료상태로 반전시키는 함수
function toggleTodo(todo) {
    return __assign(__assign({}, todo), { completed: !todo.completed });
}
/**
 * TodoList 클래스 정의
*/
var TodoList = /** @class */ (function () {
    // 선택적으로 초기 할 일 목록을 받을 수 있는 생성자
    function TodoList(initialItems) {
        // TodoItem 배열을 비공개 속성으로 선언
        this.items = [];
        if (initialItems) {
            this.items = initialItems;
        }
    }
    // 새로운 할 일을 추가하는 메서드
    TodoList.prototype.addTodo = function (todo) {
        this.items.push(todo);
    };
    // 특정 id의 할 일의 완료 상태를 토글하는 메서드
    TodoList.prototype.toggleTodoById = function (id) {
        this.items = this.items.map(function (todo) {
            return todo.id === id ? toggleTodo(todo) : todo;
        });
    };
    // 특정 id의 할 일을 제거하는 메서드
    TodoList.prototype.removeTodoById = function (id) {
        this.items = this.items.filter(function (todo) { return todo.id !== id; });
    };
    // 할 일의 제목 업데이트하는 메서드
    TodoList.prototype.updateTodoTitle = function (id, newTitle) {
        this.items = this.items.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { title: newTitle }) : todo;
        });
    };
    // 완료 여부에 따라 할 일 목록을 반환하는 메서드
    TodoList.prototype.filterTodos = function (completed) {
        return this.items.filter(function (todo) { return todo.completed === completed; });
    };
    // 현재 할 일 목록을 반환하는 메서드
    TodoList.prototype.getTodos = function () {
        return this.items;
    };
    // 현재 할 일 목록을 콘솔에 출력하는 메서드
    TodoList.prototype.printTodos = function () {
        console.log("현재 할 일 목록:");
        this.items.forEach(function (todo) { return console.log(todo); });
    };
    return TodoList;
}());
/**
 * 클래스 사용 예제
*/
var myTodoList = new TodoList();
// 할 일 추가
myTodoList.addTodo({
    id: 1,
    title: "TypeScript 배우기",
    completed: false
});
myTodoList.addTodo({
    id: 2,
    title: "코딩 연습하기",
    completed: false
});
console.log("할 일 추가 후:");
myTodoList.printTodos();
// 첫 번째 할 일을 완료 상태로 변경
myTodoList.toggleTodoById(1);
console.log("첫 번째 할 일 토글 후:");
myTodoList.printTodos();
// 두 번째 할 일 제목 업데이트
myTodoList.updateTodoTitle(2, "코딩 연습하기 - 업데이트");
console.log("두 번째 할 일 제목 업데이트 후:");
myTodoList.printTodos();
// 완료된 할 일만 필터링
var completedTodos = myTodoList.filterTodos(true);
console.log("완료된 할 일만 필터링 후:");
console.log(completedTodos);
// 두 번째 할 일 제거
myTodoList.removeTodoById(2);
console.log("두 번째 할 일 제거 후:");
myTodoList.printTodos();
