import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { auteur } from '../../../models/auteur';
import { AuteurService } from '../../../utils/services/auteur.service';

@Component({
  selector: 'ngx-edit-auteur',
  templateUrl: './edit-auteur.component.html',
  styleUrls: ['./edit-auteur.component.scss']
})
export class EditAuteurComponent implements OnInit {

  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : auteur;
  auteur : auteur[] =[];
  constructor(private auteurService : AuteurService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.auteurService.getAuteurById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
         
     )

    }else {

    }
   
}
 
  update(u : auteur)
  {
 
    this.auteurService.editAuteur(u).subscribe(res =>
      {
        alert("Edit avec succès de auteur "+this.u.nom+" !");
        this.router.navigate(['/pages/list-auteur']);
        console.log('aa' || this.u);
         this.u=new auteur();

      });
  } 

 
  annuler() {
    this.router.navigate(['/pages/list-auteur/']);

  } 
}
