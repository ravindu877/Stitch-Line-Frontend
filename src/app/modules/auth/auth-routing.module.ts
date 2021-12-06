import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./component/login-page/login-page.component";
import {LoginItemsComponent} from "./component/login-page/login-items/login-items.component";
import {SignUpItemsComponent} from "./component/login-page/sign-up-items/sign-up-items.component";

const routes: Routes = [
  {path: '', redirectTo:'/auth/login/access', pathMatch:'full'},
  {path: 'login', component: LoginPageComponent, children:[
      {path:'', redirectTo: '/auth/login/access', pathMatch:'full'},
      {path:'access', component: LoginItemsComponent},
      {path:'register', component: SignUpItemsComponent},
    ] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
