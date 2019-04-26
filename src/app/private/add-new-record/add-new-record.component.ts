import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import {HttpClient} from '@angular/common/http';
import {ApisService} from './../../services/apis.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'; 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


declare var android: any;


@Component({
  selector: 'app-add-new-record',
  templateUrl: './add-new-record.component.html',
  styleUrls: ['./add-new-record.component.css']
})

export class AddNewRecordComponent implements OnInit {
 
  newteam:any;

  constructor(private fb: FormBuilder,private router:Router,private page: Page,private myService:ApisService) {}


      addTeamForm = this.fb.group({
      team_name : ['',Validators.required],
      amount : ['',Validators.required],
      
      })

     
  ngOnInit() { }

  addTeam = function(data){
    this.myService.addTeam(this.addTeamForm.value).subscribe(data =>{
      
      this.newteam = data;
      if(this.newteam.status == 200){
        this.router.navigate(["/private/teamRevenue"])
      }
    });
  
  }
    

   goBack(){
    console.log("back to teams!");
    this.router.navigate(["/private/teamRevenue"]);
  }
 
  onLoadedActionBar() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor('#171717'),
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
       }
     }
   }
  
 }
