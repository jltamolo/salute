import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-event-demo',
  template: '<button (click) = "onShow()">Show</button>',
  styleUrls: ['./event-demo.component.css']

})

export class EventDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onShow(){
    alert('Show button clicked!');
   }
}