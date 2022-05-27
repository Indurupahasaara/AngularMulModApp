import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  siginForm!:FormGroup;
  constructor(private fb: FormBuilder) { 
   }

  ngOnInit(): void {
    this.siginForm = this.fb.group({
      username: [''],
      password: [''],   
    });
  }

}
