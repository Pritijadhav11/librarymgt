import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatCardModule, MatInputModule, MatTableModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,

    MatButtonModule,MatMenuModule,MatToolbarModule,MatCardModule,MatInputModule,
    MatTableModule
    
    
  ],
  exports:[
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,

    CommonModule,MatButtonModule,MatMenuModule,MatToolbarModule,MatFormFieldModule,MatCardModule,MatInputModule,
    MatTableModule
    
  ]
})
export class MarerialModule { }
