// Context타입은 프로젝트 전반에 걸쳐서 사용할 수 있도록 따로 d.ts파일을 만들어서 사용

interface ITodoListContext {
  todoList: string[];
  addTodoList: (todo: string) => void;
  removeTodoList: (index: number) => void;
}
