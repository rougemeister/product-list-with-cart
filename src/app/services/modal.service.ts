import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalVisibility = new Subject<boolean>();

  modalVisibility$ = this.modalVisibility.asObservable();

  open() {
    this.modalVisibility.next(true);
  }

  close() {
    this.modalVisibility.next(false);
    setTimeout(()=>{
      window.location.reload()
    },0)
  }
}
