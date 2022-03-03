import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder,AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  reactiveForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.reactiveForm = new FormGroup({
      name : new FormControl("",Validators.required),
      email : new FormControl("",[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      userName : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z](\s+\S+\s*)*(?!\s).*$/)]),
      password : new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmPassword : new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    },
    this.passwordMatchValidator
    // PasswordMatchValidatorDirective.mustMatch('password','confirmPassword')
    );
  }

  passwordMatchValidator(fg: AbstractControl){
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : {notmatched: true}
  }

  success='';
   submitted = false;

  submitReactiveForm(){
    console.log(this.reactiveForm)
     this.submitted = true;

     // stop here if form is invalid
     if (this.reactiveForm.invalid) {
       return;
     }

     this.success = JSON.stringify(this.reactiveForm.value);
  }

  get formControls(){
    return this.reactiveForm.controls
  }

  ngOnInit(): void {
  }

}
