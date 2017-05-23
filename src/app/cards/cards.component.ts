import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type = 0;
  constructor(private router: Router, private route:ActivatedRoute) { }
  ngOnInit() {
    // Seldom
    //this.type = this.route.snapshot['type'];
    //Usually
    this.route.params.subscribe((params)=>{
          this.type = params['type'];
    });
  }

}
