import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MenuComponent } from './menu/menu.component';
import { CompanyComponent } from './company/company.component';
import { CompanyOwnedComponent } from './company-owned/company-owned.component';
import { CompanyAdminComponent } from './company-admin/company-admin.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';

import { PurchaseComponent } from './purchase/purchase.component';
import { TransformWithRpPipe } from './custom-number.pipe';
import { TransformWithoutRpPipe } from './custom-number.pipe';
import { FormatDatePipe } from './custom-number.pipe';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { AppSettingsEditComponent } from './app-settings-edit/app-settings-edit.component';
import { NavComponent } from './nav/nav.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllUsersEditComponent } from './all-users-edit/all-users-edit.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { FooterComponent } from './footer/footer.component';
import { TeamUserListComponent } from './team-user-list/team-user-list.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    SettingComponent,
    LoginComponent,
    ProjectComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    AdminComponent,
    UserComponent,
    SubscriptionComponent,
    UserDetailComponent,
    MenuComponent,
    CompanyComponent,
    CompanyOwnedComponent,
    CompanyAdminComponent,
    CompanyDetailComponent,
    AttendanceDetailComponent,
    AttendanceEditComponent,
    PurchaseComponent,
    TransformWithRpPipe,
    TransformWithoutRpPipe,
    FormatDatePipe,
    AppSettingsComponent,
    AppSettingsEditComponent,
    NavComponent,
    AllUsersComponent,
    AllUsersEditComponent,
    AttendanceListComponent,
    FooterComponent,
    TeamUserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    
    NgApexchartsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
