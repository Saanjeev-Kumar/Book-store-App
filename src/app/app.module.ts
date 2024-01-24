import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routingComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BookMenuComponent } from './components/book-menu/book-menu.component';

import { AddBooksComponent } from './components/add-books/add-books.component';

import { DeleteBooksComponent } from './components/delete-books/delete-books.component'
import { MaterialsModule } from './materials/materials.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from './components/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookMenuComponent,

    AddBooksComponent,

    DeleteBooksComponent,
    routingComponents,
    BooksListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
