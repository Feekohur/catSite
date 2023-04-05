import { Component, OnInit } from '@angular/core';
import { CatFact } from '../CatFact';
import { CatFactsService } from '../cat-facts.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  facts:CatFact[] = [];

  constructor(private catFacts:CatFactsService) { }

  ngOnInit(): void {
    this.facts = this.catFacts.getCatFacts();
  }

}
