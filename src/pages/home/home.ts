import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { Picture } from '../picture/picture';

import { PicModel } from '../../models/picModel';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    pictures: { photos: { photo: Array<PicModel> } } = { photos: { photo: [] } };

    constructor(private http: Http, private navCtrl: NavController) {

        this.http.get("https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=0c731f4470260b5ff4ccc3d519d07697&format=json&nojsoncallback=1&per_page=500")
            .subscribe(response => this.pictures = response.json());
    }

    onClickDetails(pic: PicModel) {
        this.navCtrl.push(Picture, { pic: pic });
    }
}
