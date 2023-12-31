import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ThreadComponent } from './components/thread/thread.component';

import { ThreadService } from './services/thread.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
  ],
  providers: [ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
