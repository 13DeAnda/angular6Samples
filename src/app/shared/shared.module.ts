import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { SortByDirective } from './directives/sortby.directive';

@NgModule({
  imports: [CommonModule],
  exports: [ CommonModule, FormsModule, CapitalizePipe, TrimPipe, SortByDirective],
  declarations: [ CapitalizePipe, TrimPipe, SortByDirective ]
})
export class SharedModule { }
