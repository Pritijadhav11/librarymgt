import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,private studentService:StudentService) { }

  
 
  ngOnInit( ) {
    this.createForm();
  }

  createForm(){

  this.registerForm = this.fb.group({
    firstName: ['', Validators.required],
    middleName: ['', Validators.required],
    lastName: ['', Validators.required],
    email:['',Validators.compose([Validators.required,Validators.email])], 
    password:['',Validators.compose([Validators.required])]


  });
}

create(){
  /*
  this.studentService.registerStudent(this.registerForm.value)
  .subscribe(student=>{
    console.log(student);
    
    if(student){
      alert("registration is succesful")
    }else{
      alert("Registration is not succesful")
    }
  })
 // console.log(this.register1.value);
  */
 console.log(this.registerForm.value)
}
}
