import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, changeText } from '../state/counter.actions';
import { textSelector } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {
  customValue!: number
  customText!: string
  constructor(private store:Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.store.select(textSelector).subscribe(data => {
      console.log('text working')
      this.customText = data
    }) 
  }

  changeTextVal() {
    this.store.dispatch(changeText())
  }

  onAdd(){
    this.store.dispatch(customIncrement({value: this.customValue}))
  }

}
