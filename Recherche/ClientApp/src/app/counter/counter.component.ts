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
    for (let l in this.livres) {
      this.BookContent[i] = this.livres[l];
      this.isVisible[i] = true;
      i = i + 1;
    }
    while (i < 30) {
      this.isVisible[i] = false;
      i = i + 1;
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

  public getLivresId() {
    this.livresId = this.app.getLivresId();
  }
}
