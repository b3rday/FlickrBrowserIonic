import { Component, Input } from '@angular/core';
import { PicModel } from '../../models/picModel';

@Component({
    selector: 'thumbnail',
    templateUrl: 'thumbnail.html'
})
export class Thumbnail {
    @Input() pic: PicModel;
    url: string;
    title: string;

    constructor() { }

    ngOnInit() {
        this.url = "https://farm"
            + this.pic.farm
            + ".staticflickr.com/"
            + this.pic.server
            + "/"
            + this.pic.id
            + "_" + this.pic.secret
            + "_q.jpg";

        this.title = this.pic.title;
    }
}
