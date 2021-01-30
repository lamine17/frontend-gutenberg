import { Component, Inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public tabIdLivre: number[] = Array(30);
  public app: AppComponent;
  public livres: any[];
  public livresId: any[];
  public url: string;
  public baseUrl: string;

  public contents: any[] = new Array(30);
  public isVisible: boolean[] = new Array(30);

  public BookContent0: string;
  public BookContent1: string;
  public BookContent2: string;
  public BookContent3: string;
  public BookContent4: string;
  public BookContent5: string;
  public BookContent6: string;
  public BookContent7: string;
  public BookContent8: string;
  public BookContent9: string;
  public BookContent10: string;
  public BookContent11: string;
  public BookContent12: string;
  public BookContent13: string;
  public BookContent14: string;
  public BookContent15: string;
  public BookContent16: string;
  public BookContent17: string;
  public BookContent18: string;
  public BookContent19: string;
  public BookContent20: string;
  public BookContent21: string;
  public BookContent22: string;
  public BookContent23: string;
  public BookContent24: string;
  public BookContent25: string;
  public BookContent26: string;
  public BookContent27: string;
  public BookContent28: string;
  public BookContent29: string;

  constructor(app: AppComponent, @Inject('BASE_URL') baseUrl: string) {
    this.app = app;
    this.url = this.app.getUrl();
    this.baseUrl = baseUrl;
    this.getLivre();
    this.getLivresId();
    this.contents.push(this.BookContent0);
    this.contents.push(this.BookContent1);
    this.contents.push(this.BookContent2);
    this.contents.push(this.BookContent3);
    this.contents.push(this.BookContent4);
    this.contents.push(this.BookContent5);
    this.contents.push(this.BookContent6);
    this.contents.push(this.BookContent7);
    this.contents.push(this.BookContent8);
    this.contents.push(this.BookContent9);
    this.contents.push(this.BookContent10);
    this.contents.push(this.BookContent11);
    this.contents.push(this.BookContent12);
    this.contents.push(this.BookContent13);
    this.contents.push(this.BookContent14);
    this.contents.push(this.BookContent15);
    this.contents.push(this.BookContent16);
    this.contents.push(this.BookContent17);
    this.contents.push(this.BookContent18);
    this.contents.push(this.BookContent19);
    this.contents.push(this.BookContent20);
    this.contents.push(this.BookContent21);
    this.contents.push(this.BookContent22);
    this.contents.push(this.BookContent23);
    this.contents.push(this.BookContent24);
    this.contents.push(this.BookContent25);
    this.contents.push(this.BookContent26);
    this.contents.push(this.BookContent27);
    this.contents.push(this.BookContent28);
    this.contents.push(this.BookContent29);
    var i = 0;
    for (let l in this.livres) {
      this.contents[i] = l;
      this.isVisible[i] = true;
      i = i + 1;
    }

  }

  public incrementCounter() {
    this.currentCount++;
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
