import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {CookieService} from "ngx-cookie";
import UserDTO from "../../../dto/userDTO";
import LoginDTO from "../../../dto/loginDTO";

@Component({
  selector: 'app-login-items',
  templateUrl: './login-items.component.html',
  styleUrls: ['./login-items.component.scss']
})
export class LoginItemsComponent implements OnInit {

  loginForm= new FormGroup({
    username: new FormControl('', [Validators.minLength(3), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  });

  constructor(private cookieService: CookieService,private userService: UserService) { }

  ngOnInit(): void {
  }


  login(){
    const dto= new LoginDTO(
      this.loginForm.get('username')?.value.toString().trim(),
      this.loginForm.get('password')?.value.toString().trim(),
    );

    this.userService.login(dto).subscribe(response => {

      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate()+1);

      const cookieOption = {
        expires: tomorrow
      };

      this.cookieService.put('userToken', response.userToken, cookieOption);

    }, error => {
      console.log(error);
    });

  }




}
