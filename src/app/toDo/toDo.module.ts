import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoRoutingModule } from './toDo-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports:      [ ToDoRoutingModule, FormsModule, CommonModule],
  declarations: [ ToDoRoutingModule.components ]
})
export class ToDoModule {}
