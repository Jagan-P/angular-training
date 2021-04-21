import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, UnlessDirective } from './app.component';
import { FirstComponentComponent, FlyingHeroes, ReplaceAWith0 } from './first-component/first-component.component';
import { DataTablesDirective } from './data-tables.directive';
import { BindingListenerDirective } from './binding-listener.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    FirstComponentComponent,
    DataTablesDirective,
    BindingListenerDirective,
    ReplaceAWith0,
    FlyingHeroes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
