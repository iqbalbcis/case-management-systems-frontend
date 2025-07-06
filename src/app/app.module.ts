import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MenuandheaderComponent } from './component/menuandheader/menuandheader.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ErrorComponent } from './component/error/error.component';

import { SpinnerComponent } from './component/spinner/spinner.component';
import { SpinnerInterceptorService } from './service/interceptor/spinner-interceptor.service';
import { AlertComponent } from './component/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuandheaderComponent,
    FooterComponent,
    DashboardComponent,
    ErrorComponent,
    SpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService , multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
