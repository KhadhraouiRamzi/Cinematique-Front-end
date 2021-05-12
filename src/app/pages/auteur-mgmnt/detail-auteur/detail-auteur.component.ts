import { Component, Input, OnInit } from '@angular/core';
import { auteur } from '../../../models/auteur';

@Component({
  selector: 'ngx-detail-auteur',
  templateUrl: './detail-auteur.component.html',
  styleUrls: ['./detail-auteur.component.scss']
})
export class DetailAuteurComponent implements OnInit {

  @Input()  auteur : auteur;
  constructor() { }

  ngOnInit(): void {
  }

}
