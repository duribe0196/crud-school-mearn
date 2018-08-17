import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teachers } from './../models/teachers';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  teachers:Teachers[];
  API_TEACHERS  =  'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getTeachers(){
    return this.http.get<Teachers[]>(`${this.API_TEACHERS}/teachers`);
  }

  postTeacher(teacher:Teachers){
    return this.http.post(`${this.API_TEACHERS}/teachers`,teacher);
  }
  
  deleteTeacher(id:string){
    return this.http.delete(`${this.API_TEACHERS}/teachers/${id}`);
  }
}
