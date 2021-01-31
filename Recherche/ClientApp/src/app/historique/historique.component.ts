import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'historique',
  templateUrl: './historique.component.html'
})
export class HistoriqueComponent {
  public url: string;
  public baseUrl: string;
  public app: AppComponent;
  public cookieService: CookieService;
  public cookieID: string;
  public histoire: string = "Votre historique est vide.";
  public histoir: string[] = new Array(10);
  public isVisible: boolean[] = new Array(10);
  public toID: string[] = new Array(10);
  public router: Router;


  constructor(app: AppComponent, router: Router, @Inject('BASE_URL') baseUrl: string, cookieService: CookieService) {
    this.app = app;
    this.cookieID = this.app.getCookies();
    this.url = this.app.getUrlR();
    this.cookieService = cookieService;
    this.baseUrl = baseUrl;
    this.router = router;
    if (this.cookieService.check(this.cookieID)) {
      var text = this.cookieService.get(this.cookieID).split(";;;");
      var i = 0;
      var t = this.min(text.length, 10);
      while (i < t) {
        var tt = text[i].split("****");
        this.isVisible[i] = true;
        this.histoir[i] = tt[0];
        this.toID[i] = tt[1];
        i = i + 1;
      }
    }

  }

  public min(i, j) {
    if (i < j) {
      return i;
    }
    return j;
  }

  public effacer() {
    this.cookieService.delete(this.cookieID);
    var i = 0;
    while (i < 10 && this.isVisible[i]) {
      this.isVisible[i] = false;
      i = i + 1;
    }
  }

  public livre(n: number) {
    this.app.setDetailID(this.toID[n]);
    this.router.navigateByUrl("livre");
  }
}
