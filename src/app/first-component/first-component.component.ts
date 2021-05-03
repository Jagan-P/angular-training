import { Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, SimpleChange, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  @ViewChildren("templateRef") contentChild;
  @Input() someData = ''
  @Input() templateAsArgument: TemplateRef<any>;
  @Output() dataToParent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChange) {
    console.log("first component ngOnChanges", changes)
  }

  ngAfterViewInit() {
    console.log("this.contentChild",this.contentChild)
    // this.contentChild._results[1].nativeElement.style.color = "yellow"
  }

  ngOnInit() {
    console.log("first component ngOnInit")
    this.dataToParent.emit("data from child");
  }

}


@Pipe({name: 'replaceAWithCustomString'})
export class ReplaceAWith0 implements PipeTransform {
  transform(value: string, replaceWith: string): string {
    console.log(value);
    return value.replace("A",replaceWith);
  }
}

@Pipe({name: 'flyingHeroes', pure: false})
export class FlyingHeroes implements PipeTransform {
  transform(allHeroes: any[]) {
    console.log("allHeroes",allHeroes);
    return allHeroes.filter(hero => hero.canFly);
  }
}

@Directive({
  selector: '[adHost]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}