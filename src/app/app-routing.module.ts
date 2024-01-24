import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { BookMenuComponent } from './components/book-menu/book-menu.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { DeleteBooksComponent } from './components/delete-books/delete-books.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/book-list', pathMatch: 'full'
  },
  {
    path: 'book-list', component: BooksListComponent
  },
  {
    path: "book-menu", component: BookMenuComponent,
    children: [
      { path: "add-books", component: AddBooksComponent },
      { path: "delete-books", component: DeleteBooksComponent }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  BookMenuComponent,
  AddBooksComponent,
  DeleteBooksComponent,
  BooksListComponent
]
