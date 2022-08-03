
import { ContactComponent } from './pages/contact/contact.component';
import {HebergementComponent} from './pages/hebergement/hebergement.component'
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardsService } from './services/auth-guards.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import {DashboardClientComponent} from './components/dashboard-client/dashboard-client.component';
import {AuthGuardGuard} from './guard/AuthGuardGuard';
import {UserComponent} from './pages/user/user.component';
import {ServeurComponent} from './pages/serveur/serveur.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {UserUpdateComponent} from './pages/user-profile/user-update/user-update.component';
import {PrecommandeComponent} from './pages/precommande/precommande.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },

  { path: 'contact', component: ContactComponent },
  {path : 'hebergement-des-sites' , component: HebergementComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'home', component: HomeAdminComponent,  canActivate: [AuthGuardGuard]},
  {path: 'Client-home', component: DashboardClientComponent, canActivate: [AuthGuardGuard]},
  {path: 'Dashboard-Admin', component: DashboardComponent },
  {path: 'user', component: UserComponent},
  {path:'serveur',component:ServeurComponent},
  {path:'user-profile' , component:UserProfileComponent},
  {path:'user-update', component:UserUpdateComponent},
  {path:'pick-domaine',component:PrecommandeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
