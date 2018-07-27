import { AuthGuard } from './../shared/guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
      path: '',
      component: AdminComponent,
      children:[
        {
          path: 'dashboard',
          component: DashboardComponent,
          canActivate:[AuthGuard],  
      },
      {
          path:'product',
          component: ProductsComponent,   
          canActivate:[AuthGuard],      
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: "full"
      }
      ]
    }
];

@NgModule({
  imports: [
    CommonModule ,FormsModule ,RouterModule.forChild(routes)
  ],
  declarations: [AdminComponent,DashboardComponent,ProductsComponent, HeaderComponent]
})
export class AdminModule { }
