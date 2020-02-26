import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePageService {
  public isOpen = new Subject<boolean>();

  public isHomePageOpened(value: boolean){
    this.isOpen.next(value);
  }
}
