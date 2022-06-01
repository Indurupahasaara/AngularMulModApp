import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

<<<<<<< HEAD
  siginForm!:FormGroup;
  constructor(private fb: FormBuilder) { 
   }

  ngOnInit(): void {
    this.initform
  }
  initform(): void{
    this.siginForm = this.fb.group({
      username: [''],
      password: [''],   
    });
=======
  signingForm!: FormGroup;

  onSubuit : boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initFrom();
>>>>>>> 1be47a1f3c4ed45835a064c727120e573dc94fce
  }

  initFrom() : void {
    this.signingForm = this.fb.group({
      username: [''],
      password: [''],

    });
  }
}
