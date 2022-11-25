import { RouterModule, Routes } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfoServerComponent } from './info-server/info-server.component';

const subRoutes: Routes = [
  {
    path: 'serveurs',
    component: HomeServersComponent,
    children: [
      { path: ':myid', component: InfoServerComponent },
      { path: ':myid/edit', component: EditServerComponent },
    ],
  },
];
// A voir
// export const SUB_ROUTING = RouterModule.forRoot(subRoutes);
export const SUB_ROUTING = RouterModule.forChild(subRoutes);
