import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import ProgramDTO from "../dto/programDTO";
import {Observable} from "rxjs/index";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) {}


  getUserToken(){
    let userToken = this.cookieService.get("userToken");

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: userToken
      })
    };
    return httpOptions;
  }


  public createProgram(dto: ProgramDTO): Observable<any>{

    let options= this.getUserToken();

    return this.http.post(this.baseURL+ '/api/v1/content/programs/create',{
      id:dto.id,
      name:dto.name,
      description:dto.description,
      start_date:dto.startDate,
      end_date:dto.endDate
    },options);
  }


  public updateProgram(dto: ProgramDTO): Observable<any>{

    let options= this.getUserToken();

    return this.http.post(this.baseURL+ '/api/v1/content/programs/update' ,{
      id:dto.id,
      name:dto.name,
      description:dto.description,
      start_date:dto.startDate,
      end_date:dto.endDate
    },options);
  }

 }
