import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { films } from '../../../../models/films';
import { FilmsService } from '../../../../utils/services/films.service';

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
  constructor(private filmsService : FilmsService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
