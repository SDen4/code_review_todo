export type TodoItemType = {
  id: string;
  title: string;
  checked: boolean;
};

export type InitialStateType = {
  todos: TodoItemType[];
};
