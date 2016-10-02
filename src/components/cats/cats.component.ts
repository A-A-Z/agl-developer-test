import { Component, Input } from '@angular/core';
import * as _ from "lodash";
import { IPerson } from '../../models/iperson.model.ts';
import { IGenders } from '../../models/igenders.models';
import { IPet } from '../../models/ipet.model';

@Component({
  selector   : 'cats',
  templateUrl: './cats.component.html'
})
export class CatsComponent  {
  @Input() personData:Array<IPerson>;
  cats: IGenders;

  constructor () {
    this.cats = { Male: [], Female: [] };
  }

  ngOnChanges(change): void {
    if ( this.personData ) this.formatCatData();
  }

  formatCatData(): void {
    for ( let i=0,n=this.personData.length; i<n; i++ ) {
      let person = this.personData[i],
        personsCats = _.filter(person.pets, { 'type': 'Cat' });

      switch( person.gender ) {
        case('Male'):
        case('Female'):
          this.addCats(person.gender,personsCats);
          break;

        default:
          // DOTO: add support for non-binary gender
      }
    }

    this.sortCats('Male');
    this.sortCats('Female');
  }

  addCats(personsGender:string, personsCats:Array<IPet>) {
    this.cats[personsGender] = _.concat(this.cats[personsGender], personsCats);
  }

  sortCats(personsGender:string) {
    this.cats[personsGender] = _.orderBy(this.cats[personsGender], ['name']);
  }
}
