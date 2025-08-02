import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerServiceService } from '../../services/spinner/spinner-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  imports: [CommonModule],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css'
})
export class Spinner implements OnInit {

  showSpinner = false;

  constructor(
    private spinnerService: SpinnerServiceService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.init();
  }

  init() {

    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });
  }
}
