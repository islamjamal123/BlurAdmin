import { Component, Input, input, ViewEncapsulation } from '@angular/core';
import { Versions } from "../versions/versions";
import { VersionModel } from '../versions/version.model';

@Component({
  selector: 'app-content',
  imports: [Versions],
  templateUrl: './content.html',
  styleUrl: './content.css',
  encapsulation: ViewEncapsulation.None
})
export class Content {
version = input<VersionModel>();
image = 'blue-preview.jpg'

versions = [
  {
        text: 'Mint version',
        img: {src: 'https://akveo.github.io/blur-admin/images/blur-preview-mint.jpg', alt: 'akveo site' },
        link: { href: 'http://akveo.com/blur-admin/', class: 'image-link' }
    },
    {
        text: 'Blur version (experimental)',
        img: {src: 'blur-preview.jpg', alt: 'akveo site' },
        link: { href: 'http://akveo.com/blur-admin/', class: 'image-link' }
    }
]

items = [
  {img: 'img1.svg', title: 'Awesome structure', textInput: 'Feature-based structure has proven itself as a good choice for large angular applications.'},
  {img: 'img2.svg', title: 'Neat design', textInput: 'We have put a lot of efforts and carefully selected each color and character for this template!'},
  {img: 'img3.svg', title: 'Ease of customization', textInput: 'Check out our article, where we describe how you can create different look in just 2 minutes!'}
]
}