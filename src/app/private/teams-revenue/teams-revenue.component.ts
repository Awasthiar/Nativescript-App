import { Component, OnInit } from '@angular/core';
import {isAndroid} from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ApisService} from './../../services/apis.service';
import { confirm } from "tns-core-modules/ui/dialogs";


declare var android: any

@Component({
  selector: 'app-teams-revenue',
  templateUrl: './teams-revenue.component.html',
  styleUrls: ['./teams-revenue.component.css']
})
export class TeamsRevenueComponent implements OnInit {
   teamList: any;
  constructor(private page: Page,private router:Router,private myService:ApisService) { }

  ngOnInit() {
    this.myService.getTeams().subscribe(response =>{
      this.teamList = response.data;
      console.log(response.data);
    });
  }

  displayConfirmDialog() {
    // >> confirm-dialog-code
    let options = {
        title: "Delete Team",
        message: "Are you sure you want to delete your team?",
        okButtonText: "Yes",
        cancelButtonText: "No",
        neutralButtonText: "Cancel"
    };

    confirm(options).then((result: boolean) => {
        console.log(result);
        
    });
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

  
  addRecord(){
    this.router.navigate(["/private/addRecord"]);
  }
  editRecord(){
    this.router.navigate(["/private/editRecord"]);
  }

  // deleteRecord(){
  //   this.router.navigate(['/private/deleteRecord']);
  // }

  logout() {
    this.myService.logout().subscribe(response => {
      localStorage.removeItem('accessToken');
      console.log('Logged out!');
      this.router.navigate(['']);
    });
  }

}
