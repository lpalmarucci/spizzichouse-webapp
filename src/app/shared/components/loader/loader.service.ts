import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderId$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  showLoader(){
    this.loaderId$.next(true)
  }

  hideLoader(){
    this.loaderId$.next(false)
  }
}
