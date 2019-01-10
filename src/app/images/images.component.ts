import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images: GalleryItem[];
  SNEF_PATH: string = 'assets/images/gallery/SNEF/';
  // Is there a better solution so get the file names, without a backend?
  imageNames = [
    "IMG_3325-min.JPG",
    "IMG_3328-min.JPG",
    "IMG_3367-min.JPG",
    "IMG_3368-min.JPG",
    "IMG_3369-min.JPG",
    "IMG_3376-min.JPG",
    "IMG_3377-min.JPG",
    "IMG_3378-min.JPG",
    "IMG_3379-min.JPG",
    "IMG_3380-min.JPG",
    "IMG_3381-min.JPG",
    "IMG_5442-min.JPG",
    "IMG_5446-min.JPG",
    "IMG_5448-min.JPG",
    "IMG_5451-min.JPG",
    "IMG_5452-min.JPG",
    "IMG_5454-min.JPG",
    "IMG_5478-min.JPG",
    "IMG_5487-min.JPG",
    "IMG_5488-min.JPG"
  ];

  constructor() { }

  ngOnInit() {
    this.initGallery(this.imageNames)
  }

  initGallery(names) {
    var items = [];
    for (let name of names) {
      items[items.length] = new ImageItem({ src: this.SNEF_PATH + name, thumb: this.SNEF_PATH + name })
    }
    this.images = items;
  }

}
