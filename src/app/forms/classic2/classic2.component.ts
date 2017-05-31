import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {
  data: any = {
    title: 'Jonny',
    description: 'Hello'
  };
  form: FormGroup;
  constructor(private fb: FormBuilder) { }
  //Reactive Form
  ngOnInit() {
    this.form = this.fb.group({
      title: ['Jonny',
        [Validators.required, Validators.minLength(3)]
      ],
      description: ['Hello',
        [Validators.required]
      ],
      addresses: this.fb.group({
        address1: 'address1',
        address2: 'address2'
      })
    });
  }
}

