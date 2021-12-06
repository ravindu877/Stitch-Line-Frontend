import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProgramService} from "../auth/services/program.service";
import UserDTO from "../auth/dto/userDTO";
import ProgramDTO from "../auth/dto/programDTO";


export interface ProgramsData {
  id: string;
  name: String;
  description: String;
  startDate: String;
  endDate: string;
}


const ELEMENT_DATA: ProgramsData[] = [
  {id: 'Poo1', name: 'GDSE', description: 'Software engineering', startDate: '2021-05-23', endDate: '2023-05-23'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  displayedColumns: string[] = ['id', 'name', 'description', 'startDate', 'endDate'];
  dataSource = ELEMENT_DATA;

  constructor(private programService: ProgramService) { }


  createProgramForm= new FormGroup({
    pro_id: new FormControl('', [Validators.minLength(3), Validators.required]),
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    description: new FormControl('', [Validators.minLength(3), Validators.required]),
    start_date: new FormControl('', [ Validators.required]),
    end_date: new FormControl('', [ Validators.required]),
  });


  updateProgramForm= new FormGroup({
    pro_id: new FormControl('', [Validators.minLength(3), Validators.required]),
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    description: new FormControl('', [Validators.minLength(3), Validators.required]),
    start_date: new FormControl('', [ Validators.required]),
    end_date: new FormControl('', [ Validators.required]),
  });

  ngOnInit(): void {
  }

  createProgram(){

    const dto = new ProgramDTO(
      this.createProgramForm.get('pro_id')?.value.toString().trim(),
      this.createProgramForm.get('name')?.value.toString().trim(),
      this.createProgramForm.get('description')?.value.toString().trim(),
      this.createProgramForm.get('start_date')?.value.toString().trim(),
      this.createProgramForm.get('end_date')?.value.toString().trim(),
    );

    this.programService.createProgram(dto).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })

  }


  updateProgram(){
    const dto = new ProgramDTO(
      this.updateProgramForm.get('pro_id')?.value.toString().trim(),
      this.updateProgramForm.get('name')?.value.toString().trim(),
      this.updateProgramForm.get('description')?.value.toString().trim(),
      this.updateProgramForm.get('start_date')?.value.toString().trim(),
      this.updateProgramForm.get('end_date')?.value.toString().trim(),
    );

    console.log(dto)
    this.programService.updateProgram(dto).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }



}
