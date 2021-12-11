import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div class="alert alert-danger container">Page is not found!</div>`,
  styles: [`
    .alert {
      color: red;
      margin-top: 70px;
    }
  `]
})
export class NotFoundComponent {}
