import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { auteur } from '../../models/auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  baseUrl: string = "http://localhost:8082";

  constructor(private backend: HttpClient) { }

  getAuteur(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listAuteur");
  }

  getlistAuteur(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/auteur");
  }

  addAuteur(u: auteur) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-auteur", u);
  }

  editAuteur(u: auteur) {
    return this.backend.put(this.baseUrl + "/updateAuteur/", u);
  }

  editAuteur2(u: auteur) {
    return this.backend.put(this.baseUrl + "/updateAuteur", u);
  }

  detailAuteur(id) {
    return this.backend.get<auteur>(this.baseUrl + "/GetOneauteur/" + id);
  }
  deleteAuteur(id) {
    return this.backend.delete(this.baseUrl + "/deleteAuteur/" + id);
  }

  getAuteurById(id) {
    return this.backend.get<auteur>(this.baseUrl + "/auteur/by-id/" + id);
  }
}
