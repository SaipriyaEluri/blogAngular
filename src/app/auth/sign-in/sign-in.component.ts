import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signInForm!:FormGroup;
  showOtp:boolean = false;
  otp:any;

  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;

  constructor(private authService:AuthService, private fb:FormBuilder, private router:Router){
    this.signInForm = this.fb.group({
        email:['',Validators.required],
        username: ['',Validators.required],
        password:['',Validators.required],
        mobileNumber:['',Validators.required]

    })
  }

  onSubmit(){
    if(this.signInForm.valid){
      this.authService.signIn(this.signInForm.value).subscribe((res) => {
        this.showOtp = true;
        console.log(res);
      })
    }
  }

  onOtpChange(otp:any) {
    this.otp = otp;
  }

  verifyOTP() {
    const obj = {
      otp: this.otp
    }
    this.authService.verifyOTP(obj).subscribe({
      next: (res: any) => {
        if (res && res.status) {
          // this.showOtp = false;
          this.router.navigate(['/dashboard'])
        } 
      }, error: (e: any) => {
      }
    })

    this.ngOtpInput.setValue('');
  }


  // inputText!:string;

  // onClick(){
  //    console.log(this.inputText);
  //   this.authService.dataTransferMethod(this.inputText);
  // }
}
