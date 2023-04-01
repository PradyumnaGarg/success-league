import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor (private teamService: TeamService) {}
  team: any[] = []

  ngOnInit(): void {
    this.team = this.teamService.team;
  }
}
