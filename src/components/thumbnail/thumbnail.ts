import { Component, Input } from '@angular/core';
import { PicModel } from '../../models/picModel';

/**
 * Generated class for the Thumbnail component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'thumbnail',
    templateUrl: 'thumbnail.html'
})
export class Thumbnail {
    @Input() pic: PicModel;
    url: string;
    constructor() {
    }

    ngOnInit() {
        this.url = "https://farm"
            + this.pic.farm
            + ".staticflickr.com/"
            + this.pic.server
            + "/"
            + this.pic.id
            + "_" + this.pic.secret
            + "_m.jpg"
    }
}
