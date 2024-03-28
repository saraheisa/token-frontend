import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'update',
    component: UpdateComponent,
    canActivate: [AuthGuard],
  },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: '/info' },
];
