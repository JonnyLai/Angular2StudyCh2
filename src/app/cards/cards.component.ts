import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

}
