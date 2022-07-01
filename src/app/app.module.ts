import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductList } from 'src/productsList';
import { RoundoffPipe } from './pipe/roundoff.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertComponent } from './home/alert/alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from "@angular/cdk/overlay";
import { AngularSvgIconModule } from "angular-svg-icon";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductListComponent,
    RoundoffPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    OverlayModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [ProductList, MatSnackBar],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
