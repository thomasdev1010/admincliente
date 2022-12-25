import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddClienteComponent } from './users/add-cliente/add-cliente.component';
import { EditClienteComponent } from './users/edit-cliente/edit-cliente.component';
import { SeeClienteComponent } from './users/see-cliente/see-cliente.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'add-cliente', component: AddClienteComponent},
    {path: 'edit-cliente', component: EditClienteComponent},
    {path: 'see-cliente', component: SeeClienteComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
