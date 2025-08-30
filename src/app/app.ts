import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Content } from "./content/content";
import { Sidenav } from "./sidenav/sidenav";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Content, Sidenav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'bluradmin';

  navOpen = false;

  onSideNavToggle() {
  this.navOpen = !this.navOpen;
}

}


