import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})

export class GreetComponent implements OnInit {
  
  constructor() { }


  ngOnInit(): void {
  }
  name: string = "Hannah";

  greet(): void{
    alert("Hi" +" " + this.name);
  };
}