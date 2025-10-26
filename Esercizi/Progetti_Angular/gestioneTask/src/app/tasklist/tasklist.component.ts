import { Component } from '@angular/core';
import { Task } from '../models/Task';
import { TaskService } from '../service/task.service';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  taskList: Task[] = [];
  selectedTask: Task | null = null;

  constructor(private taskServ: TaskService) { }

  loadTask() {
    this.taskServ.getTask().subscribe((getTask) =>
       this.taskList = getTask)
  }

  ngOnInit() {
    this.loadTask()
  }

  saveTask(saveTask: Task) {
    if (saveTask.id) {

      console.log('Modifica in corso per task ID:', saveTask.id);

      this.taskServ.updateTask(saveTask).subscribe(() => this.loadTask())

    } else {

      let taskToAdd = { ...saveTask }
      delete taskToAdd.id

      this.taskServ.addTask(taskToAdd).subscribe(() => this.loadTask())

    }
    this.resetList()

  }

  resetList() {
    this.selectedTask = null
  }

  editTask(editTask: Task){
    this.selectedTask={...editTask}
  }

  deleteTask(id: any){
    this.taskServ.deleteTask(id).subscribe(()=> this.loadTask())
  }



displayedColumns: string[] = ['id', 'titolo', 'descrizione', 'stato', 'azioni'];



}
