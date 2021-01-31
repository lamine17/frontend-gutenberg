import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public tabIdLivre: number[] = Array(30);
  public app: AppComponent;
  public livres: any[];
  public livresId: any[];
  public cookieID: string;
  public url: string;
  public baseUrl: string;
  public cookieService: CookieService;
  public router: Router;

  public BookContent: string[] = new Array(30);
  public isVisible: boolean[] = new Array(30);
  public count: number = 0;
  public nb_results: number = 10;
  public hasPages: boolean = false;
  public hasPagesP: boolean = false;


  constructor(app: AppComponent, router: Router, @Inject('BASE_URL') baseUrl: string, cookieService: CookieService) {
    this.app = app;
    this.url = this.app.getUrlR();
    this.cookieID = this.app.getCookies();
    this.cookieService = cookieService;
    this.baseUrl = baseUrl;
    this.getLivre();
    this.router = router;
    this.getLivresId();
    var i = 0;

    this.isVisible[0] = false;
    while (i < this.nb_results && i < this.livres.length) {
      this.BookContent[i] = this.livres[i];
      this.isVisible[i] = true;
      i = i + 1;
    }
    while (i < 30) {
      this.isVisible[i] = false;
      i = i + 1;
    }

    if (this.livres.length >= this.count + 10) {
      this.hasPages = true;
    }
    if (this.count > 0) {
      this.hasPagesP = true;
    }

  }

  public livre(n: number) {
    var id = this.livresId[n];
    this.app.setDetailID(id);
    if (this.cookieService.check(this.cookieID)) {
      this.cookieService.set(this.cookieID, this.livres[n] + "****" + this.livresId[n] + ";;;" + this.cookieService.get(this.cookieID));
    }
    else {
      this.cookieService.set(this.cookieID, this.livres[n]);
    }
    this.router.navigateByUrl("livre");
  }

  public getLivre() {
    this.livres = this.app.getLivres();
  }

  public suiv() {
    this.hasPages = false;
    this.hasPagesP = false;
    this.count = this.count + 10;
    var i = this.count;
    var j = 0;

    while (j < this.nb_results && i < this.livres.length) {
      this.BookContent[j] = this.livres[i];
      this.isVisible[j] = true;
      i = i + 1;
      j = j + 1;
    }
    while (j < 30) {
      this.isVisible[j] = false;
      j = j + 1;
    }
    if (this.livres.length >= this.count + 10) {
      this.hasPages = true;
    }
    if (this.count > 0) {
      this.hasPagesP = true;
    }
  }

  public prec() {
    this.hasPages = false;
    this.hasPagesP = false;
    this.count = this.count - 10;
    var i = this.count;
    var j = 0;

    while (j < this.nb_results && i < this.livres.length) {
      this.BookContent[j] = this.livres[i];
      this.isVisible[j] = true;
      i = i + 1;
      j = j + 1;
    }
    while (j < 30) {
      this.isVisible[j] = false;
      j = j + 1;
    }
    if (this.livres.length >= this.count + 10) {
      this.hasPages = true;
    }
    if (this.count > 0) {
      this.hasPagesP = true;
    }
  }

  public getLivresId() {
    this.livresId = this.app.getLivresId();
  }
}
