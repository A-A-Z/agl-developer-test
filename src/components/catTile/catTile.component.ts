import { Component, Input } from '@angular/core';
import { IPet } from '../../models/ipet.model';

@Component({
  selector   : 'catTile',
  templateUrl: './catTile.component.html'
})
export class CatTileComponent  {
  @Input() cat:IPet;

  constructor () {}

}
