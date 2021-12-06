import { Component, OnInit } from '@angular/core';
import UserDTO from "../../../dto/userDTO";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-items',
  templateUrl: './sign-up-items.component.html',
  styleUrls: ['./sign-up-items.component.scss']
})
export class SignUpItemsComponent implements OnInit {

  signUpForm = new FormGroup({
    userName: new FormControl('', [Validators.minLength(3), Validators.required]),
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    MNumber: new FormControl('', [Validators.pattern('(0)[0-9]{9}'), Validators.required]),
    dob: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
    gender: new FormControl('', [Validators.required]),
    language: new FormControl('',[Validators.required]),
  });

  loading=false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  register() {
    this.loading=true;
    const date = new Date();
    const time = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds()

    const dto = new UserDTO(
      this.signUpForm.get('userName')?.value.toString().trim(),
      this.signUpForm.get('password')?.value.toString().trim(),
      this.signUpForm.get('name')?.value.toString().trim(),
      this.signUpForm.get('MNumber')?.value.toString().trim(),
      this.signUpForm.get('dbo')?.value.toString().trim(),
      this.signUpForm.get('gender')?.value.toString().trim(),
      this.signUpForm.get('language')?.value.toString().trim(),
    );

    this.userService.register(dto).subscribe(response => {
      this.loading=false;
      this.router.navigate(['/dashboard'])
      console.log(response);
    }, error => {
      this.loading=false;
      console.log(error);
    })
  }

}
