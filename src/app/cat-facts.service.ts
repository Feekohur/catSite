import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatFact } from './CatFact';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {
  facts:CatFact[] = [];

  constructor(private http:HttpClient) { }

  getCatFacts(): CatFact[]{
    this.http.get<CatFact>('https://catfact.ninja/fact').subscribe(fact => {
      this.facts.push(fact);
      this.http.get<CatFact>('https://catfact.ninja/fact').subscribe(fact => {
        this.facts.push(fact);
        this.http.get<CatFact>('https://catfact.ninja/fact').subscribe(fact =>{
          this.facts.push(fact);
        })
      });
    })
    return this.facts;
  }
}
