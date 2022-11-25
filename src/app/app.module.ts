import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { FirstService } from './services/first.service';
import { RecruterComponent } from './recruter/recruter.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PLB_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { ExpObsComponent } from './exp-obs/exp-obs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { SubModule } from './sub/sub.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    AddAccountComponent,
    HomeAccountComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    RecruterComponent,
    AccueilComponent,
    NavbarComponent,
    InfosComponent,
    ExpObsComponent,
    NotFoundComponent,
    AddComponent,
    UpdateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PLB_ROUTING,
    SubModule,
    HttpClientModule,
  ],

  providers: [FirstService],
  // providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
