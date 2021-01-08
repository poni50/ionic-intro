import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  teams = [
    {
      year: 2020,
      name: 'Los Angeles Lakers',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
      players: [
        'LeBron James',
        'Anthony Davis',
        'Dwight Howard',
        'Danny Green',
        'Markieff Morris'
      ]
    },
    {
      year: 2019,
      name: 'Toronto Raptors',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/1200px-Toronto_Raptors_logo.svg.png',
      players: [
        'Kawhi Leonard',
        'Pascal Siekam',
        'Kyle Lowry',
        'Fred Vanvleet',
        'Serge Ibaka'
      ]
    },
    {
      year: 2018,
      name: 'Golden State Warriors',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png',
      players: [
        'Kevin Durant',
        'Stephen Curry',
        'Klay Thompson',
        'Draymond Green',
        'Andre Iguodala'
      ]
    }

  ];
  
  constructor() {}

}
