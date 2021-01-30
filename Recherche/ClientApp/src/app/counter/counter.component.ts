import { Component, Inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public tabIdLivre: number[] = Array(30);
  public app: AppComponent;
  public livres: any[];
  public livresId: any[];
  public url: string;
  public baseUrl: string;

  public BookContent: string[] = new Array(30);
  public isVisible: boolean[] = new Array(30);


  constructor(app: AppComponent, @Inject('BASE_URL') baseUrl: string) {
    this.app = app;
    this.url = this.app.getUrl();
    this.baseUrl = baseUrl;
    this.getLivre();
    this.getLivresId();
    var i = 0;
    this.isVisible[0] = false;
    for (let l in this.livres) {
      this.BookContent[i] = l;
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
    var details;
    /*  envoyer requete selon id pour recevoir detail
     * */
    this.app.setDetails(details);
  }

  public getLivre() {
    this.livres = this.app.getLivres();
  }

  public getLivresId() {
    this.livresId = this.app.getLivresId();
  }
}
