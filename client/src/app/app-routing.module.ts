import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { BookNewComponent } from './book-new/book-new.component';

const routes: Routes = [
  { path: '', component: BooksComponent},
  { path: 'books', component: BooksComponent},
  { path: 'book/:id', component: BookComponent},
  { path: 'author/new', component: AuthorNewComponent},
  { path: 'books/new', component: BookNewComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'author/:id', component: AuthorComponent },
  { path: 'user/:id', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
