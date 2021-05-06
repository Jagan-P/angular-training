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
import { HttpClientModule } from '@angular/common/http';
import { CanActivateTemplateDrivenForms, HttpServiceService } from './http-service.service';
import { ChildrenOneComponent } from './children-one/children-one.component';
import { ChildrenTwoComponent } from './children-two/children-two.component';

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
    ChildrenTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CanActivateTemplateDrivenForms],
  bootstrap: [AppComponent],
  entryComponents: [FirstComponentComponent]
})
export class AppModule { }
