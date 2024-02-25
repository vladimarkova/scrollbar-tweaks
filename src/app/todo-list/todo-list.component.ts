import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: string[] = Array.from({ length: 20 }, (_, i) => `Todo ${i + 1}`);

  constructor() { }

  ngOnInit(): void {
  }

}
