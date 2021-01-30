import { Component, Inject } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'livre',
  templateUrl: './livre.component.html'
})
export class LivreComponent {
  public app: AppComponent;
  public titre: string;
  public nom: string;
  public prenom: string;
  public vie: string;
  public tags: string;
  public bookshelves: string;
  public droits: string;
  public type: string;
  public nbTelechargements: string;
  public linkContent: string;

  constructor(app: AppComponent) {
    this.app = app;
    this.manageContent();
    this.app.setContent(this.linkContent);
  }

  public manageContent() {
    var detail = this.app.getDetails();
    this.titre = detail.json()['title'];
    this.nom = detail.json()['authors'][0]['last_name'];
    this.prenom = detail.json()['authors'][0]['first_name'];
    this.vie = detail.json()['authors'][0]['authorBirth'] + '-' + detail.json()['authors'][0]['authorDeath'];
    this.bookshelves = detail.json()['subjects'];
    this.droits = detail.json()['copyright'];
    this.type = detail.json()['subjects'];
    this.nbTelechargements = detail.json()['downloadCount'];
    this.linkContent = detail.json()['donwloadLink'];
  }


}
