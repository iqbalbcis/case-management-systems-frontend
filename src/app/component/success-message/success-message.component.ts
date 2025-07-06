import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {

  concatedMessage: string = '';
  fileRef: string = '';
  fileFolderName: string = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  
  }
}
