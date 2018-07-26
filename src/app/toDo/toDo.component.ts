import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import { LoggerService } from '../core/services/logger.service';

@Component({
    selector: 'todo',
    templateUrl: './toDo.component.html'
})
export class ToDoComponent implements OnInit {
  list = [];
  itemToAdd: String = "";
  constructor() { }

  ngOnInit() {

  }

  addToList(){
    this.list.push(this.itemToAdd);
    this.itemToAdd = "";
  }

  deleteItem(index){
    this.list.splice(index, 1);
  }
}