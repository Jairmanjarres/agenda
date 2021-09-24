import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCitaComponent } from './components/add-cita/add-cita.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListCitaComponent } from './components/list-cita/list-cita.component';
import { ServicesService } from './services/services.service';

@NgModule({
  declarations: [
    AppComponent,
    AddCitaComponent,
    NavbarComponent,
    ListCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
