import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuotesListItemComponent } from './quotes/quotes-list/quotes-list-item/quotes-list-item.component';
import { QuotesListComponent } from './quotes/quotes-list/quotes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuotesComponent,
    NewQuoteComponent,
    QuotesListItemComponent,
    QuotesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
