import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrls: ['./exp-obs.component.css'],
})
export class ExpObsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
  mySubscription: Subscription;
  ngOnInit(): void {
    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        // if (count > 3) {
        //   observer.error('COUNT ERROR');
        // }
        count++;
      }, 1000);
    });

    // const customObservable = new Observable((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('first package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('second package');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.error('An error was occured');
    //   }, 5000);
    //   setTimeout(() => {
    //     observer.next('third package');
    //   }, 6000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 8000);
    // });

    this.mySubscription = customObservable.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Flux Terminé');
      },
    });
  }
}
