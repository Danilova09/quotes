import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../../shared/quote.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  quotes: Quote[] = [];
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<{[id: string]: Quote}>('https://quotes-7fca7-default-rtdb.firebaseio.com/quotes.json')
      .pipe(map(result => {
        return Object.keys(result).map(id => {
          const quoteDate = result[id];
          return  new Quote(quoteDate.author, quoteDate.quoteText, quoteDate.category, id);
        });
      }))
      .subscribe(quotes => {
        this.quotes = quotes;
      })
  }

  changedQuotes(quotes: Quote[]) {
    this.quotes = quotes;
  }
}
