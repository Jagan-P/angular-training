import { ChangeDetectionStrategy, ChangeDetectorRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Component, Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { FirstComponentComponent } from './first-component/first-component.component';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'first-project';

  @ViewChild("templateRef", {static: false}) appFirst: HTMLElement;
  // @ViewChildren("templateRef") viewChildren: QueryList<any>;

  items = [0,1,2];
  obje = [
    {id: 10, name: "zero"},
    {id: 11, name: "one"},
    {id: 12, name: "two"}
  ]

  inputValue = 'Afirst';
  hideParagraph = false;
  today: any = '';

  constructor(private changeDetRef: ChangeDetectorRef) {}

  ngOnInit() {
    
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

    }, 3000);

    setTimeout(() => {
      
      this.inputValue="second"
      
      // this.changeDetRef.markForCheck();
    }, 5000);
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
