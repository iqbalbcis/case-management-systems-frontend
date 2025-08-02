import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private router: Router) { }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  convertArrayToDate(arr: any): Date {
    if(arr.length === 6) {
      return new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    }
    return new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5], Math.floor(arr[6] / 1_000_000));
  }

  goToDashBoard() {
    this.router.navigate(['/dashboard']);
  }

}
