import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { AddClienteComponent } from './users/add-cliente/add-cliente.component';
import { EditClienteComponent } from './users/edit-cliente/edit-cliente.component';
import { SeeClienteComponent } from './users/see-cliente/see-cliente.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    UsersComponent,
    AddClienteComponent,
    EditClienteComponent,
    SeeClienteComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
    
  ]
})
export class DashboardModule { }
