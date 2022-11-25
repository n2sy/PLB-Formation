import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { InfosComponent } from './infos/infos.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    // component: CvComponent,
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: UpdateComponent },
    ],
  },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manage-servers', component: ManageServersComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes);
