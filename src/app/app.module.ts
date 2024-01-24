import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routingComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BookMenuComponent } from './components/book-menu/book-menu.component';
import { AuthorMenuComponent } from './components/author-menu/author-menu.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AddAuthorsComponent } from './components/add-authors/add-authors.component';
import { UpdateAuthorComponent } from './components/update-author/update-author.component';
import { DeleteBooksComponent } from './components/delete-books/delete-books.component'
import { MaterialsModule } from './materials/materials.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from './components/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookMenuComponent,
    AuthorMenuComponent,
    AddBooksComponent,
    AddAuthorsComponent,
    UpdateAuthorComponent,
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
