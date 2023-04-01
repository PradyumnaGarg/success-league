import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  constructor(private teamService: TeamService,
              private route: ActivatedRoute) {}
  team: any[] = [];
  member: any;

  ngOnInit(): void {
    this.team = this.teamService.team
    this.route.params.subscribe(({memberId}) => {
      if (memberId) {
        this.member = this.team.find((member) => member.id === memberId);
      }
    })
  }
}
