import { Component, OnInit } from '@angular/core';
import { CaseService } from '../../services/case-services/case-service';
import { UntypedFormGroup, UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-case',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-case.html',
  styleUrl: './update-case.css'
})
export class UpdateCase implements OnInit {

  form!: UntypedFormGroup;
  submitted: boolean = false;

  caseId!: number;
  status!: string;

  constructor(private router: Router,
    private formBuilder: UntypedFormBuilder,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private caseService: CaseService) { }

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

    this.caseService.findCaseById(this.caseId).subscribe({
      next: (data) => {
        this.caseId = data.caseId;
        this.status = data.status;
      },
      error: (err) => {
        console.error('Failed to load case:', err);
        this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
      }
    });
  }

  updateCaseDetails() {
    this.submitted = true;
    this.alertService.clear();
    
    this.caseService.updateCase(this.caseId, this.status).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Failed to update case:', err);
        this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
      }
    });
  }

}
