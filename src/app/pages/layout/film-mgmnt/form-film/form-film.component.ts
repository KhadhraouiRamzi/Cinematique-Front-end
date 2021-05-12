import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { auteur } from '../../../../models/auteur';
import { films } from '../../../../models/films';
import { type } from '../../../../models/type';
import { AuteurService } from '../../../../utils/services/auteur.service';
import { FilmsService } from '../../../../utils/services/films.service';
import { TypeService } from '../../../../utils/services/type.service';

@Component({
  selector: 'ngx-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.scss']
})
export class FormFilmComponent implements OnInit {

  imageSrc: string;
  registerForm: FormGroup;
  submitted = false;
  u: films = new films();

  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];
  auteur: auteur[] = [];
  type: type[] = [];

  constructor(private auteurService : AuteurService,private typeService :TypeService,
    private formBuilder: FormBuilder, private filmsService: FilmsService,private r : Router) { }

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
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      releaseDate: ['', Validators.required],
      realisateur: ['', Validators.required],

      acceptTerms: [false, Validators.requiredTrue]
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;

    this.filmsService.addFilms(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);

      this.u = new films();
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  Retour() {
    this.r.navigate(['/pages/layout/list-Film/']);
  }
}
