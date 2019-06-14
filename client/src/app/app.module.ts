import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatChipsModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenresComponent } from './genres/genres.component';
import { RegisterComponent } from './register/register.component';
import { LibraryNavComponent } from './library-nav/library-nav.component';
import { LoginComponent } from './login/login.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { TokenInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    RegisterComponent,
    LibraryNavComponent,
    LoginComponent,
    AuthorsComponent,
    AuthorComponent,
    AuthorNewComponent,
    BooksComponent,
    BookComponent,
    UserComponent,
    BookNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatGridListModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [
    ApiService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
