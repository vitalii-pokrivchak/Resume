import { Component, OnInit } from '@angular/core';
import { profile } from 'src/data/mock.profile';
import { IProfile } from 'src/models/profile';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent implements OnInit {

  profile: IProfile = profile;

  constructor() { }

  ngOnInit(): void {
  }

}
