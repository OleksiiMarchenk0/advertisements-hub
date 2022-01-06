import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { AddEditComponent } from './category/add-edit/add-edit.component';
import { ShowCategoryComponent } from './category/show-category/show-category.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffersComponent } from './offers/offers.component';
import { ShowOffersComponent } from './offers/show-offers/show-offers.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AddEditComponent,
    ShowCategoryComponent,
    OffersComponent,
    ShowOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
