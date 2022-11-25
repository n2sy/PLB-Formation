import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfoServerComponent } from './info-server/info-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { SUB_ROUTING } from './sub.routing';
import { FormsModule } from '@angular/forms';
import { ListServerService } from './list-server.service';

@NgModule({
  declarations: [
    HomeServersComponent,
    InfoServerComponent,
    EditServerComponent,
  ],
  imports: [CommonModule, SUB_ROUTING, FormsModule],
  providers: [ListServerService],
})
export class SubModule {}
