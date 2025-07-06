import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/service/alert/alert.service';
import { CaseServiceService } from 'src/app/service/case-services/case-service.service';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'app-update-case',
  templateUrl: './update-case.component.html',
  styleUrls: ['./update-case.component.css']
})
export class UpdateCaseComponent implements OnInit {

  form: UntypedFormGroup;
  submitted: boolean = false;

  caseId: number;
  status: string;

  constructor(private router: Router,
    private formBuilder: UntypedFormBuilder,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private caseService: CaseServiceService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      caseId: [''],
      status: ['']
    })

    this.caseId = this.route.snapshot.params['caseId'];
    this.findCaseById();
  }

  get f() { return this.form.controls; }

  findCaseById() {
    
    this.alertService.clear();

    this.caseService.findCaseById(this.caseId).subscribe(
      data => {
        console.log(data)

        this.caseId = data.caseId;
        this.status = data.status;
      },
      error => {
        console.log(error);
        this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
      }
    )
  }

  updateCaseDetails() {
    this.submitted = true;
    this.alertService.clear();

    this.caseService.updateCase(this.caseId, this.status).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log(error);
        this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
      }
    )
  }
}
