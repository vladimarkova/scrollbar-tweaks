import { Component, OnInit } from '@angular/core';
import { ScrollbarsAutoHideBehavior, ScrollbarsVisibilityBehavior } from 'overlayscrollbars';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: string[] = Array.from({ length: 20 }, (_, i) => `Todo ${i + 1}`);
  // options = {
  //   scrollbars: {
  //     theme: 'os-theme-dark',
  //   },
  // };
  // options = {
  //   scrollbars: {
  //     // autoHide: 'scroll',
  //     scrollbars: {
  //       visibility: 'hidden',
  //       autoHide: 'scroll',
  //       autoHideDelay: 100
  //     },
  //     style: {
  //       background: 'red', // 'rgba(255, 0, 0, 0.1)', // Background color
  //       width: '8px', // Width of the scrollbar
  //       hover: {
  //         background: 'blue', // 'rgba(255, 0, 0, 0.3)' // Background color on hover
  //       },
  //       thumb: {
  //         borderRadius: '8px', // Border radius of the scrollbar thumb
  //         background: 'green', // 'rgba(255, 0, 0, 0.7)' // Color of the scrollbar thumb
  //       }
  //     }
  //   }
  // options: Partial<{
  //   theme: string | null;
  //   visibility: ScrollbarsVisibilityBehavior;
  //   autoHide: ScrollbarsAutoHideBehavior;
  //   autoHideDelay: number; autoHideSuspend: boolean;
  //   ragScroll: boolean;
  //   clickScroll: boolean;
  //   pointers: string[] | null;
  // }> = {};

  constructor() { }

  ngOnInit(): void {

  }

}
