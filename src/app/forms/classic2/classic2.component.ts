import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {

  title = "Hello Jonny";
  description = "my description";
  //資料模型 data Model
  data: any = {
    title:'',
    description:[]
  };
  list = [1, 2];
  constructor() { }

  ngOnInit() {
  }

  doSubmit(f: NgForm) {
    console.log(f.value);
  }

  addNew() {
    this.list.push(0);
  }
}

