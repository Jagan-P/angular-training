import { Component, ContentChild, ContentChildren, Input, OnInit, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  @ViewChildren("templateRef") contentChild;
  @Input() someData = ''

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