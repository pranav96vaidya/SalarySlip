import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
// import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthenticationGuardService] },
  // { path: 'home', component: FileUploadComponent, canActivate: [AuthenticationGuardService]}
  { path: 'slip/:id1/:id2', component: SalarySlipComponent, canActivate: [AuthenticationGuardService]},
  { path: 'uploadfile', component: FileUploadComponent, canActivate: [AuthenticationGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
