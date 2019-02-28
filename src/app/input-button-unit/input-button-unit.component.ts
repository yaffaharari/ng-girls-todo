import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input"
       #inputElementRef
       [value]="title"
       (keyup.enter)="submitValue($event.target.value)">
    <button class="btn"
      (click)="submitValue(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = "Hello World";
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  submitValue(newTitle: string) {
    // this.title = newTitle;
    this.submit.emit(newTitle);
    console.log(this.title);
  }

}
