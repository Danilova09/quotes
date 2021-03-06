import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuotesListComponent } from './quotes/quotes-list/quotes-list.component';
import { EditComponent } from './edit/edit.component'

const routes: Routes = [
  {path: '', component: QuotesComponent, children: [
      {path: '', component: QuotesListComponent},
      {path: 'quotes/:category', component: QuotesListComponent},
      {path: 'quotes/:id/edit', component: EditComponent},
    ]},
  {path: 'new-quote', component: NewQuoteComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

