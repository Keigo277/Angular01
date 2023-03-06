import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks:Task[] = [
   new Task( "Jin"),
   new Task("Airon man") ,
   new Task("Captain American") ,
   new Task("Thor") ,
   new Task("Ant Man") ,

  ]
  add(newTask:string){
    this.tasks.push(new Task(newTask));
  }
  remove(exsitingTask:Task){
   var userConfirmed = confirm(`${exsitingTask.title}は完全に削除されますがよろしいですか？`)
   
   if(userConfirmed){
    this.tasks = this.tasks.filter(task => task !== exsitingTask);
   }else{
    return
   }
  }


}

class Task{
  constructor(public title:string){

  }
  toggleIsDone(){
    // alert('The task:"' + task + '"is done');
    this.isDone = !this.isDone;
  }
  public isDone = false;
}
