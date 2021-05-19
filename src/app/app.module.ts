import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, UnlessDirective } from './app.component';
import { AdDirective, FirstComponentComponent, FlyingHeroes, ReplaceAWith0 } from './first-component/first-component.component';
import { DataTablesDirective } from './data-tables.directive';
import { BindingListenerDirective } from './binding-listener.directive';
import { ForbiddenValidatorDirective, TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CanActivateTemplateDrivenForms, HttpServiceService } from './http-service.service';
import { ChildrenOneComponent } from './children-one/children-one.component';
import { ChildrenTwoComponent } from './children-two/children-two.component';
import { Router } from '@angular/router';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HttpConfigInterceptor, LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    FirstComponentComponent,
    DataTablesDirective,
    BindingListenerDirective,
    ReplaceAWith0,
    FlyingHeroes,
    AdDirective,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ForbiddenValidatorDirective,
    RxjsPlaygroundComponent,
    HttpClientComponent,
    ChildrenOneComponent,
    ChildrenTwoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AdminModule,
    // UsersModule
  ],
  providers: [
    {provide: CanActivateTemplateDrivenForms, useClass: CanActivateTemplateDrivenForms, deps: [Router]},
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [FirstComponentComponent]
})
export class AppModule { }
