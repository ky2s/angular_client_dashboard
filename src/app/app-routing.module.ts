// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectComponent } from './project/project.component';
import { SettingComponent } from './setting/setting.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CompanyComponent } from './company/company.component';
import { CompanyAdminComponent } from './company-admin/company-admin.component';
import { CompanyOwnedComponent } from './company-owned/company-owned.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { AppSettingsEditComponent } from './app-settings-edit/app-settings-edit.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllUsersEditComponent } from './all-users-edit/all-users-edit.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { TeamUserListComponent } from './team-user-list/team-user-list.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LoginComponent
  },
  {
    path:'profile',
    component:AccountComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
 
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'setting',
    component:SettingComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'project/add',
    component:ProjectAddComponent
  },
  {
    path:'project/edit/:id',
    component:ProjectEditComponent
  },
  {
    path:'project/delete/:id',
    component:ProjectComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'user/get_list_user',
    component:UserComponent
  },
  {
    path:'user/get_detail_user/:id',
    component:UserDetailComponent
  },
  {
    path:'subscription',
    component:SubscriptionComponent
  },
  {
    path:'companies',
    component:CompanyComponent
  },
  {
    path:'company_owned/:id',
    component:CompanyOwnedComponent
  },
  {
    path:'company_admin/:id',
    component:CompanyAdminComponent
  },
  {
    path:'company_detail/:id',
    component:CompanyDetailComponent
  },
  {
    path:'attendance_detail/:id',
    component:AttendanceDetailComponent
  },
  {
    path:'purchase',
    component:PurchaseComponent
  },
  {
    path:'app_settings',
    component:AppSettingsComponent
  },
  {
    path:'app_settings/edit/:id',
    component:AppSettingsEditComponent
  },
  {
    path:'all_users',
    component:AllUsersComponent
  },
  {
    path:'all_users/edit/:id',
    component:AllUsersEditComponent
  },
  {
    path:'user/delete/:userid',
    component:AllUsersComponent
  },
  {
    path:'attendance_edit/edit/:id',
    component:AttendanceEditComponent
  },

  {
    path:'attendance_list/:id',
    component:AttendanceListComponent
  },

  {
    path:'team_user_list/:id',
    component:TeamUserListComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
