import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-greet',
  template: `
  User Name: <input type="text" [(ngModel)]="userName" ><br/>
    {{userName}}
    <br/>`,
    styleUrls: ['./greet.component.css']

})

export class GreetComponent implements OnInit {
  
  constructor() { }
  private _userName: string = "bill gates";

  get userName(): string {
    return this._userName;
  }
  set userName(val: string) {
    //do some extra work here
    this._userName = val;
  }

  ngOnInit(): void {
  }
  
}