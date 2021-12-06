import {Injectable} from '@angular/core';
import UserDTO from "../dto/userDTO";
import LoginDTO from "../dto/loginDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public register(dto: UserDTO): Observable<any> {
    return this.http.post(this.baseURL+'/api/v1/service/register',{
      userName:dto.userName,
      password:dto.password,
      name:dto.name,
      mobile_number:dto.mobile_number,
      date_of_birth:dto.date_of_birth,
      gender:dto.gender,
      language:dto.language
    });
  }

  public login(dto: LoginDTO): Observable<any> {
    return this.http.post(this.baseURL+'/api/v1/service/login', {
      userName:dto.userName,
      password:dto.password
    })
  }

}
