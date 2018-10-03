import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-portal-home',
  templateUrl: './job-portal-home.component.html',
  styleUrls: ['./job-portal-home.component.css']
})
export class JobPortalHomeComponent implements OnInit {
  currentTab = 'vacancy-board'
  constructor() { }

  ngOnInit() {
  }

  setTab(newText) {
    this.currentTab = newText;
  }
}
