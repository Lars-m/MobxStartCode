import mobx, { observable, computed, action, useStrict } from "mobx";
useStrict(true);
const URL = "http://localhost:7777/todos";


class ObservableTodoStore {
  @observable todos = [];
  @observable pendingRequests = 0;

  constructor() {
    mobx.autorun(() => console.log(this.report));
  }

  @computed get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  @computed get report() {
    if (this.todos.length === 0)
      return "<none>";
    return `Next todo: "${this.todos[0].task}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  @action
  loadTodos() {
    fetch(URL)
      .then(res => res.json())
      .then(action((todosArray) => {
        this.todos.replace(todosArray);
      }))
  }


  @action
  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }

  @action
  toggleTodo(todo) {
    todo.completed = !todo.completed;
  }
  @action
  editTaskName(todo, task) {
    todo.task = task;
  }
}

const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
window.observableTodoStore = observableTodoStore;
export default observableTodoStore;
