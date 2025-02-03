import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule, 
  ],
  providers:[provideHttpClient(withInterceptorsFromDi())],
  bootstrap:[],
})
export class AppModule { }
