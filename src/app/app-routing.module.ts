import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'todo', loadChildren: 'app/toDo/toDo.module#ToDoModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
