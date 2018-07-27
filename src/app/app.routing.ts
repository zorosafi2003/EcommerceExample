import { AdminModule } from './admin/admin.module';
import { SignupComponent } from './shared/components/signup/signup.component';
import { LoginComponent } from './shared/components/login/login.component';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router'

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path:'admin',
        loadChildren: () => AdminModule 
    },
    {
        path: '**',
        redirectTo: 'login'
    }

];

export const AppRoutingModule = RouterModule.forRoot(routes, { preloadingStrategy:PreloadAllModules })