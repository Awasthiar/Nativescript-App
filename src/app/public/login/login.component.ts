import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'; 
import {Router} from '@angular/router'; 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ApisService } from './../../services/apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private apiservice: ApisService,  private router : Router) { }

  loginform= this.fb.group({
    email : ['',Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
    password : ['',Validators.compose([Validators.required,Validators.minLength(6)])],
  
  })


 onLogin = function(user) {
    
    this.apiservice.login(this.loginform.value).subscribe(data =>{
    this.userdata = data;
    console.log(this.userdata);
    console.log(this.userdata.status);
    
   if(this.userdata.status == 200){
        require( "nativescript-localstorage" );
        localStorage.setItem('accessToken', this.userdata.body.access_token);
        console.log('valid user');
        this.router.navigate(['/private/teamRevenue']);

      }
      else 
    
      { 
        console.log(this.userdata.message);
        alert('Session expired. Please login again');
      }
     });

   }
 
  ngOnInit(){}
    

}
