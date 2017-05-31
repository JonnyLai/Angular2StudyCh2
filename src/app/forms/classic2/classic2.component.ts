import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from "@angular/forms";


function myValidFunction(control: AbstractControl) {
  if (control.value.indexOf('Jonny') === -1) {
    return {
      ErrorCode: 1,
      ErrorMsg: 'Must include "Jonny" '
    };
  } else {
    return null;
  }
}
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
        [Validators.required, Validators.minLength(3), myValidFunction]
      ],
      description: ['Hello',
        [Validators.required]
      ],
      addresses: this.fb.array(
        [
          this.fb.control('address1'),
          this.fb.control('address2')
        ]
      ),
      group1: this.fb.group({
        sample1: this.fb.control('sample 1'),
        sample2: this.fb.control('sample 2')
      })
    });
  }

  addSample() {
    const group1 = this.form.controls.group1 as FormGroup;
    group1.addControl('sample3', this.fb.control('sample 3'));
  }

  addNewAddress() {
    const addressObj = this.form.controls.addresses as FormArray;
    addressObj.push(this.fb.control('address' + (addressObj.controls.length + 1)));
  }
}

