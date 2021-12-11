import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  author = '';
  quoteText = '';
  category = '';
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
   const body = { author: this.author, quoteText: this.quoteText, category: this.category };
   this.http.post('https://quotes-7fca7-default-rtdb.firebaseio.com/quotes.json', body)
     .subscribe()
  }

}
