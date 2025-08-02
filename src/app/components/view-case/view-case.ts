import { Component, OnInit } from '@angular/core';
import { CaseService } from '../../services/case-services/case-service';
import { UntypedFormGroup, UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';
import { GlobalService } from '../../services/global/global.service';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-view-case',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, BsDatepickerModule],
  templateUrl: './view-case.html',
  styleUrl: './view-case.css'
})
export class ViewCase implements OnInit {

  form!: UntypedFormGroup;
  submitted: boolean = false;

  caseId!: number;
  title!: string;
  description!: string;
  status!: string;
  dueDateTime!: Date;

  constructor(private router: Router,
    private formBuilder: UntypedFormBuilder,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private caseService: CaseService) { }
    
  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      caseId: [''],
      title: [''],
      description: [''],
      status: [''],
      dueDateTime: ['']
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
          this.title = data.title;
          this.description = data.description;
          this.status = data.status;
          this.dueDateTime = this.globalService.convertArrayToDate(data.dueDateTime);
      },
      error: (err) => {
        console.error('Failed to load case:', err);
        this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
      }
    });
  }

  goToDashBoard() {
    this.globalService.goToDashBoard();
  }
}
