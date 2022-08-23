import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { couterSelector } from '../state/counter.selectors'
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter: number = 0;
  counterSubscription!: Subscription;
  counter$!: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.counterSubscription = this.store.select(couterSelector).subscribe( data => {
      console.log('counter working')
      this.counter = data;
    })
    this.counter$ = this.store.select(couterSelector)
  }

  ngOnDestroy(){
    this.counterSubscription && this.counterSubscription.unsubscribe();
  }

}
