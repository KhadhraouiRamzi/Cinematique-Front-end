import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { type } from '../../../models/type';
import { TypeService } from '../../../utils/services/type.service';

@Component({
  selector: 'ngx-form-type',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.scss']
})
export class FormTypeComponent implements OnInit {

  imageSrc: string;
  registerForm: FormGroup;
  submitted = false;
  u: type = new type();

  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];

  constructor(private formBuilder: FormBuilder, private typeService: TypeService,private r : Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      niveau: ['', Validators.required],
      
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

    this.typeService.addType(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);

      this.u = new type();
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  Retour() {
    this.r.navigate(['/pages/list-type/']);
  }
}
