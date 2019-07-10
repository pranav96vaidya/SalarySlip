import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NavModule } from './nav/nav.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';
import { FooterComponent } from './footer/footer.component';
// import { HttpInterceptorService } from './services/http-interceptor.service';
// import { AuthenticationGuardService } from './services/authentication-gurad.service';
// import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SalarySlipComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    FileUploadModule,
    LoginModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
