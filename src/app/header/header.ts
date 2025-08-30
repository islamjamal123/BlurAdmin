import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  activeButton: string = 'home';
  sidenavToggle = output();

  get Image() {
    return 'blur-admin-logo.png';
  }
  
  setActive(button: string) {
    this.activeButton = button;
  }

  navCollapse() {
    this.sidenavToggle.emit();
  }


}
