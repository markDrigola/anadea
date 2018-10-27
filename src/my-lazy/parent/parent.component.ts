import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  ids = [
    1, 2, 3, 4, 5
  ];

  constructor() { }

  ngOnInit() {
  }

}
