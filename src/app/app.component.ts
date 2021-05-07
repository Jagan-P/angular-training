import { ChangeDetectionStrategy, ChangeDetectorRef, ComponentFactoryResolver, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Component, Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AdDirective, FirstComponentComponent } from './first-component/first-component.component';

declare var $:any;


/**
 * An interface for items
 */
 interface IItems {
  /* * Id of the item */
  id: number,
  name?: string
}

interface IData {
  pincode: number;
}

interface IExtendedItems extends IItems, IData {
  phone: number
}

abstract class Data {
  address: string = "ABC";
}

abstract class Item {
  latitude: number = 0;
}

class DEF extends Data {
  address = "DEF";

  constructor() {
    super();

    console.log("address",this.address);
  }
}

class ABC implements IData, IItems {
  phone = 0;
  id: number = 0;
  pincode: number = 0;  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title: string = 'first-project';

  @ViewChild("templateRef", {static: false}) appFirst: HTMLElement;
  // @ViewChildren("templateRef") viewChildren: QueryList<any>;

  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  @ViewChild("templateAsArgument", {static: false}) templateAsArgument: TemplateRef<any>;

  @ViewChild("template", {static: true}) template: FirstComponentComponent;
  
  

  studentItem: IExtendedItems = {
    id: 0,
    // name: 'abc',
    phone: 0,
    pincode: 0
  }

  items = [0,1,2];
  obje = [
    {id: 10, name: "zero"},
    {id: 11, name: "one"},
    {id: 12, name: "two"}
  ]

  inputValue = 'Afirst';
  hideParagraph = false;
  today: any = '';
  heroes: any[] = [
    {name:"abc", canFly: false},
    {name:"def", canFly: true},
    {name:"ghi", canFly: false}
  ];
  data: any;
  count=0;

  constructor(
    private changeDetRef: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver
    ) {
    this.data = new DEF();
    let abc = `Hello world ${this.count}`
    console.log(abc);
  }
  

  ngOnInit() {
    
    // this.template.dataToParent.subscribe((data)=>{
    //   console.log(data);
    // })

    setTimeout(() => {
      

      this.hideParagraph = true;
      
      // this.items[2]=10;
      this.items=[0,1,10];
      this.obje = [
        {id: 10, name: "zero"},
        {id: 11, name: "one"},
        {id: 12, name: "ten"},
        {id: 13, name: "ten"}
      ]
      // this.items = [...this.items];
      // this.changeDetRef.markForCheck();
      this.heroes.push({name: "yut", canFly: true});
      // this.heroes = [{name: 'abc', canFly: true}];
      this.heroes = [...this.heroes]
    }, 3000);

    setTimeout(() => {
      
      this.inputValue="second"
      
      // this.changeDetRef.markForCheck();
    }, 5000);
  }

  eventFromChild(dataFromChild) {
    console.log(dataFromChild)
  }

  trackByFn(arg, arg2) {
    console.log(arg, arg2);
    return arg2.id;
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterViewInit() {
    console.log(this.appFirst)

    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FirstComponentComponent);

    // const viewContainerRef = this.adHost.viewContainerRef;
    // // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent<FirstComponentComponent>(componentFactory);

    // this.appFirst.nativeElement.style.color = "red";
    // console.log(this.viewChildren);
    // this.viewChildren.changes.subscribe((data)=>{
    //   console.log(data);
    //   document.getElementById("span").style.color="green"
    // });
    // console.log("this.appFirst",this.appFirst)
  }
}

@Directive({ selector: '[appUnless]'})
export class UnlessDirective {

  @Input() set appUnless(jagan: boolean) {
    if (!jagan) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      // this.hasView = true;
    } else if (jagan) {
      this.viewContainer.clear();
      // this.hasView = false;
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { 
      // this.viewContainer.createEmbeddedView(this.templateRef);
      
      // console.log(this.templateRef)
    }
}
