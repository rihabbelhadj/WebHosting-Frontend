import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ContactComponent } from './pages/contact/contact.component';
import { HebergementComponent } from './pages/hebergement/hebergement.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import {ToastrModule} from 'ngx-toastr';
import { UserComponent } from './pages/user/user.component';
import { CardChartComponent } from './pages/card-chart/card-chart.component';
import { CardLineChartComponent } from './pages/card-line-chart/card-line-chart.component';
import { CardStatsComponent } from './pages/card-stats/card-stats.component';
import { ModalDialogComponent } from './pages/modal-dialog/modal-dialog.component';
import { ServeurComponent } from './pages/serveur/serveur.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserUpdateComponent } from './pages/user-profile/user-update/user-update.component';
import { PrecommandeComponent } from './pages/precommande/precommande.component';
import { TypeFacturationComponent } from './pages/type-facturation/type-facturation.component';
import {GooglePayButtonModule} from '@google-pay/button-angular';
import { PayementComponent } from './pages/payement/payement.component';
import { ServiceComponent } from './pages/service/service.component';
import { CommandeComponent } from './pages/commande/commande.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,

    ContactComponent,

    HebergementComponent,

    LoginComponent,

    SidebarComponent,

    DashboardComponent,

    HomeAdminComponent,

    RegisterComponent,

    DashboardClientComponent,

    UserComponent,

    CardChartComponent,

    CardLineChartComponent,

    CardStatsComponent,

    ModalDialogComponent,

    ServeurComponent,

    UserProfileComponent,

    UserUpdateComponent,

    PrecommandeComponent,

    TypeFacturationComponent,

    PayementComponent,

    ServiceComponent,

    CommandeComponent,



  ],
    imports: [
        GooglePayButtonModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        Ng2OrderModule,
      AngularFontAwesomeModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
