import { Component } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = [
    //{ task: "Minha nova Task", checked: true },
    //{ task: "Minha nova Task 2", checked: false }
  ];

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente deletar tudo?");
    if(confirm){
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, checked: false });
  }
}
