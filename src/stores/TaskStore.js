import { makeAutoObservable } from "mobx";
class TaskStore {
  tasks = [];
  showModal = false;

  constructor() {
    makeAutoObservable(this);
  }
  setTask(task) {
    this.tasks = [...this.tasks, task];
  }

  toggleModal(payload) {
    this.showModal = payload;
  }
}
const taskStore = new TaskStore();
export default taskStore;
