import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  title = "Hello Jonny";
  description = "my description";
  //資料模型 data Model
  data: any = {};
  constructor() { }

  ngOnInit() {
  }

  doSubmit(f: NgForm) {
    console.log(f.value);
  }

}
