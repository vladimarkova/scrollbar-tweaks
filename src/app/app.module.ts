import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { OverlayScrollbarsComponent, OverlayscrollbarsModule } from "overlayscrollbars-ngx";

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayscrollbarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // constructor() {
  //   OverlayScrollbarsComponent.globalSettings({
  //     scrollbars: {
  //       autoHide: 'scroll',
  //       // Other global options
  //     }
  //   });
  // }

 }
