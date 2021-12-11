import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../../../shared/quote.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes-list-item',
  templateUrl: './quotes-list-item.component.html',
  styleUrls: ['./quotes-list-item.component.css']
})
export class QuotesListItemComponent {
  @Input() quote!: Quote;
  @Output() quotes = new EventEmitter<Quote[]>();

  constructor(
    public http: HttpClient,
    private router: Router,
  ) { }
  async delete() {
    await this.http.delete(`https://quotes-7fca7-default-rtdb.firebaseio.com/quotes/${this.quote.id}.json`)
      .subscribe()
    await this.http.get<{ [id: string]: Quote }>('https://quotes-7fca7-default-rtdb.firebaseio.com/quotes.json')
      .pipe(map(result => {
        return Object.keys(result).map(id => {
          const quoteDate = result[id];
          return new Quote(quoteDate.author, quoteDate.quoteText, quoteDate.category, id);
        });
      }))
      .subscribe(quotes => {
        this.quotes.emit(quotes);
      })
  }

  edit() {
    const id = this.quote.id;
    void this.router.navigate([`/quotes/${id}/edit`]);
  }

}
