import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/students/services/student.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signForm:FormGroup;

  message: string;
  token:string;
  
  constructor(private fb:FormBuilder,private studentser:StudentService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){

    this.signForm = this.fb.group({
    
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(45)])],
      password:['',Validators.compose([Validators.required])]
  
  
    });
  }



  studentSignin() {
    
    console.log("called signin");
    this.studentser.studentSignin(this.signForm.value).subscribe(
      function(studData: HttpResponse<any>){
       console.log(studData.body);
       console.log(studData.headers.get('X-token'));
       
       sessionStorage.setItem('token',studData.headers.get('X-token'));
      
        //this.router.navigate(['student/register']);
      },
      err => {
      this.message = "could not signin"; console.log(err);
      },
      ()=>{
        alert("Login successfully");
      }
      
      );

   console.log(this.signForm.value);

  }
  get f() {
    return this.signForm.controls;
  }
}
