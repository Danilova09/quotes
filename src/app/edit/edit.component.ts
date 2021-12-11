import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../shared/quote.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author = '';
  quoteText = '';
  category = '';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const id = this.router.snapshot.params['id'];
      this.http.get<Quote>(`https://quotes-7fca7-default-rtdb.firebaseio.com/quotes/${id}.json`)
        .subscribe(result => {
          this.author = result.author;
          this.quoteText = result.quoteText;
          this.category = result.category;
        })
    })
  }

  onEdit() {
    this.router.params.subscribe((params: Params) => {
      const id = this.router.snapshot.params['id'];
      const body = {author: this.author, quoteText: this.quoteText, category: this.category};
      this.http.put(`https://quotes-7fca7-default-rtdb.firebaseio.com/quotes/${id}.json`, body)
        .subscribe();
    })
  }

}
