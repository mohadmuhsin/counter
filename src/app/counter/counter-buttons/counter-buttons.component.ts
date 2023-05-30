import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor(  private store: Store<{counter:number}> ) {}
  ngOnInit(): void {}

  onIncrement() {
    // this.increment.emit();
    this.store.dispatch(increment())
  }
  onDecrement() {
    this.store.dispatch(decrement())
    // this.decrement.emit();
  }
  onReset() {
    this.store.dispatch(reset())
    // this.reset.emit();
  }
}
