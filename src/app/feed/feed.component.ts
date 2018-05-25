import { Feed } from './../models/feed';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HackerNewsAPIService } from './../services/hacker-news-api.service';

import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hn-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit, OnDestroy {
  page: number;
  page$: Subscription;

  feed$: Observable<Feed[]>;

  constructor(
    private hn: HackerNewsAPIService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.page$ = this.route.paramMap.pipe(
      map((params: ParamMap) => +params.get('page'))
    ).subscribe(data => {
      this.page = !(isNaN(data)) ? data : 1;
      this.feed$ = this.hn.getFeed(`${this.page}`);
      this.hn.getFeed(`${this.page}`).subscribe(datas => {
        console.log(datas);
      });
    });
  }

  ngOnDestroy() {
    this.page$.unsubscribe();
  }

}
