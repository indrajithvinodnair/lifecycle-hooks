import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  channelName = "";

  constructor() { console.log("Parent Constructor"); }

  ngOnInit(): void {

    console.log("Parent OnInit()");
  }

  ngDoCheck(): void {
    console.log("Parent DoCheck() is called")
  }

  ngOnChanges(): void {
    console.log("Parent OnChanges() called");
  }
}
