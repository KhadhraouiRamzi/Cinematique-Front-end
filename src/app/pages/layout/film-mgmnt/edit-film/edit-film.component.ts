import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { auteur } from '../../../../models/auteur';
import { films } from '../../../../models/films';
import { type } from '../../../../models/type';
import { AuteurService } from '../../../../utils/services/auteur.service';
import { FilmsService } from '../../../../utils/services/films.service';
import { TypeService } from '../../../../utils/services/type.service';

@Component({
  selector: 'ngx-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {


  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : films;
  films : films[] =[];
  auteur: auteur[] = [];
  type: type[] = [];
  
  constructor(private auteurService : AuteurService,private typeService :TypeService,
    private filmsService : FilmsService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.auteurService.getlistAuteur().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.auteur = res;
        console.log(res);

      });

      this.typeService.getlistType().subscribe(
        res => {
          // Swal.fire('This is a simple and sweet alert')
          console.log(res);
          this.type = res;
          console.log(res);
  
        });
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.filmsService.getFilmsById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
         
     )

    }else {

    }
  
   
}
 
  update(u : films)
  {
 
    this.filmsService.editFilms(u).subscribe(res =>
      {
        alert("Edit avec succès de film "+this.u.title+" !");
        this.router.navigate(['/pages/layout/list-Film']);
        console.log('aa' || this.u);
         this.u=new films();

      });
  } 

 
  annuler() {
    this.router.navigate(['/pages/layout/list-Film/']);

  } 
}
