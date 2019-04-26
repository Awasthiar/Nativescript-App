import { ApisService } from './services/apis.service';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { Http ,HttpModule} from '@angular/http'
import { HomeComponent } from './home/home.component';
//import { ActionBarComponent } from './shared/ui/action-bar/action-bar.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   // ActionBarComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    

  ],
  providers: [ApisService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
