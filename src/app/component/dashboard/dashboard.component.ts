import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {

  }

  goToTheTop(){
    this.globalService.goToTop();
  }
}
