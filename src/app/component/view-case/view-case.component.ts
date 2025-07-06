import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/service/alert/alert.service';
import { CaseServiceService } from 'src/app/service/case-services/case-service.service';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'app-view-case',
  templateUrl: './view-case.component.html',
  styleUrls: ['./view-case.component.css']
})
export class ViewCaseComponent implements OnInit {

  form: UntypedFormGroup;
  submitted: boolean = false;

  caseId: number;
  title: string;
  description: string;
  status: string;
  dueDateTime: Date;

  constructor(private router: Router,
    private formBuilder: UntypedFormBuilder,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private caseService: CaseServiceService) { }
    
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

    this.caseService.findCaseById(this.caseId).subscribe(
        data => {
          console.log(data)
          
          this.caseId = data.caseId;
          this.title = data.title;
          this.description = data.description;
          this.status = data.status;
          this.dueDateTime = this.globalService.convertArrayToDate(data.dueDateTime);
        },
        error => {
          console.log(error);
          this.alertService.error('Some error has occured!!!', { keepAfterRouteChange: false });
        }
      )
  }
  goToDashBoard() {
    this.globalService.goToDashBoard();
  }
}
