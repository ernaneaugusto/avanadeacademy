import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BoolPipe } from './bool.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BoolPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
