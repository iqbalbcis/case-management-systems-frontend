import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert/alert.service';
import { CaseServiceService } from 'src/app/service/case-services/case-service.service';
import { GlobalService } from 'src/app/service/global/global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  caseList: Array<string>;

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private alertService: AlertService,
    private caseService: CaseServiceService) { }

  ngOnInit(): void {
    this.findAllCaseDetails();
  }

  findAllCaseDetails() {
    // reset alerts on submit
    this.alertService.clear();

    this.caseService.findAllCases().subscribe(
      data => {
        console.log(data);
        this.caseList = data;
      },
      error => {
        console.log(error);
        this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
      }
    )
  }

  viewCaseById(caseId: number) {
    this.router.navigate(['/view-case', caseId]);
  }

  updateCaseById(caseId: number) {
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
        this.caseService.deleteCaseDetails(caseId).subscribe(
          data => {
            console.log(data)
            this.findAllCaseDetails();
          },
          error => {
            console.log(error);
            this.globalService.goToTop();
            this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
          }
        )
      }
    })
  }

  goToTheTop() {
    this.globalService.goToTop();
  }
}
