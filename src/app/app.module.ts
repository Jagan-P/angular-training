import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, UnlessDirective } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
