import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpForm!:FormGroup;
  enteredText!:string;

  constructor(private authService:AuthService, private fb:FormBuilder, private router:Router){
    this.signUpForm = this.fb.group({
        email:['',Validators.required],
        username: ['',Validators.required],
        password:['',Validators.required],
        mobileNumber:['',Validators.required],
        role:['',Validators.required]

    })
  }
  ngOnInit(){
    // this.service.sendingData.subscribe((value) => {
    //   this.enteredText = value;
    // })
  }

   
  onSubmit(){
   this.authService.signUp(this.signUpForm.value).subscribe((res) => {
     console.log(res);
     if(res){
      this.router.navigate(['/auth/signIn'])
     }
   })

  }
  

}
