import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public loginForm = this.formBuilder.group({
  userName: ['', Validators.required],
  password : ['', Validators.required]
});
  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService , private toastr: ToastrService,
              private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("onsubmit");
    let userName= this.loginForm.controls["userName"].value;
    let password= this.loginForm.controls["password"].value;
    this.authenticationService.login(userName,password).subscribe((data)=>{
      console.log("response",data);
      this.toastr.success('Sccess login', 'You have been  successfully login ');
      // on success navigate to job offers list
      this.router.navigate(['/Client-home']);
    })
  }
  //fromControlName="password"
}
