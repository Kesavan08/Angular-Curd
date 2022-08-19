import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forms1Component } from './forms1/forms1.component';

const routes: Routes = [
  {path:'update/:id',component:Forms1Component},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
