import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CaseService } from '../../services/case-services/case-service';

@Component({
  selector: 'app-create-case',
  imports: [CommonModule, ReactiveFormsModule, BsDatepickerModule],
  templateUrl: './create-case.html',
  styleUrl: './create-case.css'
})
export class CreateCase implements OnInit {

  form!: UntypedFormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private alertService: AlertService, 
    private caseService: CaseService
  ) { }

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

    this.caseService.createCaseDetails(this.form.value).subscribe({
      next: (res) => {
        console.log('Saved successfully', res);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Save failed', err);
        this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
      }
    });

  }
}
