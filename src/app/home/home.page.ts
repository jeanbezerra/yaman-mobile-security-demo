import { Component } from '@angular/core';


interface Todo {
  id: number;
  title: string;
  isComplete: boolean;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: Array<Todo> = []
  todoEntry: string = ''

  constructor() {}

  addTodo(){
    let currentId = this.todos.length ? Math.max(...this.todos.map((t) => t.id)) : 0;
    if(this.todoEntry.length != 0){
      this.todos.push({
        id: currentId+1,
        title: this.todoEntry,
        isComplete: false
      })
    }

    this.todoEntry = ''

  }

  setCompleted(id: number){

    let todoToUpdate = this.todos.find(todo => todo.id === id);

    if (todoToUpdate) {
      todoToUpdate.isComplete = true;
    }

  }

  deleteTodo(id: number){

    this.todos = this.todos.filter(todo => todo.id !== id);

  }


}
