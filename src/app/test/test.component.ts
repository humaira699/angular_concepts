import { DecimalPipe } from '@angular/common';
import { Component,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  //@Output()—a decorator function marking the property as a way for data to go from the child to the parent component
  // new EventEmitter<string>()—tells Angular to create a new event emitter and that the data it emits is of type string.  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  //The addNewItem() function uses the @Output(), newItemEvent, to raise an event with the value the user types into the <input>.
  dateToday= new Date().toDateString();
  name= "BumbleBee";
  number_= 0.2;
  constructor() { }
  ngOnInit(): void {
  }

}
