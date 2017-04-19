import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { PicModel } from '../../models/picModel';

@Component({
    selector: 'page-picture',
    templateUrl: 'picture.html',
})

export class Picture {
    url: string;

    constructor(public navParams: NavParams) {
        let pic: PicModel = navParams.get("pic");
        this.url = "https://farm"
            + pic.farm
            + ".staticflickr.com/"
            + pic.server
            + "/"
            + pic.id
            + "_" + pic.secret
            + "_b.jpg"
    }
}
