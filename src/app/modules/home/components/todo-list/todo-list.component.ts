import { Component } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent { //pode ser que necessite o implements DoCheck
  
  ngDoCheck() {
    this.setLocalStorage();
  }

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]'); // JSON.parse, converte a string em Array
  //[
    //{ task: "Minha nova Task", checked: true },
    //{ task: "Minha nova Task 2", checked: false }
  //];

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja realmente deletar tudo?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Tarefa está vazia, deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList)); // JSON.stringify, converte o Array em string
    }   
  }
}
