import { Component, Input, OnInit } from '@angular/core';
import { type } from '../../../models/type';

@Component({
  selector: 'ngx-detail-type',
  templateUrl: './detail-type.component.html',
  styleUrls: ['./detail-type.component.scss']
})
export class DetailTypeComponent implements OnInit {

  @Input() type : type;
  constructor() { }

  ngOnInit(): void {
  }

}
