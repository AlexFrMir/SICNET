import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MbarComponent } from './mbar/mbar.component';
import { NavbarModule, WavesModule, ButtonsModule, MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    MbarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),

  ],
  providers: [],
  bootstrap: [
  MbarComponent,
  AppComponent
  ]
})
export class AppModule { }
