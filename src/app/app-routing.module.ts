import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientComponent } from './http-client/http-client.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


const routes: Routes = [
  {path: 'template-driven-forms', component: TemplateDrivenFormsComponent},
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'rxjs-playground', component: RxjsPlaygroundComponent},
  {path: 'http-client', component: HttpClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
