import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataSendingComponent } from './data-send/data-send.component';
import { DataRecevingComponenet } from './data-receive/data-receive.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,DataSendingComponent,DataRecevingComponenet ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
