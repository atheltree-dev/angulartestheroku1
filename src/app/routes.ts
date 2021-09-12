import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailResolver } from './_reslovers/member-detail.resolver';
import { MemberListResolver } from './_reslovers/member-list.resolver';
import { MemberEditResolver } from './_reslovers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guards';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
   path: '',
   runGuardsAndResolvers: 'always',
   canActivate: [AuthGuard],

  },
  {path: '**', redirectTo: '' , pathMatch: 'full'}
];
