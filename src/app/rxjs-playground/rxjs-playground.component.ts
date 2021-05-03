import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.scss']
})
export class RxjsPlaygroundComponent implements OnInit {

  behaviorSubjectSubs: Subscription;
  unSubscribe: Subject<any> = new Subject();
  constructor() { }

  ngOnInit() {

    // const subject = new Subject<number>();

    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

    // subject.next(1);
    // subject.next(2);

    // 0 => 1

    const behaviorSubject = new BehaviorSubject<number>(0);

    
    
    // this.behaviorSubjectSubs = behaviorSubject.subscribe((data)=>{
    //   console.log(data);
    // })

    behaviorSubject.pipe(takeUntil(this.unSubscribe)).subscribe((data)=>{
      console.log(data);
    })

    behaviorSubject.pipe(take(3)).subscribe((data)=>{
      console.log(data);
    })

    behaviorSubject.next(1);
    behaviorSubject.next(2);


    // const replaySubject  = new ReplaySubject<number>();

    // replaySubject.next(1);
    // replaySubject.next(2);

    // replaySubject.subscribe((data)=>{
    //   console.log(data);
    // })

    // const locations = new Observable((observer) => {
    //   if(true) {
    //     observer.next("position");
    //   }
    //   else {
    //     observer.error('Geolocation not available');
    //   }
    // });

    // // Call subscribe() to start listening for updates.
    // const locationsSubscription = locations.subscribe({
    //   next(position) {
    //     console.log('Current Position: ', position);
    //   },
    //   error(msg) {
    //     console.log('Error Getting Location: ', msg);
    //   }
    // });

    // const locationsSubscription1 = locations.subscribe({
    //   next(position) {
    //     console.log('Current Position: ', position);
    //   },
    //   error(msg) {
    //     console.log('Error Getting Location: ', msg);
    //   }
    // });

    // // Stop listening for location after 10 seconds
    // setTimeout(() => {
    //   locationsSubscription.unsubscribe();
    // }, 10000);
  }
  ngOnDestroy() {
    // this.behaviorSubjectSubs.unsubscribe();
    //   // this.behaviorSubjectSubs.
    // this.unSubscribe.next();
  }

}
