import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { auteur } from '../../../models/auteur';
import { AuteurService } from '../../../utils/services/auteur.service';

@Component({
  selector: 'ngx-form-auteur',
  templateUrl: './form-auteur.component.html',
  styleUrls: ['./form-auteur.component.scss']
})
export class FormAuteurComponent implements OnInit {


  imageSrc: string;
  registerForm: FormGroup;
  submitted = false;
  u: auteur = new auteur();

  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];

  constructor(private formBuilder: FormBuilder, private auteurService: AuteurService,private r : Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],

      
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

    this.auteurService.addAuteur(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);

      this.u = new auteur();
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  Retour() {
    this.r.navigate(['/pages/list-auteur/']);
  }
}
