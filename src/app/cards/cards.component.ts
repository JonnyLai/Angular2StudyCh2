import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockComponent } from "app/block/block.component";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type: string = '';
  key1 = '';
  key2 = '';
  pkey1 = '';
  pkey2 = '';

  @ViewChild('block1')
  block1: BlockComponent;

  @ViewChild(BlockComponent)
  block2: BlockComponent;

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log(localStorage.getItem('account'));
    console.log(localStorage.getItem('pw'));
  }
  ngOnInit() {
    // Seldom
    //this.type = this.route.snapshot['type'];
    //Usually
    this.route.params.subscribe((params) => {
      this.type = params['type'];
      this.key1 = params['key1'];
      this.key2 = params['key1'];
    });


    this.route.queryParams.subscribe((params) => {
      this.pkey1 = params['pkey1'];
      this.pkey2 = params['pkey2'];

    });
  }

  goCardsAddOne(num) {
    let newVal = parseInt(this.type, 10) + num;
    this.router.navigate(['/cards', newVal]);
  }

  ngAfterViewInit() {
    // this.block1.title='Hello Jonny';
    this.block2.title='Hello Jonny2';

  }

}
