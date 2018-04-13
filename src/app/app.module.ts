import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ruta
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

// modulos
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES, 
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
