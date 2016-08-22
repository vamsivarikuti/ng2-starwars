import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
import { SwapiService } from '../shared';
import { Person } from './shared/';
import { SwapiResponse } from '../shared/swapi-response';

@Component({
  moduleId: module.id,
  selector: 'app-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  providers: [SwapiService],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    NgFor
  ]
})
export class PeopleComponent implements OnInit {
  people: Person[];
  data: SwapiResponse;
  private isLoading: boolean;
  private price;


  constructor(private api: SwapiService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.api.getPeople()
      .subscribe((data) => {
        this.setPeople(data);
      });
  }

  loadPeople() {
    if (this.data && this.data.next) {
      this.isLoading = true;
      this.api.getDataByUrl(this.data.next)
        .subscribe(data => {
          this.setPeople(data);
        });
    }
  }

  setPeople(data: SwapiResponse) {
    this.data = data;
    if (this.people && this.people.length) {
      this.people = this.people.concat(data.results);
    } else {
      this.people = this.data.results;
    }
    this.isLoading = false;
  }

}
