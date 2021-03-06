import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BsDatepickerModule, BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe } from 'time-ago-pipe';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
 import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
 import { MemberDetailResolver } from './_reslovers/member-detail.resolver';
import { MemberListResolver } from './_reslovers/member-list.resolver';
 import { MemberEditResolver } from './_reslovers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guards';


export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MessagesComponent,
     TimeAgoPipe
   ],
  imports: [
    BrowserModule,
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule,
   BsDropdownModule.forRoot(),
   BsDatepickerModule.forRoot(),
   TabsModule.forRoot(),
   RouterModule.forRoot(appRoutes),
   NgxGalleryModule,
   FileUploadModule,
   JwtModule.forRoot({
     config:{
       tokenGetter: tokenGetter,
       whitelistedDomains: ['localhost:44348'],
       blacklistedRoutes: ['localhost:44348/api/auth']
     }
   })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChanges
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
