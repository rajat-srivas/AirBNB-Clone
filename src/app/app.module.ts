import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookRoomsComponent } from './book-rooms/book-rooms.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopPlacesComponent } from './top-places/top-places.component';
import { RoomItemComponent } from './room-item/room-item.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { WhyMubnbComponent } from './why-mubnb/why-mubnb.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './footer/footer.component';
import { PlacesToStayComponent } from './places-to-stay/places-to-stay.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { HammerGesture } from './HammerGesture';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import { GoogleServieService } from './services/googleServie.service';


@NgModule({
   declarations: [
      AppComponent,
      LandingPageComponent,
      BookRoomsComponent,
      TopPlacesComponent,
      RoomItemComponent,
      WhyMubnbComponent,
      SubscribeComponent,
      GetInTouchComponent,
      SingUpComponent,
      FooterComponent,
      PlacesToStayComponent,
      NavbarComponent,
      RoomDetailComponent
   ],
   imports: [
BrowserModule,
      AppRoutingModule,
      FormsModule,
      BsDatepickerModule.forRoot(),
      BrowserAnimationsModule,
      AngularFontAwesomeModule,
      ModalModule.forRoot(),
      NgxGalleryModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyCv8H-LaaMhJjeGehn3wLvFP1lE35lEEM8'
      }),
      HttpClientModule
   ],
   providers: [
      GoogleServieService,
      {
         provide: HAMMER_GESTURE_CONFIG, useClass: HammerGesture ,
      },
   ],
   bootstrap: [
      AppComponent,
      SingUpComponent
   ]
})
export class AppModule { }
