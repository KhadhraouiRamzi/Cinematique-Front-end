import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { films } from '../../models/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {


  baseUrl: string = "http://localhost:8082";

  constructor(private backend: HttpClient) { }

  getFilms(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listFilms");
  }

  getlistFilms(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/films");
  }

  addFilms(u: films) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-films", u);
  }

  editFilms(u: films) {
    return this.backend.put(this.baseUrl + "/updateFilms/", u);
  }

  editFilms2(u: films) {
    return this.backend.put(this.baseUrl + "/updateFilms", u);
  }

  detailFilms(id) {
    return this.backend.get<films>(this.baseUrl + "/GetOnefilms/" + id);
  }
  deleteFilms(id) {
    return this.backend.delete(this.baseUrl + "/deleteFilms/" + id);
  }

  getFilmsById(id) {
    return this.backend.get<films>(this.baseUrl + "/films/by-id/" + id);
  }
}
