import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signInForm:FormGroup;
  router: any;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  createForm(){

    this.signInForm = this.fb.group({
    
      username:['',Validators.required], 
      password:['',Validators.compose([Validators.required])]
  
  
    });
  }

  onSubmit(){
    this.signInForm.value;
    alert("login successfully")
    this.router.navigate(['/home']);
  }
}
