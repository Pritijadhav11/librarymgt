import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  message: string;
  constructor(private formBuilder:FormBuilder,
    private studentser:StudentService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rollNo: ['', Validators.required],
        gender: ['', Validators.required],

    });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

register(){
  
  this.studentser.registerStudent(this.registerForm.value)
  .subscribe(student=>{
    console.log(student);
    
    if(student){
      alert("registration is succesful")
    }else{
      alert("could not reg")
    }
  },
  err=>{
    console.log("student err:"+JSON.stringify(err));
    alert("Could not register!Server problem!Try later")
  })
  
 console.log(this.registerForm.value)
}

}