import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoComponent } from './toDo.component';

const routes: Routes = [
  { path: '', component: ToDoComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ToDoRoutingModule {
  static components = [ ToDoComponent ];
}