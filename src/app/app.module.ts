import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import {FormsModule} from '@angular/forms';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingDetailPageComponent,
    ContactPageComponent,
    MyListingsPageComponent,
    NewListingPageComponent,
    EditListingPageComponent,
    ListingDataFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
