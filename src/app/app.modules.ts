import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { routes } from './app.routes'; // Importa las rutas

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) // Configura las rutas principales
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
