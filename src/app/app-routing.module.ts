import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: 'feed', children: [
    { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: ':page', component: FeedComponent }
  ]},
  { path: 'news', component: FeedComponent },
  { path: 'show', component: FeedComponent },
  { path: 'ask', component: FeedComponent },
  { path: 'jobs', component: FeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
