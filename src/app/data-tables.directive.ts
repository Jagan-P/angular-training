import { Directive, ElementRef } from '@angular/core';
declare var $:any;

@Directive({
  selector: '[appDataTables]'
})
export class DataTablesDirective {

  constructor(
    private el: ElementRef
  ) { 

  }

  ngAfterViewInit() {
    console.log("appDataTables",$(this.el));
    $(this.el.nativeElement).DataTable();
  }

}
