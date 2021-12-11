import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../../shared/quote.model';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const category = this.router.snapshot.params['category'];
      if (category === 'all' || this.route.url === '/') {
        console.log(this.route.url);
        this.http.get<{ [id: string]: Quote }>('https://quotes-7fca7-default-rtdb.firebaseio.com/quotes.json')
          .pipe(map(result => {
            return Object.keys(result).map(id => {
              const quoteDate = result[id];
              return new Quote(quoteDate.author, quoteDate.quoteText, quoteDate.category, id);
            });
          }))
          .subscribe(quotes => {
            this.quotes = quotes;
          })
      } else {
          this.http.get<{[id: string]: Quote}>(`https://quotes-7fca7-default-rtdb.firebaseio.com/quotes.json?orderBy=%22category%22&equalTo=%22${category}%22`)
            .pipe(map(result => {
              return Object.keys(result).map(id => {
                const quoteDate = result[id];
                return  new Quote(quoteDate.author, quoteDate.quoteText, quoteDate.category, id);
              });
            }))
            .subscribe(quotes => {
              this.quotes = quotes;
              console.log(this.quotes);
            })
      }
    })
  }

  changedQuotes(quotes: Quote[]) {
    this.quotes = quotes;
  }

}
