import { Component, OnInit } from '@angular/core';
import { profile } from 'src/data/mock.profile';
import { IProfile } from 'src/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: IProfile = profile;

  constructor() { }

  ngOnInit(): void {
  }

}
