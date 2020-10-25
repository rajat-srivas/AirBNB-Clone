import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';

@Injectable()
export class GoogleServieService {
url = 'https://us1.locationiq.com/v1/search.php?key=';
apiKey = 'a7d1fc0ee73824';
geoLocation: any;
generatedUrl: string;

constructor(private http: HttpClient) { }

convertAddressToGeoCode(street, city, state, country, postalcode) : Observable<any> {
this.generatedUrl = this.url + this.apiKey + '&format=json' + '&street=' + street +
'&city=' + city + '&state=' + state + '&country=' + country + '&postcode=' + postalcode;
console.log(this.generatedUrl);
return this.http.get(this.generatedUrl);
}

}

