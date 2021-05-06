import { Component, ContentChild, ContentChildren, EventEmitter, Inject, Input, OnInit, Output, SimpleChange, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
// import { EventEmitter } from 'events';

import { InjectionToken } from '@angular/core';

import {HERO_DI_CONFIG, SilentLogger} from './app.config'
import { HeroService } from '../hero.service';

export const APP_CONFIG = new InjectionToken<any>('app.config');

export const HTTP_SERVICE = new InjectionToken<any>('./http-service.service');

export const HERO_SERVICE = new InjectionToken<any>('tada');

const heroServiceFactory = () => {
  return new HeroService(false);
};

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
  // providers: [{ provide: HttpServiceService, useClass: HttpServiceService }],
  // providers: [{ provide: SilentLogger, useValue: SilentLogger }]
  // providers: [{provide: APP_CONFIG, useValue: HERO_DI_CONFIG}],
  // providers: [{provide: HTTP_SERVICE, useExisting: HttpServiceService}]
  // providers: [{provide: HTTP_SERVICE, useClass: HttpServiceService}]
  providers: [{provide: HERO_SERVICE, useFactory: heroServiceFactory}]
})
export class FirstComponentComponent implements OnInit {
  @ViewChildren("templateRef") contentChild;
  @Input() someData = ''
  @Input() templateAsArgument: TemplateRef<any>;
  @Output() dataToParent: EventEmitter<any> = new EventEmitter();

  private httpService;
  private heroService;
  constructor(
    // private httpService: HttpServiceService,
    // @Inject(SilentLogger) logger: any
    // @Inject(APP_CONFIG) config: any
    // @Inject(HTTP_SERVICE) httpService: HttpServiceService
    @Inject(HERO_SERVICE) heroService: HeroService
  ) {
    // console.log(logger);
    // console.log(config)
    // this.httpService = httpService;
    this.heroService=heroService;
    console.log(this.heroService.getHeroes());
   }

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

  printCount() {
    // console.log(this.httpService.returnCount());
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