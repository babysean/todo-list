// 아이템 인터페이스
interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

// 완료상태로 반전시키는 함수
function toggleTodo(todo: TodoItem): TodoItem {
  return {
    ...todo,
    completed: !todo.completed,
  };
}

/**
 * TodoList 클래스 정의
*/
class TodoList {
  // TodoItem 배열을 비공개 속성으로 선언
  private items: TodoItem[] = [];

  // 선택적으로 초기 할 일 목록을 받을 수 있는 생성자
  constructor(initialItems?: TodoItem[]) {
    if (initialItems) {
      this.items = initialItems;
    }
  }

  // 새로운 할 일을 추가하는 메서드
  addTodo(todo: TodoItem): void {
    this.items.push(todo);
  }

  // 특정 id의 할 일의 완료 상태를 토글하는 메서드
  toggleTodoById(id: number): void {
    this.items = this.items.map(todo =>
      todo.id === id ? toggleTodo(todo) : todo
    )
  }

  // 특정 id의 할 일을 제거하는 메서드
  removeTodoById(id: number): void {
    this.items = this.items.filter(todo => todo.id !== id);
  }

  // 현재 할 일 목록을 반환하는 메서드
  getTodos(): TodoItem[] {
    return this.items;
  }

  // 현재 할 일 목록을 콘솔에 출력하는 메서드
  printTodos(): void {
    console.log("현재 할 일 목록:");
    this.items.forEach(todo => console.log(todo));
  }
}

/**
 * 클래스 사용 예제
*/
let myTodoList = new TodoList();

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

// 두 번째 할 일 제거
myTodoList.removeTodoById(2);
console.log("두 번째 할 일 제거 후:");
myTodoList.printTodos();