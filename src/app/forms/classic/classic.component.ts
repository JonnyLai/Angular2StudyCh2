import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  title = "Hello Jonny";
  description = "my description";
  constructor() { }

  ngOnInit() {
  }

}
