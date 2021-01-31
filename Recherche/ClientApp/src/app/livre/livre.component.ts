import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
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
  public router: Router;

  constructor(app: AppComponent, router: Router) {
    this.app = app;
    this.manageContent();
    this.app.setContent(this.linkContent);
    this.router = router;
  }

  public manageContent() {
    var detail = this.app.getDetails();
    console.log(detail);
    this.titre = detail['title'];
    this.nom = detail['authors']["0"]['last_name'];
    this.prenom = detail['authors']["0"]['first_name'];
    this.vie = detail['authors']["0"]['authorBirth'] + '-' + detail['authors']["0"]['authorDeath'];
    this.bookshelves = detail['subjects'];
    this.droits = detail['copyright'];
    this.type = detail['mediaType'];
    this.nbTelechargements = detail['downloadCount'];
    this.linkContent = detail['donwloadLink'];
  }

  public read() {
    this.router.navigateByUrl(this.linkContent);
  }

}
