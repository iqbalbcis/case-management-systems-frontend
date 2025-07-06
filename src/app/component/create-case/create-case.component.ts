import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert/alert.service';
import { CaseServiceService } from 'src/app/service/case-services/case-service.service';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent implements OnInit {

  form: UntypedFormGroup;
  submitted: boolean = false;
  
    constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private caseService: CaseServiceService,
    private alertService: AlertService) { }
    
  ngOnInit(): void {
    this.form = this.formBuilder.group({

      title: ['', Validators.required],
      description: [''],
      status: ['', Validators.required],
      dueDateTime: ['', Validators.required]
      
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  createCaseDetails() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      this.alertService.error('Some required fields were missing or contain invalid data!!!', { keepAfterRouteChange: false });
      return;
    }

    this.caseService.createCaseDetails(this.form.value).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log(error);
          this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
      })
  }
}
