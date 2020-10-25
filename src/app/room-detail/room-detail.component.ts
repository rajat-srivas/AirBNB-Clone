import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { GoogleServieService } from './../services/googleServie.service';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  galleryOptions : NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  mapUrl: string;
  latitude: any;
  longitude: any;
  apiKey = 'a7d1fc0ee73824';


  constructor(private geoCodeService: GoogleServieService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 0,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];

    this.galleryImages = this.getImages();
    this.getGeoCodeFromAddress();
  }

  getImages() {
    const imageUrls = [];
    // for (let i = 0; i < this.user.photos.length; i++)
    // {
    //   imageUrls.push({
    //     small: this.user.photos[i].url,
    //     medium: this.user.photos[i].url,
    //     big: this.user.photos[i].url,
    //     description: this.user.photos[i].description
    //   });
    // }
    imageUrls.push({
      small: '../../assets/Room1.jpg',
      medium:  '../../assets/Room1.jpg',
      big:  '../../assets/Room1.jpg',
    });
    imageUrls.push({
      small: '../../assets/Room2.jpg',
      medium:  '../../assets/Room2.jpg',
      big:  '../../assets/Room2.jpg',
    });
    imageUrls.push({
      small: '../../assets/Room3.jpg',
      medium:  '../../assets/Room3.jpg',
      big:  '../../assets/Room3.jpg',
    });
    imageUrls.push({
      small: '../../assets/Room1.jpg',
      medium:  '../../assets/Room1.jpg',
      big:  '../../assets/Room1.jpg',
    });
    imageUrls.push({
      small: '../../assets/Room4.jpg',
      medium:  '../../assets/Room4.jpg',
      big:  '../../assets/Room4.jpg',
    });
    return imageUrls;
  }

getGeoCodeFromAddress() {
  this.geoCodeService.convertAddressToGeoCode('taktakpur', 'varanasi', 'uttar pradesh', 'india', '221002').subscribe((response) => {
    console.log(response);
    this.latitude = response[3].lat;
    this.longitude = response[3].lon;
    this.generateMapUrl();
    console.log(this.latitude);
    console.log(this.longitude);
  });
}

generateMapUrl(){
  // tslint:disable-next-line: max-line-length
  this.mapUrl =  'https://maps.locationiq.com/v2/staticmap?key=' + this.apiKey +
  '&center=' + this.latitude + ',' + this.longitude + '&zoom=16&size=480x480' +
  '&markers=' + this.latitude + ',' + this.longitude;
  // tslint:disable-next-line: no-bitwise
  // tslint:disable-next-line: no-unused-expression
  // '&markers=icon:large-red-cutout |' + this.latitude + '|' + this.longitude;

  console.log(this.mapUrl);
}

}
