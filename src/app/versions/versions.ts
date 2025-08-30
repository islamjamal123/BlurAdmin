import { Component, input} from '@angular/core';
import { VersionModel } from './version.model';

@Component({
  selector: 'app-versions',
  imports: [],
  templateUrl: './versions.html',
  styleUrl: './versions.css'
})

export class Versions {
version = input<VersionModel>();
isShowDemo = false;

onShowDemo() {
  this.isShowDemo = !this.isShowDemo;
}
}
