import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { HttpClientModule} from "@angular/common/http";
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputDirective } from './lib/au-fa-input/common/input.directive';



@NgModule({
  declarations: [
    AppComponent,
    AuFaInputComponent,
    InputDirective,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
