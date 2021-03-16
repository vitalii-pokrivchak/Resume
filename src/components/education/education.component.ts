import { Component, OnInit } from '@angular/core';
import { education } from 'src/data/mock.education';
import { IEducation } from 'src/models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: IEducation = education;
  constructor() { }

  ngOnInit(): void {
  }

}
