import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { type } from '../../../models/type';
import { TypeService } from '../../../utils/services/type.service';

@Component({
  selector: 'ngx-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.scss']
})
export class EditTypeComponent implements OnInit {


  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : type;
  type : type[] =[];
  constructor(private typeService : TypeService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.typeService.getTypeById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
         
     )

    }else {

    }
   
}
 
  update(u : type)
  {
 
    this.typeService.editType(u).subscribe(res =>
      {
        alert("Edit avec succès de type "+this.u.nom+" !");
        this.router.navigate(['/pages/list-type']);
        console.log('aa' || this.u);
         this.u=new type();

      });
  } 

 
  annuler() {
    this.router.navigate(['/pages/list-type/']);

  } 
}
