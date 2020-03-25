import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

import {HttpClientModule} from '@angular/common/http'
import {FereCastService} from './services/fere-cast.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [FereCastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
