import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input()
  channelName = "";

  @ContentChild('projectedContent') projectedContent: any;

  constructor() { console.log("Child Component Constrcutor"); }

  ngOnInit(): void {
    console.log("Child component OnInit()");
    console.log(' Child OnInit() -' + this.projectedContent);
  }

  ngDoCheck(): void {
    console.log("Child DoCheck() is called")
    console.log(' Child DoCheck() -' + this.projectedContent);
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("Child OnChanges() called");
    console.log(changes);
    console.log(' Child onChanges() -' + this.projectedContent);
  }

  ngAfterContentInit(): void {

    console.log('Child AfterContentInit() ');
    console.log('Child AfterContentInit() -' + this.projectedContent);

  }

  ngAfterContentChecked(): void {
    console.log('Child AfterContentChecked() called');
  }

}
