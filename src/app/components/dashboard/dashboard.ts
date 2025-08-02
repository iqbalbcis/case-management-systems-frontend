import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';
import { GlobalService } from '../../services/global/global.service';
import { CaseService } from '../../services/case-services/case-service';
import { CaseDetails } from '../../model/case-details';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  caseList: CaseDetails[] = [];

  constructor(
    private router: Router,
    public globalService: GlobalService,
    private alertService: AlertService,
    private caseService: CaseService) { }

  ngOnInit(): void {
    this.findAllCaseDetails();
  }

  findAllCaseDetails() {
    // reset alerts on submit
    this.alertService.clear();
    this.caseService.findAllCases().subscribe({
      next: (res) => {
        this.caseList = res;
      },
      error: (err) => {
        console.error('Failed to load cases:', err);
        this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
      }
    });
  }

  viewCaseById(caseId: number) {
    this.router.navigate(['/view-case', caseId]);
  }

  editCaseById(caseId: number) {
    this.router.navigate(['/update-case', caseId]);
  }

  deleteCaseById(caseId: number) {
    this.alertService.clear();
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this deleted record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.caseService.deleteCaseDetails(caseId).subscribe({
          next: (res) => {
            console.log(res)
            this.findAllCaseDetails();
          },
          error: (err) => {
            console.error('Failed to delete case details:', err);
            this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
          }
        });
      }
    })
  }

  goToTheTop() {
    this.globalService.goToTop();
  }
}
