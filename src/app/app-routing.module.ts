import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from './components/can-deactivate.guard';
import { SimpleComponent } from './components/simple/simple.component';
import { FormularioComponent } from './components/form-angular/form-angular.component';

const routes: Routes = [
  { path: "", redirectTo: "/formulario", pathMatch: "full" },
  { path: "formulario", component: FormularioComponent, canDeactivate: [CanDeactivateGuard] },
  { path: "simple", component: SimpleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
