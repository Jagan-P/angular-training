import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ChildrenOneComponent } from './children-one/children-one.component';
import { ChildrenTwoComponent } from './children-two/children-two.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { CanActivateTemplateDrivenForms } from './http-service.service';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


const routes: Routes = [
  {path: 'template-driven-forms', component: TemplateDrivenFormsComponent},
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'rxjs-playground', component: RxjsPlaygroundComponent},
  {path: 'http-client', component: HttpClientComponent},
  {path: 'users', children: [
    {path: 'children-1', component: ChildrenOneComponent, canActivate:[CanActivateTemplateDrivenForms]},
    {path: 'children-2', component: ChildrenTwoComponent}
  ]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
