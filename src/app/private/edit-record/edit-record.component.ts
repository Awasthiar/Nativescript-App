import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import {HttpClient} from '@angular/common/http';
import {ApisService} from './../../services/apis.service';

declare var android: any;

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  constructor(private router:Router,private page: Page,private myService:ApisService) { }

  ngOnInit() {
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
 
   goBack(){
    console.log("back to teams!");
    this.router.navigate(["/private/teamRevenue"]);
  }
 
}
