import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pics = [
    "https://picsum.photos/id/237/200",
    "https://picsum.photos/id/5/200",
    "https://picsum.photos/id/25/200",
    "https://picsum.photos/id/30/200",
    "https://picsum.photos/id/110/200",
    "https://picsum.photos/id/15/200",
  ]
  
  constructor() {}

}
