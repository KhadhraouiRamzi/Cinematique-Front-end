import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { films } from '../../../../models/films';

@Component({
  selector: 'ngx-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {
  @Input() films : films;

  constructor() { }

  ngOnInit(): void {
  }

}
