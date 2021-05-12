import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type } from '../../models/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  baseUrl: string = "http://localhost:8082";

  constructor(private backend: HttpClient) { }

  getType(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listType");
  }

  getlistType(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/type");
  }

  addType(u: type) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-type", u);
  }

  editType(u: type) {
    return this.backend.put(this.baseUrl + "/updateType/", u);
  }

  editType2(u: type) {
    return this.backend.put(this.baseUrl + "/updateType", u);
  }

  detailType(id) {
    return this.backend.get<type>(this.baseUrl + "/GetOnetype/" + id);
  }
  deleteType(id) {
    return this.backend.delete(this.baseUrl + "/deleteType/" + id);
  }

  getTypeById(id) {
    return this.backend.get<type>(this.baseUrl + "/type/by-id/" + id);
  }
}
