import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CvDetailsComponent } from './cv-details/cv-details.component';
import { ErrorComponent } from './error/error.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { 
    path: '',
    component: HeaderComponent,
    children: 
    [ 
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'cv',
        component: CvComponent,
        children: [
          { path: ':id/cvDetails', component: CvDetailsComponent }
        ]
      },
      { path: 'addCv', component: AddCvComponent }
    ] 
  },
  { path: '**' , component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
