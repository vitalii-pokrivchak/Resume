import { Component, OnInit } from '@angular/core';
import { skills } from 'src/data/mock.skill';
import { ISkill } from 'src/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: ISkill[] = skills;

  constructor() { }

  ngOnInit(): void {
  }

}
